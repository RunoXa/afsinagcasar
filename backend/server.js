const express = require('express');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));
const PORT = process.env.PORT || 3001;

console.log(PORT);

app.get('/send', function (req, res, next) {
   res.json({msg: 'This is CORS-enabled for all origins!'})
});

app.post('/send', function (req, res) {

   let mail = {
      from: req.body.email,
      to: 'giles.hoppe@ethereal.email',
      subject: req.body.subject,
      text: req.body.message,
      html: req.body.message
   }

   let transporter = nodeMailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
         user: 'giles.hoppe@ethereal.email',
         pass: '7Tmywfz1XVwsCPSRcP'
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
      console.log('Message %s sent: %s', info.messageId, info.response);
   })
});

app.listen(PORT, function () {
   console.log('Server is running at port: ', PORT);
});