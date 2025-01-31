import Title from "./Title";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  console.log("Rendering Contact Section");

  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "E-mail enviado com sucesso!",
      icon: "success",
      draggable: true,
    });

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_xman1hf",
        "template_jk0val2",
        templateParams,
        "AseywSNfRRn2D3OIr"
      )
      .then(
        (response) => {
          console.log("E-mail enviado", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <section id="contact" className="contactSection">
      <div className="container">
        <div className="ContactTitle">
          <Title text={t("contact.title")} />
        </div>

        <form name="contato" method="POST" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contato" />

          <div className="row center">
            <div className="col-4">
              <Input
                label={t("contact.fields.name")}
                type="text"
                name="name"
                id="name"
                required
                placeholder={t("contact.fields.name_placeholder")}
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="col-4">
              <Input
                label="E-mail"
                type="email"
                name="email"
                id="email"
                required
                placeholder={t("contact.fields.email_placeholder")}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
          </div>

          <div className="row center">
            <div className="col-8">
              <Textarea
                label={t("contact.fields.message")}
                name="message"
                id="message"
                rows="10"
                required
                style={{ resize: "none" }}
                placeholder={t("contact.fields.message_placeholder")}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </div>
          </div>

          <div className="btn-container center">
            <Button type="submit" text={t("contact.send_button")} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
