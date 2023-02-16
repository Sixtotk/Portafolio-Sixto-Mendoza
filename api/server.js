const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const emailUser = process.env.USUARIO;
const emailPass = process.env.CLAVE;

app.get('/', (req, res) => {
  res.send('El servidor está funcionando');
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;
   


  const transporter = nodemailer.createTransport({
    
    service: 'gmail',
    host : 'smtp.gmail.com',
    port : 587,
    auth: {
      user: emailUser,
      pass: emailPass
    }
  });

  const mailOptions = {
    from: email,
    to: emailUser,
    subject: `Mensaje de ${name}: ${email}`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error al enviar el correo electrónico');
    } else {
      console.log('Correo electrónico enviado: ' + info.response);
      res.status(200).send('Correo electrónico enviado');
    }
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`El servidor está ejecutándose en el puerto ${port}`));