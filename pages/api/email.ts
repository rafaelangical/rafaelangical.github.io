import sgMail from '@sendgrid/mail';
import type { NextApiRequest } from 'next';

export default async (req: NextApiRequest) => {
  const { subject, text, from } = req.body;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'rafaelangical2@gmail.com',
    from, // Use the email address or domain you verified above
    subject: subject as string,
    text,
    html: `<hr /><br /><strong>${from} send a email to you</strong><br /><hr />`,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  }
}