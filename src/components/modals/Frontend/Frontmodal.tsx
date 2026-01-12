import { useEffect } from "react";
import { Overlay, Modal } from "./style";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function FrontModal({ isOpen, onClose }: Props) {
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

        <span className="badge">Frontend</span>

        <h2>Interfaces modernas</h2>

        <p>
          Desenvolvimento de interfaces rápidas, responsivas e acessíveis,
          focadas em performance, UX e design consistente.
        </p>

        <ul>
          <li>✔ React / Next.js</li>
          <li>✔ Styled Components / Tailwind</li>
          <li>✔ Animações e microinterações</li>
          <li>✔ Acessibilidade (a11y)</li>
        </ul>

        <button onClick={onClose}>Entendi</button>
      </Modal>
    </Overlay>
  );
}
