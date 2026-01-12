import { useState } from "react";
import { FooterWrapper, FooterContent, ContactButton } from "./style";
import { ContactModal } from "../modals/contact/contatc";

export function Footer() {
  const [openContact, setOpenContact] = useState(false);

  return (
    <>
      <FooterWrapper>
        <FooterContent>
          <span>© 2024 Kevin Lopes. All rights reserved.</span>

          <ContactButton onClick={() => setOpenContact(true)}>
            Entrar em contato
          </ContactButton>
        </FooterContent>
      </FooterWrapper>

      {openContact && (
        <ContactModal
          isOpen={openContact}
          onClose={() => setOpenContact(false)}
        />
      )}
    </>
  );
}
