const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');
const path = require('path');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

const PORT = process.env.PORT || 3000;

app.get('/*', (req, res) => {
   res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.post('/send', function (req, res) {
   let mail = {
      to: 'agcasarlilar@gmail.com',
      from: req.body.email,
      subject: req.body.subject,
      text: req.body.message,
      html: `
      <div>${req.body.message} + 
      <p>Email: ${req.body.email}</p>
      <p>İsim: ${req.body.firstName} ${req.body.lastName}</p></div>
    `
   }
   let transporter = nodeMailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
         user: 'agcasarlilar@gmail.com',
         pass: 'MfyoW3xTV17Jxsla1Rfl'
      }
   });

   transporter.sendMail(mail, (error, info) => {
      if (error) {
         // ERROR SERVER RESPONSE
         res.status(500).send({status: 'FAIL', msg: 'Internal error: email not sent'});
      } else {
         // SUCCESS SERVER RESPONSE
         res.status(200).json({status: 'OK', msg: 'Email sent'})
      }

      if (error == null) {
         console.log('Message %s sent: %s', info.messageId, info.response);
      }
   })
});

app.listen(PORT, function () {
   console.log('Server is running at port: ', PORT);
});