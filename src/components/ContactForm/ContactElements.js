import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

export const ContactContainer = styled.div`
    background: #010606;
    display: flex;
    justify-content: center;
    flex-direction: column;
    //align-items: center;
    padding: 0 20%;
    margin: 0;
    height: 100vh;
    position: relative;
    z-index: 1;
    min-width: 285px;

    @media screen and (max-width: 1000px) {
        padding: 0 10%;
    }

    @media screen and (max-width: 780px) {
        padding: 0;
    }
`

export const Button = styled(Link)`
    display: flex;
    height: 35px;
    width: 40px;
    color: #fff;
    background: "#000";
    justify-self: flex-start;

    &:hover svg{
        transition: all 0.2s ease-in-out;
        transform: scale(1.2);
    }
`

export const ButtonIcon = styled(BsArrowLeft)`
    background: "#000";
    size: 30;
`

export const FormSection = styled.form`
    min-width: 600px;
    background: #010606;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-size: cover;
    align-items: center;
    padding: 0;

    @media screen and (max-width: 620px){
        min-width: 480px;
        height: 600px;
    }

    @media screen and (max-width: 480px){
        min-width: 285px;
        height: 90vh;
    }
`

export const ContactH1 = styled.h1`
    text-align: center;
    color: #ddd;
    margin-bottom: 2vh;
`

export const ContactBar = styled.div`
    align-items: center;
    justify-content: center;
    height: 10px;
    width: 20vh;
    margin-bottom: 20px;
    background: linear-gradient(90deg, #33BBFF, #FF33F0);
`

export const ContactFormInput = styled.input`
    display: block;
    width: 100%;
    box-sizing: border-box;
    margin: 16px 0;
    background: #111;
    padding: 10px 30px;
    outline: none;
    color: #ddd;
    transition: 0.5s;
    border-radius: 10px;
    height: 10vh;
    transition: 0.5s;
    border-color: ${props=> props.isTouched  && !props.isValid ? "#FF33F0":"#00000000"};
`

export const ContactTextArea = styled.textarea`
    display: block;
    width: 100%;
    box-sizing: border-box;
    margin: 16px 0;
    background: #111;
    padding: 20px 40px;
    outline: none;
    color: #ddd;
    transition: 0.5s;
    height: 20vh;
    border-radius: 10px;
    overflow: scroll;
    border-color: ${props=> props.isTouched  && !props.isValid ? "#FF33F0":"#00000000"};
`

export const ContactFormSubmit = styled.input`
    display: flex;
    justify-content: center;
    width: 50%;
    box-sizing: border-box;
    margin: 16px 0;
    border: 0;
    background: linear-gradient(90deg, #33BBFF, #FF33F0);
    padding: 10px 40px;
    outline: none;
    color: #010606;
    transition: 0.5s;
    border-radius: 160px;
    font-weight: bold;

    &:hover{
        transition: all 0.2s ease-in-out;
        transform: scale(1.12);
        color: #010606;
    }
`

export const SocialIcons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`