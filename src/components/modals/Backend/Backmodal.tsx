import { useEffect } from "react";
import { Overlay, Modal } from "./style";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function BackModal({ isOpen, onClose }: Props) {
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

        <span className="badge backend">Backend</span>

        <h2>APIs seguras e escaláveis</h2>

        <p>
          Desenvolvimento de sistemas backend robustos, focados em segurança,
          performance, organização de código e escalabilidade.
        </p>

        <ul>
          <li>✔ Node.js / NestJS</li>
          <li>✔ APIs REST & integrações</li>
          <li>✔ Autenticação e autorização</li>
          <li>✔ Banco de dados e performance</li>
        </ul>

        <button onClick={onClose}>Entendi</button>
      </Modal>
    </Overlay>
  );
}
