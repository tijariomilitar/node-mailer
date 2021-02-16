var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'annylfcarvalho@gmail.com',
    pass: '968056237'
  }
});

var mailOptions = {
  from: 'annylfcarvalho@gmail.com',
  to: 'hhlyras2011@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

let customers = [
	{
		name: "Henrique Lyra",
		email: "hhlyras2011@gmail.com"
	},
	{
		name: "J.A Rio Militar",
		email: "jariomilitar@gmail.com"
	}
];

for(i in customers){
	var mailOptions = {
	  from: 'youremail@gmail.com',
	  to: customers[i].email,
	  subject: 'Sending Email using Node.js',
	  html: ''
	};

	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email sent: ' + info.response);
	  };
	});
};

// var mailOptions = {
//   from: 'youremail@gmail.com',
//   to: 'myfriend@yahoo.com',
//   subject: 'Sending Email using Node.js',
//   html: '<h1>Welcome</h1><p>That was easy!</p>'
// }