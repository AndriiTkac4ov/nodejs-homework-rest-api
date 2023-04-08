const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (data) => {
    // const msg = {
    //     to: email,
    //     from: 'a.g.tkachov@gmail.com',
    //     subject: 'Thank you for registration',
    //     text: 'Confirm your email',
    //     html: `<a target='_blank' href='http://localhost:3000/api/users/verify/${verificationToken}'>Confirm your email</a>`,
    // };

    const msg = { ...data, from: 'a.g.tkachov@gmail.com' };
    
    try {
        await sgMail.send(msg);
        return true;
    } catch (error) {
        console.log(error.message);
    };
};

module.exports = sendEmail;
