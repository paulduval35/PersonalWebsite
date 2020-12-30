import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SideButtonWrapper, SidebarWrapper, SidebarRoute, SidebarLink } from './SidebarElements';

const Sidebar = ({toggle, isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="experiences" onClick={toggle}>Experiences</SidebarLink>
                    <SidebarLink to="qualifications" onClick={toggle}>Qualifications</SidebarLink>
                    <SidebarLink to="skills" onClick={toggle}> Skills</SidebarLink>
                    <SidebarLink to="interests" onClick={toggle}> Interests</SidebarLink>
                </SidebarMenu>
                <SideButtonWrapper>
                    <SidebarRoute to="/contact">Contact</SidebarRoute>
                </SideButtonWrapper>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
