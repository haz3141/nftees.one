import type {NextApiRequest, NextApiResponse} from 'next';
import sendgrid from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error('Invalid environment variable: "SENDGRID_API_KEY"');
}

const apiKey = process.env.SENDGRID_API_KEY;

sendgrid.setApiKey(apiKey);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userEmail = req.body;

  const message = {
    to: userEmail,
    from: 'info@nftees.one',
    subject: 'Testing',
    text: 'This is a test email',
  };

  await sendgrid.send(message).then(response => {
    const code = response[0].statusCode; // Use response from SendGrid
    res.status(code).send(code);
  });
}
