import Title from "./title";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contactSection">
      <div className="container">
        <div className="ContactTitle">
          <Title text={t("contact.title")}></Title>
        </div>
        <form action="">
          <div className="row center">
            <div className="col-4">
              <Input
                label={t("contact.fields.name")}
                type="text"
                name="nome"
                id="nome 
              "
                placeholder={t("contact.fields.name_placeholder")}
              ></Input>
            </div>
            <div className="col-4">
              <Input
                label="E-mail"
                type="email"
                name="email"
                id="email"
                placeholder={t("contact.fields.email_placeholder")}
              ></Input>
            </div>
          </div>
          <div className="row center">
            <div className="col-8">
              <Textarea
                label={t("contact.fields.message")}
                type="text"
                name="mensagem"
                id="mensagem"
                rows="10"
                style={{ resize: "none" }}
                placeholder={t("contact.fields.message_placeholder")}
              ></Textarea>
            </div>
          </div>
          <div className="btn-container center">
            <Button text={t("contact.send_button")}></Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
