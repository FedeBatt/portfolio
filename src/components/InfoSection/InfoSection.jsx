import React from "react";
import Button from "../Button/Button";
import {
    BtnWrapper,
    Column1,
    Column2,
    HeaderText,
    Img,
    ImgWrapper,
    InfoContainer,
    InfoRow,
    InfoWrapper,
    Subtitle,
    TextWrapper,
    TopLine,
} from "./InfoSection.styles";

const InfoSection = ({
    id,
    lightBg,
    imgStart,
    topLine,
    lightText,
    headLine,
    lightTextDesc,
    description,
    buttonLabel,
    img,
    alt,
    primary,
    dark,
    darkText
}) => {
    return (
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <HeaderText lightText={lightText}>
                                {headLine}
                            </HeaderText>
                            <Subtitle darkText={lightTextDesc}>
                                {description}
                            </Subtitle>
                            {/* <BtnWrapper>
                                <Button
                                    to="home"
                                    smooth
                                    duration={500}
                                    spy
                                    exact
                                    offset={-80}
                                    $primary={primary ? 1 : 0}
                                    $dark={dark ? 1 : 0}
                                    darkText={darkText ? 1 : 0}
                                >
                                    {buttonLabel}
                                </Button>
                            </BtnWrapper> */}
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrapper>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    );
};

export default InfoSection;
