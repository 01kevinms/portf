import styled from "styled-components";

export const Container = styled.div`
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.contact-form input{
    background: #000;
    height: 50px;
    border-radius: 8px;
    border: none;
     color: #fff;
     font-size: 1.2rem;
}
.contact-form textarea {
  background: #000000ff;
  padding: 0.8rem;
  border-radius: 8px;
  font-size: 1.2rem;
  border: none;
  color: #fff;
}

.contact-form button {
  background: #3e36dbff; /* azul forte */
  color: #fff;
  border: none;
  padding: 0.8rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
  
}

.contact-form button:hover {
cursor: pointer;
transform: scale(1.06);
transition: transform 1s;
}

`