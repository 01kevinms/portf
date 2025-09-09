import { useState } from "react";
import { Container } from "./buttonstyle";
import emailjs from "emailjs-com";

interface ContactButtonProps {
  onSuccess?: () => void; // Função para fechar o modal
}

const ContactButton = ({ onSuccess }: ContactButtonProps) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [showToast, setShowToast] = useState<boolean>(false);

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("Enviando...");
  setShowToast(true);

  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
  };

  emailjs
    .send("service_1swvk64", "template_c867acd", templateParams, "X6D2EKHDoF_5isgG9")
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("Mensagem enviada com sucesso! 🚀");
        setName("");
        setEmail("");
        setMessage("");
        if (onSuccess) onSuccess();
        setTimeout(() => setShowToast(false), 3000);
      },
      (err) => {
        console.error("FAILED...", err);
        setStatus("Erro ao enviar. Tente novamente.");
        setTimeout(() => setShowToast(false), 3000);
      }
    );
};

  return (
    <Container>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Digite sua mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
      </form>

      {/* Toast de status */}
      {showToast && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "15px 20px",
            backgroundColor: status.includes("sucesso") ? "#4BB543" : "#FF4C4C",
            color: "white",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            zIndex: 9999,
          }}
        >
          {status}
        </div>
      )}
    </Container>
  );
};

export default ContactButton;
