import styled from "styled-components";

export const Boxlist = styled.div`
margin-top: 10%;
border-radius: 10px;
color: aliceblue;
height: 340px;
width: 230px;
display: flex;
align-items: center;
justify-content: center;
background-color: #0f1527ff;

.all{
    display: flex;
    flex-direction: column;
}
.img{
    width: 200px;
    img{
        border-radius: 5px;
        width: 200px;
        height: 120px;
        margin: 5px;
    }
}
    .foot{
        width: 200px;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .btt{
            display: flex;
            gap: 20px;
        }
        a{
            background: #172553ff;
            width: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffffff;
           text-decoration: none;
           font-size: 20px;
           border-radius: 7px;
           &::after{
    content: '';
    height: 3px;
    width: 0%;
    border-bottom: #189b20 solid;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
}
&:hover::after{
    width: 100%;
    cursor: pointer;
    
        }
        &:hover{
            transform: scale(1.1);
            transition: 90ms;
            cursor: pointer;
        }
    
        }
        p{
            padding-left: 10px;
        }
        gap: 10px;
        button{
            padding: 10px;
            font-size: 18px;
            border: none;
            border-radius: 7px;
            background: #172553ff;
            color: #fff;
            position: relative;
            display: flex;
            justify-content: center;
&::after{
    content: '';
    height: 3px;
    width: 0%;
    border-bottom: #189b20 solid;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
}
&:hover::after{
    width: 100%;
    cursor: pointer;
    
        }
        &:hover{
             cursor: pointer;
            transform: scale(1.1);
            transition: 90ms;
        }
    }
}
`