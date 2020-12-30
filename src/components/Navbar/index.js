import React, { Fragment, useState, useEffect } from 'react';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavButton,
    NavButtonLink 
} from './NavbarElements';

/* import { IconContext } from 'react-icons'; */
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll} from 'react-scroll';

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const smoothScrollNavbar = {
        smooth: true,
        duration: 500,
        spy: true,
        exact: 'true',
        offset: -80,
    };


    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop()
    };

    return (
        <Fragment>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}>
                            paul
                        </NavLogo>
                        <MobileIcon onClick={toggle}> 
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            {/* <NavItem>
                                <NavLinks 
                                    to="about"
                                    smooth={smoothScrollNavbar.smooth}
                                    duration={smoothScrollNavbar.duration}
                                    spy={smoothScrollNavbar.spy}
                                    exact={smoothScrollNavbar.exact}
                                    offset={smoothScrollNavbar.offset}
                                >About</NavLinks>
                            </NavItem> */}
                            <NavItem>
                                <NavLinks 
                                    to="experiences"
                                    smooth={smoothScrollNavbar.smooth}
                                    duration={smoothScrollNavbar.duration}
                                    spy={smoothScrollNavbar.spy}
                                    exact={smoothScrollNavbar.exact}
                                    offset={smoothScrollNavbar.offset}
                                >Experiences</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to="qualifications"
                                    smooth={smoothScrollNavbar.smooth}
                                    duration={smoothScrollNavbar.duration}
                                    spy={smoothScrollNavbar.spy}
                                    exact={smoothScrollNavbar.exact}
                                    offset={smoothScrollNavbar.offset}
                                >Qualifications</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to="skills"
                                    smooth={smoothScrollNavbar.smooth}
                                    duration={smoothScrollNavbar.duration}
                                    spy={smoothScrollNavbar.spy}
                                    exact={smoothScrollNavbar.exact}
                                    offset={smoothScrollNavbar.offset}
                                >Skills</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to="interests"
                                    smooth={smoothScrollNavbar.smooth}
                                    duration={smoothScrollNavbar.duration}
                                    spy={smoothScrollNavbar.spy}
                                    exact={smoothScrollNavbar.exact}
                                    offset={smoothScrollNavbar.offset}
                                >Interests</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavButton>
                            <NavButtonLink to="/contact">
                                Contact
                            </NavButtonLink>
                        </NavButton>
                    </NavbarContainer>
                </Nav>
        </Fragment>   
    )
}

export default Navbar
