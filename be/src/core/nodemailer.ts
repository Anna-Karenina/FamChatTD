import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "bc171ea2620849",
    pass: "26a44d38c995ed"
  }
});

export default transport;
