const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/send-email', function(req, res){
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tu_correo_electronico@gmail.com',
            pass: 'tu_contraseña'
        }
    });

    let mailOptions = {
        from: req.body.email,
        to: 'destinatario@gmail.com',
        subject: 'Formulario de contacto',
        text: 'Nombre: ' + req.body.name + '\nCorreo electrónico: ' + req.body.email + '\nMensaje: ' + req.body.message
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.send('Error al enviar el correo electrónico');
        }else{
            console.log('Correo electrónico enviado: ' + info.response);
            res.send('Correo electrónico enviado');
        }
    });
});

app.listen(3000, function(){
    console.log('Servidor iniciado en el puerto 3000');
});