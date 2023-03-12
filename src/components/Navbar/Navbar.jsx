import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
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
    const [scrollNav, setScrollNav] = useState();
    const { innerWidth: width, innerHeight: height } = window;

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNav);
    }, [width]);
    // offset={width < 1448 ? 30 : -80}

    return (
        <Nav $scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>
                    FedeBatt
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks
                            to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >
                            Sobre Mi
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks
                            to="skills"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >
                            Habilidades
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks
                            to="projects"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >
                            Proyectos
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={width < 1448 ? 30 : -80}
                            activeClass="active"
                            to="contact"
                        >
                            Contacto!
                        </NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    );
};

export default Navbar;
