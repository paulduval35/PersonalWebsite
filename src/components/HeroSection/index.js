import React, { useState } from 'react';
import { HeroContainer, HeroBg, HeroImage, HeroContent, HeroH1, HeroP, HeroButtonWrapper, ArrowForward, ArrowRight } from './HeroSectionElements';
import image from '../../images/dark_moon.jpg';
import { Button } from '../ButtonElements';
import CV from '../../documents/CV-Paul-Duval-2021.pdf';

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => { 
        return(
            setHover(!hover)
        )
    };


    return (


        <HeroContainer id="home">
            <HeroBg>
                <HeroImage src={image} type='jpg'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>I'm Paul</HeroH1>
                <HeroP>Young engineer passionate about new technologies and their applications in our lives. </HeroP>
                <HeroButtonWrapper>
                    <Button 
                        href={CV} download 
                        onMouseEnter={onHover}                        
                        onMouseLeave={onHover}
                        primary="false"
                        big="false"
                        dark="false"
                        fontbig="false"
                    >Get my French CV {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </HeroButtonWrapper>
            </HeroContent>
        </HeroContainer>

        /* <HeroContainer id="home">
            <HeroBg>
                <VideoBg src={video} type='video/mp4'autoPlay lopp muted/>
            </HeroBg>
            <HeroContent>
                <HeroH1>I'm Paul</HeroH1>
                <HeroP>Contact me !</HeroP>
                <HeroButtonWrapper>
                    <Button 
                        to="/contact" 
                        onMouseEnter={onHover}                        
                        onMouseLeave={onHover}
                        primary="false"
                        big="true"
                        dark="true"
                        fontbig="true"
                    >Contact me {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </HeroButtonWrapper>
            </HeroContent>
        </HeroContainer> */

            
    )
}

export default HeroSection
