import Button from 'components/button/button';
import TextArea from 'components/textArea/textArea';
import { useState } from 'react';
import Input from '../components/input/input';
import Layout from '../components/layout/layout';
import { Form, Label } from '../styles/contact';

const Contact: React.FC = () => {
  const [data, setData] = useState({
    subject: '', email: '', phone: '', message: ''
  });
  const [successMessage, setSuccessMessage] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    await fetch("/api/email", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject: data.subject,
        text: data.message,
        from: data.email
      }),
    }).then((res) => {
      console.log("Fetch: ", res);
      setSuccessMessage(true);
      setTimeout(() => { alert("Hello"); }, 3000);
    }).catch(err => console.log("error", err));
  }

  return (
    <Layout title="Contact" headerFixed>
      <Form>
        <p>Hello, it will be a pleasure to you, fill in the fields below and as soon as possible I will return <span role="img" aria-label="emoji">😉</span>  Thank you.</p>
        {!successMessage && (
          <>
            <Label htmlFor="subject">Subject</Label>
            <Input value={data.subject} type="text" name="subject" onChange={(e) => setData({ ...data, subject: e.target.value })} />
            <Label htmlFor="email">E-mail</Label>
            <Input value={data.email} type="email" name="email" onChange={(e) => setData({ ...data, email: e.target.value })} />
            <Label htmlFor="phone">Phone</Label>
            <Input value={data.phone} type="tel" name="phone" onChange={(e) => setData({ ...data, phone: e.target.value })} />
            <Label htmlFor="message">Message</Label>
            <TextArea value={data.message} name="message" onChange={(e) => setData({ ...data, message: e.target.value })} />

            <Button title="Submit" onClick={sendEmail} />
          </>
        )}
      </Form>
    </Layout>
  )
};

export default Contact;
