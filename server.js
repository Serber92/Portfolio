const express = require("express");
const app = express();

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('###');

app.use(express.json()) 
app.use (express.urlencoded({extended: false}))

app.get('/api',(request, response ) => {
	response.send("ROOT");
});


app.post('/api/form_submit', (request, response) => {
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

app.listen(5000, () => console.log("listening on port 5000"));
