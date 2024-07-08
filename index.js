const fs = require('fs');

fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});


/////
const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File has been created');
});
//////
const fs = require('fs');

fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
/////////////
const generatePassword = require('generate-password');

function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 10,
    numbers: true,
  });
  console.log(password);
}

generateRandomPassword();
//////
const nodemailer = require('nodemailer');

// Configure the email transport using the default SMTP transport and a Gmail account
// You need to enable "less secure apps" on your Gmail account: https://myaccount.google.com/lesssecureapps

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

// Setup email data
const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'your-email@gmail.com',
  subject: 'Hello from Node.js',
  text: 'This is an email sent from a Node.js script!',
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});

