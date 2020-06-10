const express = require("express");
const app = express();

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

app.use(express.json()) 
app.use (express.urlencoded({extended: false}))


app.post('/form_submit', (request, response) => {
  var data = request.body;
  const msg = {
      to: 'dartuarob@gmail.com',
      from: 'dartuarob@gmail.com',
      subject: 'Message from Portfolio',
      html: '<h3><strong>From ' + data.name + '</strong> </h3>' +'<h4><strong>' + data.email + '</strong></h4>' + '<h4><strong>' + data.phone + '</strong></h4>' + "<p>" + data.message + '</p>',
  };
  sgMail.send(msg).then(() => {
    console.log('Message sent')
  }).catch((error) => {
      console.log(error.response.body)
      response.sendStatus(300);
  })
  response.sendStatus(200);
});

app.listen(8000, () => console.log("listening on port 8000"));