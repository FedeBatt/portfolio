import React, { useState } from "react";
import {
    FooterContainer,
    FooterLink,
    FooterLinkItems,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterWrap,
    IconEmail,
    IconGithub,
    IconLinkedin,
} from "./Footer.styles.js";

const Footer = () => {
    const [linkedinHovered, setLinkedinHovered] = useState(false);
    const [githubHovered, setGithubHovered] = useState(false);
    const [emailHovered, setEmailHovered] = useState(false);

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle onMouse>
                                Contact me
                            </FooterLinkTitle>
                            <FooterLink
                                onMouseOver={() => setLinkedinHovered(true)}
                                onMouseOut={() => setLinkedinHovered(false)}
                                to="https://www.linkedin.com/in/fede-batt/"
                            >
                                <IconLinkedin $isHovered={linkedinHovered} />{" "}
                                Linkedin
                            </FooterLink>
                            <FooterLink
                                to="https://github.com/FedeBatt"
                                onMouseOver={() => setGithubHovered(true)}
                                onMouseOut={() => setGithubHovered(false)}
                            >
                                <IconGithub $isGitHovered={githubHovered} />{" "}
                                Github
                            </FooterLink>
                            <FooterLink
                                to="/"
                                onMouseOver={() => setEmailHovered(true)}
                                onMouseOut={() => setEmailHovered(false)}
                            >
                                <IconEmail $isEmailHovered={emailHovered} />
                                Gmail
                            </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>FedeBatt</FooterLinkTitle>
                            <FooterLinkTitle>© All rights reserved.</FooterLinkTitle>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
