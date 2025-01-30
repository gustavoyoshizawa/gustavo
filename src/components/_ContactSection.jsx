import Title from "./Title";
// import Input from "./Input";
// import Textarea from "./Textarea";
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
          name="contato"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contato" />

          <div className="row center">
            <div className="col-4">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                name="name"
                id="name"
                required=""
                placeholder="Seu nome"
              ></input>
            </div>
            <div className="col-4">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                required=""
                placeholder="seunome@gmail.com"
              ></input>
            </div>
          </div>

          <div className="row center">
            <div className="col-8">
              <label htmlFor="message">Sua mensagem</label>
              <textarea
                name="message"
                id="message"
                rows="10"
                required=""
                placeholder="Olá Gustavo, tudo bem?..."
                style="resize: none;"
              ></textarea>
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
