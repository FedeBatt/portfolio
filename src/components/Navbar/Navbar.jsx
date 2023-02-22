import React from "react";
import { FaBars } from "react-icons/fa";

import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavItem,
    NavLinks,
    NavLogo,
    NavMenu,
} from "./Navbar.styles";

const Navbar = ({ toggle }) => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">FedeBatt</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars name="" />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">Sobre Mi</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="skills">Habilidades</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="projects">Proyectos</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact">Contacto!</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    );
};

export default Navbar;
