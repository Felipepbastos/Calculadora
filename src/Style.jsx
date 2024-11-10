import styled, {createGlobalStyle} from "styled-components"
import backgroundImg from './background.jpg';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`
export const Main = styled.main`
    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const H1 =styled.h1`
color: #C0C0C0;
 text-shadow: 
    -1px -1px 0 #3179a4,
    1px -1px 0 #3179a4,
    -1px 1px 0 ,
    1px 1px 0 ;
;
`
export const Input = styled.input`
width: 30VW;
border: none;
padding:10px;
margin: 8px;
border-radius: 5px;
&::placeholder{
    color: #0d0d13;
    text-align: center;
}
`

export const Btn = styled.button`
border: none;
padding: 10px 15px;
color: #6f5269;
margin: 5px;
background-color: white;
border-radius: 5px;
&:hover{
    background-color:#e8e8e8 ;
    color: #6f5269;
    border: #6f5269 solid 1px;
}
`

export const Resultado = styled.h2`

border-radius: 50%;
padding: 10px;
color: #C0C0C0;
margin: 10px;
text-shadow: 
    -1px -1px 0 #3179a4,
    1px -1px 0 #3179a4,
    -1px 1px 0 ,
    1px 1px 0 ;
`