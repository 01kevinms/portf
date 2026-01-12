import { createPortal } from 'react-dom';
import { useState } from 'react';

import full from '../../../assets/curriculofull.png';
import front from '../../../assets/curriculofront.png';
import back from '../../../assets/curriculoback.png';
import { Card, CloseButton, ContentArea, DownloadBtn, Grid, HeaderArea, Modal, Overlay, Preview, Title } from './style';

const Resumes = [
  {
    title: "Full Stack Developer",
    image: full,
    file: "/portf/resumes/fullstack.pdf",
  },
  {
    title: "Frontend Developer",
    image: front,
    file: "/portf/resumes/frontend.pdf",
  },
  {
    title: "Backend Developer",
    image: back,
    file: "/portf/resumes/backend.pdf",
  },
];

type Props = {
  isOpen: boolean;
  onClose: () => void;
};
export function CurriculoModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;
  const[open, setIsOpen] = useState<string | null>(null);


  return createPortal(
   <Overlay onClick={onClose}>
  <Modal onClick={(e) => e.stopPropagation()}>
    <CloseButton onClick={onClose}>✕</CloseButton>

    <HeaderArea>
      <Title>Escolha o currículo</Title>
    </HeaderArea>

    <ContentArea>
      <Grid>
        {Resumes.map((resume) => (
          <Card key={resume.title}>
            
             <Preview src={resume.image} onClick={()=>setIsOpen(resume.image)} style={{cursor: 'zoom-in'}} />
            <h3>{resume.title}</h3>

            <DownloadBtn href={resume.file} download>
              ⬇️ Download
            </DownloadBtn>
          </Card>
        ))}
      </Grid>
    </ContentArea>
  </Modal>
  {open &&(
    <Overlay onClick={()=>setIsOpen(null)}>
      <Modal onClick={(e)=>e.stopPropagation()}>
        <img src={open} alt="" style={{ width: "100%",
          borderRadius: "16px",
          maxHeight: "80vh",
          objectFit: "contain",}}/>
      </Modal>
      </Overlay>
  )}
     </Overlay>,
document.body
  );
}