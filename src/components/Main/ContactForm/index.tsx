import { useState } from "react";
import { ButtonContact, FormStyle, InputStyled, TextAreaStyle } from "./styles";

interface ContactFormProps {
  onSubmit: (form: { email: string; message: string }) => void;
}

const ContactForm = ({ onSubmit }: ContactFormProps): JSX.Element => {
  const [form, setForm] = useState({
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <section>
      <FormStyle onSubmit={handleSubmit}>
        <label htmlFor="email">EMAIL</label>
        <InputStyled
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <label htmlFor="message">MESSAGE</label>
        <TextAreaStyle
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          required
        />
        <ButtonContact type="submit">Submit</ButtonContact>
      </FormStyle>
    </section>
  );
};

export default ContactForm;
