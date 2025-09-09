import styled from "styled-components";
 
export const Body = styled.div`
.backgroundab{
  width: 100%;
  height: 150%;
  position: absolute;
  z-index: -5;
  filter: contrast(150%) blur(5px);
}
  font-family: "poppins", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
.aboutctt {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start; /* alinha topo das colunas */
  color: #fff;
  margin: 200px auto 0 auto;
  width: 90%;
  gap: 50px;

  .blog {
    background: rgba(2, 4, 17, 1);
    border: solid rgba(95, 92, 92, 0.34);
    border-radius: 10px;
    width: 40%;
    padding: 20px;
    position: relative;
    left: -10%;
    p {
      padding-top: 0;
      position: relative;
      top: 0;
    }

    h3 {
      top: 0;
    }
  }
 .contact {
    background: rgba(2, 4, 17, 1);
    border: solid rgba(95, 92, 92, 0.34);
    border-radius: 10px;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: auto;
    padding: 20px;
  
   div{
    gap: 70px;
    display: flex;
    .email{
       height: 40px;
      width: 40px;
      &:hover{
        cursor: pointer;
        transform: scale(1.1);
      }
    }.whatsapp{
      height: 40px;
      width: 40px;
      &:hover{
        cursor: pointer;
        transform: scale(1.1);
      }
    }.linkedin{
       height: 40px;
      width: 40px;
      &:hover{
        cursor: pointer;
        transform: scale(1.1);
      }
    }
   }
  }
}

.proj:hover > :not(:hover){
  filter: blur(3px);

}
 /* Media Queries */
  @media (max-width: 1024px) {
    .backgroundab{
      position: fixed;
    }
    .aboutctt {
      flex-direction: column;
      top: 100px;
      align-items: center;
      position: relative;
      .blog{
        left: 0;
        width: 80%;
        margin-bottom: 20px;
      }
      .contact{
        width: 80%;
        position: relative;
        bottom: 20px;
      }
    }
  }

  @media (max-width: 768px) {
    .aboutctt {
        position: relative;
        top: -100px;
    }
    
    .contact div {
      flex-direction: row;
      gap: 20px;
      bottom: 110px;
    }
  }

  @media (max-width: 480px) {
    .aboutctt {
      top: 100px;
    }

    .blog, .contact {
      width: 100%;
    }
  }
`
export const Container = styled.div`
background: #11314f;
background: linear-gradient(149deg, rgba(17, 49, 79, 1) 0%, rgba(0, 0, 0, 1) 54%);
width: 100%;
height: 300px;
.d1{
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    .s1{
        display: flex;
        flex-direction: column;
        color: #fff;
        gap: 13px;
        h1{
          font-size: 35px;
        }
        p{
          font-size: 20px;
        }
        div{
            display: flex;
            gap: 10px;
        }
        .pj{
         
  --angle: 0deg;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.pj {
  border-radius: 10px;
  padding: 10px;
  margin: auto;
  display: grid;
  place-content: center;
  text-align: center;
background: #FFD43B;
  font-size: 1.5em;

  --border-size: 3px ;
  border: var(--border-size) solid transparent;
&:hover{

    /* Paint an image in the border */
    border-image: conic-gradient(
        
        from var(--angle),
        #00b3ffff 0deg 90deg,
        rgba(0, 0, 0, 0.8) 90deg 360deg
        
        )
        1 stretch;
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

.pj {
  animation: rotate 3s linear infinite;
}
        }
        .ctt{
             border-radius: 5px;
            border: 2px #fff;
              font-size: 20px;
              background: #0F2027;
              color: #fff;
              padding: 10px;

                &:hover{
                 cursor: pointer;
                    transform: scale(1.06);
                    
            }
          
  --angle: 0deg;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.ctt {
  border-radius: 10px;
  padding: 10px;
  margin: auto;
  display: grid;
  place-content: center;
  text-align: center;
background: #0F2027;
  font-size: 1.5em;

  --border-size: 3px ;
  border: var(--border-size) solid transparent;
&:hover{

    /* Paint an image in the border */
    border-image: conic-gradient(
        
        from var(--angle),
        #e2fa0bff 0deg 90deg,
        rgba(0, 0, 0, 0.8) 90deg 360deg
        
        )
        1 stretch;
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

.ctt {
  animation: rotate 3s linear infinite;
}


        
    }
    .s2{
   position: relative;
   top: 50px;
   
    }

.circle{
 width: 200px;
      height: 200px;
      border-radius: 50%;
      border: solid 3px #FFD500 ;
    box-shadow: inset 0 0 30px 1px rgba(220, 235, 10, 0.5),0 0 40px 10px rgba(220, 235, 10, 0.3)  ;
      display: flex;
   align-items: center;
   justify-content: center;
    img{
      position: relative;
      top: 30px;
      width: 250px;
    }
}
  @media (max-width: 1024px) {
    .d1 {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 550px;
      .s1 {
        text-align: center;
        .pj, .ctt {
          font-size: 1.2em;
          padding: 8px;
        }
      }
      .circle {
        width: auto;
        height: auto;
      }
    }
  }

  @media (max-width: 768px) {
    height: auto;

    .s1 h1 {
      font-size: 30px;
    }

    .s1 p {
      font-size: 18px;
    }
  }

  @media (max-width: 480px) {
    .s1 h1 {
      font-size: 28px;
    }

    .s1 p {
      font-size: 16px;
    }

    .pj, .ctt {
      font-size: 1em;
      padding: 6px;
      width: 100%;
    }

    .circle {
      width: 150px;
      height: 150px;
    }
  }
`
export const About = styled.div`
margin-top: 50px;
display: flex;
flex-direction: row;
justify-content: space-around;
.aboutimg{
  background: #04050fff;
  color: aliceblue;
  display: flex;
  flex-direction: column;
  gap: 10px;
  header{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  
   padding: 10px;
  
}
.proj{
  display: flex;
  gap: 15px;
  height: 425px;
}
h1{
color: aliceblue;
}
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 95%;
    top: 200px;
    .aboutimg {
      left: 0;
      width: 90%;
      text-align: center;
    div{
        align-items: center;
        justify-content: center;
      }
    }

    .proj {
      height: auto;
      gap: 10px;
    }
  }
  @media (max-width: 780px){
    top: -50px;
    left: 20px;
    .aboutimg{
      div{
        align-items: center;
        justify-content: center;
      }
    }
    .proj{
      flex-direction: column;
    }
  }
  @media (max-width: 480px) {
    top: -50px;
    .aboutimg {
      width: 100%;
      padding: 5px;
    }

    .proj {
      flex-direction: column;
      gap: 10px;
      height: auto;
    }
  }
`