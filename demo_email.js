var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'weiyu.sun@trames.sg',
    pass: 'qszajjcrjfmhjcrx'
  }
});

var mailOptions = {
  from: 'weiyu.sun@trames.sg',
  to: 'yhua7717@sydney.edu.au',
  subject: '<Sending Email using Node.js>',
  text: "可以互相送嘿嘿💍💍"
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});