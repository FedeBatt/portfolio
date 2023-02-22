import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import Button from "../Button/Button";

import {
    ArrowForward,
    ArrowRight,
    Content,
    CtaWrapper,
    Description,
    MainBg,
    MainContainer,
    Title,
    VideoBg,
} from "./MainContent.styles";

const MainContent = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <MainContainer>
            <MainBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </MainBg>
            <Content>
                <Title>Bienvenido a mi Portfolio!</Title>
                <Description>
                    Aquí, verás todo acerca de mi experiencia como profesional.
                </Description>
                <CtaWrapper>
                    <Button
                        to="signup"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        $primary={true}
                        $dark={true}
                    >
                        Contactame! {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </CtaWrapper>
            </Content>
        </MainContainer>
    );
};

export default MainContent;
