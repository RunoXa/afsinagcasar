const express = require('express');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static('public'));
const PORT = process.env.PORT || 3001;

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