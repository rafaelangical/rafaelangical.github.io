import Button from 'components/button/button';
import Layout from '../components/layout/layout';
import { Fieldset, Form, Input, Label } from './styles/contact';

const Contact: React.FC = () => {
  return (
    <Layout title="Contact">
      <Form>
        <p>Hello, it will be a pleasure to you, fill in the fields below and as soon as possible I will return <span role="img" aria-label="emoji">😉</span>  Thank you.</p>
        <Label htmlFor="subject">Subject</Label>
        <Input type="text" name="subject" />
        <Label htmlFor="email">E-mail</Label>
        <Input type="email" name="email" />
        <Label htmlFor="phone">Phone</Label>
        <Input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
        <Label htmlFor="message">Message</Label>
        <Fieldset name="message" />

        <Button title="Submit" onClick={() => alert("clique")} />
      </Form>
    </Layout>
  )
};

export default Contact;
