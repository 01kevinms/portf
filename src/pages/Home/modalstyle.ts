import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); 
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`;

export const ModalContent = styled.div`
  background: #110955ff;
  padding: 2rem;
  border-radius: 16px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 600px) {
    padding: 1.5rem;
    max-width: 100%;
    border-radius: 12px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  background: transparent;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: #ffffffff;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input,
  textarea {
    width: 100%;
    padding: 0.9rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 1rem;
  }

  textarea {
    resize: none;
    min-height: 100px;
  }

  button {
    background: #4f46e5;
    color: white;
    border: none;
    padding: 0.9rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s;

    &:hover {
      background: #3730a3;
    }
  }
`;
