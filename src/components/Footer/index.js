import React from 'react'

import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { animateScroll as scroll} from 'react-scroll';

import { FooterContainer, 
        FooterWrapper, 
        FooterLinksContainer, 
        FooterLinksWrapper, 
        FooterLinkItems, 
        FooterLinkTitle, 
        FooterLink, 
        SocialMedia, 
        SocialMediaWrap, 
        SocialLogo, 
        WebsiteRights,
        SocialIcons,
        SocialIconLink } from './FooterElements'

const Footer = () => {

    const toggleScroll = () => {
        scroll.scrollToTop();
    }


    return (
        <FooterContainer>
            <FooterWrapper>
                {/* <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>You wan't to contact me?</FooterLinkTitle>
                            <FooterLink to="/contact">Contact Me</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>You wan't to contact me?</FooterLinkTitle>
                            <FooterLink to="/contact">Contact Me</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>You wan't to contact me?</FooterLinkTitle>
                            <FooterLink to="/contact">Contact Me</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>You wan't to contact me?</FooterLinkTitle>
                            <FooterLink to="/contact">Contact Me</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer> */}
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo onClick={toggleScroll}>paul</SocialLogo>
                        <WebsiteRights>paul duval © {new Date().getFullYear()}</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.linkedin.com/in/paul-duval-40928014b/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Github">
                                <FaGithub />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrapper>            
        </FooterContainer>
    )
}

export default Footer
