import { useEffect } from "react";
import { Overlay, Modal } from "./style";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function FullModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  // fechar com ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
       
        <span className="badge fullstack">Full Stack</span>

        <h2>Produto completo, ponta a ponta</h2>

        <p>
          Desenvolvimento end-to-end de aplicações, conectando interface,
          regras de negócio, APIs, banco de dados e infraestrutura.
        </p>

        <ul>
          <li>✔ Frontend moderno e responsivo</li>
          <li>✔ Backend escalável e seguro</li>
          <li>✔ Integrações, autenticação e dados</li>
          <li>✔ Arquitetura e visão de produto</li>
        </ul>

        <button onClick={onClose}>Entendi</button>
      </Modal>
    </Overlay>
  );
}
