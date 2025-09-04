import styled from "styled-components";

export const Imgs = styled.img`
width: 80px;
` 
export const Container = styled.div`
height: 20%;
width: 100%;
display: flex;
flex-direction: column;
gap: 50px;
padding-left: 20px;
.char{
    display: flex;
    flex-direction: row;
    gap: 20px;
    img{
        width: 50px;
    }
    p{
        color: #fff;
    }
    width: 95%;

}

.learning{
background: #141414ff;
color: #fff;
border-radius: 20px;
width: 300px;
padding: 15px;
.beginner{
    display: flex;
    justify-content: center;
    position: relative;
    border-bottom: 2px solid  rgba(212, 192, 9, 1);
    top: -10px;
}
h2{
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
}
li{
    list-style: none;
    display: flex;
    padding-bottom: 20px;
    align-items: center;
    img{
        padding-right: 10px;
        width: 30px;
        height: 30px;
        
    }
    
}

}
`