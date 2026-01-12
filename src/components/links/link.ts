import styled from "styled-components";

export const whatsapp = styled.img`

      
            visibility: hidden;
            width: 120px;
            background-color: black;
            color: #fff;
            text-align: center;
            border-radius: 5px;
            padding: 5px;
            position: absolute;
            z-index: 1;
            bottom: 125%; /* Coloca o tooltip acima do elemento */
            left: 50%;
            margin-left: -60px; /* Centraliza o tooltip */
            opacity: 0;
            transition: opacity 0.3s;
            visibility: visible;
            opacity: 1;
        
`