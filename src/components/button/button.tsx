import { useState } from "react";
import { Container, Toast } from "../button/buttonstyle";
import emailjs from "emailjs-com";

interface ContactButtonProps {
  onSuccess?: () => void;
}

const ContactButton = ({ onSuccess }: ContactButtonProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setShowToast(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
    };

    emailjs.send(
      "service_1swvk64",
      "template_c867acd",
      templateParams,
      "X6D2EKHDoF_5isgG9"
    ).then(
      () => {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        onSuccess?.();
        setTimeout(() => setShowToast(false), 3000);
      },
      () => {
        setStatus("error");
        setTimeout(() => setShowToast(false), 3000);
      }
    );
  };

  return (
    <Container>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          placeholder="Sua mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Enviando..." : "Enviar mensagem"}
        </button>
      </form>

      {showToast && (
        <Toast data-status={status}>
          {status === "success" && "Mensagem enviada com sucesso 🚀"}
          {status === "error" && "Erro ao enviar. Tente novamente"}
          {status === "loading" && "Enviando mensagem..."}
        </Toast>
      )}
    </Container>
  );
};

export default ContactButton;
