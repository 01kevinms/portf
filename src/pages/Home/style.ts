import styled from "styled-components";
 
export const Body = styled.div`
  font-family: "Poppins", sans-serif;  
  .backgroundab {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -999;
    filter: contrast(150%) blur(5px);
  }
  /* === SOBRE / CONTATO === */
  .aboutctt {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    color: #fff;
    margin: 150px auto 100px auto;
    width: 90%;
    gap: 50px;
    .blog {
      background: rgba(2, 4, 17, 1);
      border: solid rgba(95, 92, 92, 0.34);
      border-radius: 10px;
      width: 40%;
      padding: 20px;
    }

    .contact {
      background: rgba(2, 4, 17, 1);
      border: solid rgba(95, 92, 92, 0.34);
      border-radius: 10px;
      width: 250px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;

      div {
        display: flex;
        gap: 70px;

        .email,
        .whatsapp,
        .linkedin {
          height: 40px;
          width: 40px;
          transition: 0.2s;
          &:hover {
            transform: scale(1.1);
            cursor: pointer;
          }
        }
      }
    }
  }

  /* ---- MEDIA QUERIES ---- */

  @media (max-width: 1400px) {
    .aboutctt {
      flex-direction: column;
      align-items: center;
      margin-top: 200px;

      .blog,
      .contact {
        width: 80%;
        left: 0;
      }
    }
  }

  @media (max-width: 768px) {
    .aboutctt {
      margin-top: 100px;

      .contact div {
        gap: 20px;
        flex-direction: row;
      }
    }
  }

  @media (max-width: 500px) {
    .aboutctt {
      margin-top: 80px;
    }

    .blog,
    .contact {
      width: 100%;
    }
  }
`

export const Container = styled.div`
  background: linear-gradient(149deg, #11314f 0%, #000 54%);
  width: 100%;
  min-height: 300px;
  .d1 {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 40px 0;

    .s1 {
      display: flex;
      flex-direction: column;
      color: #fff;
      gap: 13px;

      h1 {
        font-size: 35px;
      }

      p {
        font-size: 20px;
      }

      div {
        display: flex;
        gap: 10px;
      }

      .pj,
      .ctt {
        border-radius: 10px;       
        padding: 10px 20px;
        font-size: 1.4rem;
        cursor: pointer;
        border: 3px solid transparent;
        display: grid;
         color: #ffffffff;
        place-content: center;
        background: #036994ff;
        animation: rotate 3s linear infinite;
      }

      .pj {        
        background: #ffd43b;
        color: #000;
      }

      /* efeitos de borda animada */
      .pj:hover {
        border-image: conic-gradient(
            from var(--angle),
            #00b3ff 0deg 90deg,
            rgba(0, 0, 0, 0.8) 90deg 360deg
          )
          1;
      }

      .ctt:hover {
        border-image: conic-gradient(
            from var(--angle),
            #e2fa0b 0deg 90deg,
            rgba(0, 0, 0, 0.8) 90deg 360deg
          )
          1;
        transform: scale(1.06);
      }
    }

    .s2 {
      position: relative;
    }

    .circle {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: solid 3px #ffd500;
      box-shadow: inset 0 0 30px 1px rgba(220, 235, 10, 0.5),
        0 0 40px 10px rgba(220, 235, 10, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 250px;
        position: relative;
        top: 30px;
      }
    }
  }

  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }

  @keyframes rotate {
    to {
      --angle: 360deg;
    }
  }

  /* RESPONSIVO */

  @media (max-width: 1400px) {
    .d1 {
      flex-direction: column;
      gap: 40px;
      text-align: center;

      .s1 .pj,
      .s1 .ctt {
        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: 768px) {
    .s1 h1 {
      font-size: 30px;
    }
    .s1 p {
      font-size: 18px;
    }
  }

  @media (max-width: 480px) {
    .s1 h1 {
      font-size: 26px;
    }
    .s1 p {
      font-size: 15px;
    }

    .pj,
    .ctt {
      width: 100%;
    }

    .circle {
      width: 150px;
      height: 150px;
    }
  }
`

export const About = styled.div`
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .aboutimg {
    background: #04050f;
    color: aliceblue;
    padding: 20px;
    border-radius: 8px;
    width: 30vmax;    
    display: flex;
    flex-direction: column;
    gap: 12px;    
    align-items: center;    
    header {
      text-align: center;
    }
  }

  .allpro {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
    min-height: 600px;

    h1 {
      color: aliceblue;
      margin-bottom: 20px;
    }

    .proj {
      display: grid;
      grid-template-columns: repeat(3, 200px);
      gap: 40px;
    }
  }

  /* RESPONSIVO */

  @media (max-width: 1400px) {
    flex-direction: column;
    align-items: center;
    gap: 60px;

    .aboutimg,
    .allpro {
      width: 90%;
    }
  }

  @media (max-width: 780px) {
    .allpro .proj {
      grid-template-columns: repeat(2, 200px);
    }
  }

  @media (max-width: 500px) {
    .allpro .proj {
      grid-template-columns: 200px;
      gap: 15px;
    }
  }
`;
