import React from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper, LinkImg, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Services = ({id, icon1, icon2, icon3, href1, href2, href3, servicesTitle, servicesH21, servicesH22, servicesH23, servicesP1, servicesP2, servicesP3}) => {
    return (
        <ServicesContainer id={id}>
            <ServicesH1>{servicesTitle}</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <LinkImg href={href1}>
                        <ServicesIcon src={icon1}/>
                    </LinkImg>                    
                    <ServicesH2>{servicesH21}</ServicesH2>
                    <ServicesP>{servicesP1}</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <LinkImg href={href2}>
                        <ServicesIcon src={icon2}/>
                    </LinkImg>
                    <ServicesH2>{servicesH22}</ServicesH2>
                    <ServicesP>{servicesP2}</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <LinkImg href={href3}>
                        <ServicesIcon src={icon3}/>
                    </LinkImg>        
                    <ServicesH2>{servicesH23}</ServicesH2>
                    <ServicesP>{servicesP3}</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
