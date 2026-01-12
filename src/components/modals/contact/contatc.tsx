import ContactButton from "../../button/button";
import { CloseButton, Modal, Overlay } from "./contactstyle";


interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>✕</CloseButton>

        <h2>Entre em contato</h2>
        <p>Vamos conversar sobre seu projeto</p>

        <ContactButton onSuccess={onClose} />
      </Modal>
    </Overlay>
  );
}
