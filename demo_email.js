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
  to: 'CST1909160@xmu.edu.my',
  subject: '<Sending Email using Node.js>',
  text: 'Are you fucking missing me?'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});