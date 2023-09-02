import { ChangeEvent, FormEvent, useState } from "react";
import MainPage from "../components/layout/main-page";
import Button from "../components/ui/button";

import contactPageData from "../lib/json/contact.json";

const Contact = () => {
  const [formFields, setFormFields] = useState<FormFields>({
    name: "",
    email: "",
    content: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert();
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof FormFields
  ) => {
    setFormFields((prev) => ({ ...prev, [field]: event.target.value.trim() }));
  };

  return (
    <MainPage title={contactPageData.title} content={contactPageData.content}>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <input
          onChange={(event) => handleChange(event, "name")}
          placeholder="Name of the addresser"
          className="input"
        />
        <input
          onChange={(event) => handleChange(event, "email")}
          placeholder="Ways to reach back to you"
          className="input"
        />
        <textarea
          rows={6}
          placeholder="Write down your input"
          className="input"
          onChange={(event) => handleChange(event, "content")}
        />
        <Button className="mx-auto">Submit your inquiry</Button>
      </form>
    </MainPage>
  );
};

type FormFields = {
  name: string;
  email: string;
  content: string;
};

export default Contact;
