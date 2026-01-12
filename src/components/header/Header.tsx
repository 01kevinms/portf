import {
  HeaderWrapper,
  Card,
  AnimatedBg,
  Gradient,
  Glow,
  Glow2,
  Content,
  Avatar,
  Name,
  Role,
  Socials,
  Buttons,
  Button,
} from "./style";
import profile from '../../assets/avatarpn.png'; 

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { github, linked } from "../links/links";
import { useState } from "react";
import { CurriculoModal } from "../modals/download/curriculo";

export default function Header() {
  const [openResumeModal, setOpenResumeModal] = useState(false);
  return (
    <HeaderWrapper>
      
      <Card>
        {/* Background animado só no card */}
        <AnimatedBg>
          <Gradient />
          <Glow />
          <Glow2 />
        </AnimatedBg>

        <Content>
          <Avatar>
            <img src={profile} alt="Foto de perfil" />
          </Avatar>

          <Name>Kevin Victor</Name>
          <Role>Full Stack Developer</Role>

          <Socials>
            <a onClick={github}><FaGithub /></a>
            <a onClick={linked}><FaLinkedin /></a>           
          </Socials>

          <Buttons>
            <Button onClick={()=>setOpenResumeModal(true)}>
              Curriculo
            </Button>
            {openResumeModal && (
              <CurriculoModal
              isOpen={openResumeModal}
              onClose={() => setOpenResumeModal(false)}
              />
            )}
            <a href="https://wa.me/5579991393965" target="_blank" rel="noopener noreferrer">
              <Button $primary>
                <FaWhatsapp />
                WhatsApp
              </Button>
            </a>
          </Buttons>
        </Content>
      </Card>
    </HeaderWrapper>
  );
}
