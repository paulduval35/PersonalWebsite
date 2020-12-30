import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import { IoMdArrowRoundBack } from 'react-icons/io';

import { ContactContainer, Button, FormSection, ContactH1, ContactBar,  ContactFormInput, ContactTextArea, ContactFormSubmit, SocialIcons, SocialIconLink } from './ContactElements';

import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const ContactForm = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_qo29eyr', e.target, 'user_PxSUXx7VbmVSmSDnwUyQS')
          .then((result) => {
              /* console.log(result.text); */
          }, (error) => {
              /* console.log(error.text); */
          });
          e.target.reset();
    }

    const [formValidity, setFormValidity] = useState({
        name: false,
        email:false,
        subject:false,
        message:false,
    });

    const [touchedForm, setTouchedForm] = useState({
        name: false,
        email:false,
        subject:false,
        message:false,
    })

    const handlerChange = event => {
        const newFormTouched = {...touchedForm, [event.target.id]:true}
        setTouchedForm(newFormTouched);
        let formData = { ...formValidity }
        formData={
            ...formValidity,
            [event.target.id]:event.target.value !== "",
        }
        
        if(event.target.id==="email"){
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            formData={
                ...formData,
                email: re.test(String(event.target.value).toLowerCase())
            }
        }
        setFormValidity(formData);
        /* console.log('Touched', touchedForm);
        console.log('Validity',formValidity); */
    }
    
    const checkValidity = (e) => {
        e.preventDefault();
        let newArray = {...touchedForm};
        for(let key in touchedForm){
            newArray={
                ...newArray,
                [key]:true
            }
        }
        setTouchedForm(newArray);

        let isValid = true;
        for(let key in formValidity) {
            isValid= formValidity[key] && isValid
            console.log(isValid);
        }
        if(isValid) sendEmail(e);
        
    }

    return (


        <ContactContainer>
            <Button to="/">
                <IoMdArrowRoundBack size={30} />
            </Button>
            <FormSection id="form" onSubmit={e => checkValidity(e)}>
                <ContactH1>Say hello</ContactH1>
                <ContactBar></ContactBar>
                <ContactFormInput id= "name" type="text" placeholder="Your name" name="name" onChange={(event) => handlerChange(event)} isValid={formValidity.name} isTouched={touchedForm.name}></ContactFormInput>
                <ContactFormInput id="email" type="text" placeholder="Your email" name="email" onChange={(event) => handlerChange(event)} isValid={formValidity.email} isTouched={touchedForm.email}></ContactFormInput>
                <ContactFormInput id="subject" type="text" placeholder="Subject" name="subject" onChange={(event) => handlerChange(event)} isValid={formValidity.subject}isTouched={touchedForm.subject}></ContactFormInput>
                <ContactTextArea id="message" type="text" placeholder="Your message" name="message" onChange={(event) => handlerChange(event)} isValid={formValidity.message}isTouched={touchedForm.message}></ContactTextArea>
                <ContactFormSubmit type="submit" value="Send"></ContactFormSubmit>
                <SocialIcons>
                    <SocialIconLink href="//www.linkedin.com/in/paul-duval-40928014b/" target="_blank" aria-label="Linkedin">
                        <FaLinkedin />
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href="https://github.com/" target="_blank" aria-label="Github">
                        <FaGithub />
                    </SocialIconLink>
                </SocialIcons>
            </FormSection>
        </ContactContainer>
    )
}

export default ContactForm
