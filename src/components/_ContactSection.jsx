import Title from "./Title";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

const ContactSection = () => {
  console.log("Rendering Contact Section");
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    Swal.fire({
      title: "E-mail enviado com sucesso!",
      icon: "success",
      draggable: true,
    });

    form.reset();
  };

  return (
    <section id="contact" className="contactSection">
      <div className="container">
        <div className="ContactTitle">
          <Title text={t("contact.title")} />
        </div>

        <form
          method="POST"
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Não preencha isso: <input name="bot-field" />
            </label>
          </p>

          <div className="row center">
            <div className="col-4">
              <Input
                label={t("contact.fields.name")}
                type="text"
                name="name"
                id="name"
                required
                placeholder={t("contact.fields.name_placeholder")}
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
