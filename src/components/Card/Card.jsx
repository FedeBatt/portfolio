import Button from "../Button/Button";

import {
    CardContainer,
    CardContent,
    CardImage,
    ImageContainer,
    Overlay,
    PlusIcon,
    StyledLink,
    Text,
    TextWrapper,
    Title,
} from "./Card.styles";

import advanta from "../../assets/advanta_logo.png";
import ieb from "../../assets/ieb_logo.png";
import mperativ from "../../assets/mperativ_logo.png";
import cammionity from "../../assets/alamedas_logo.png";
import { Link } from "react-router-dom";

const Card = ({ title, description, pageUrl }) => {
    const renderLogo = () => {
        switch (title) {
            case "Advanta":
                return advanta;
            case "Invertir En Bolsa":
                return ieb;
            case "Mperativ":
                return mperativ;
            case "Cammionity":
                return cammionity;
            default:
                return null;
        }
    };

    return (
        <CardContainer>
            <ImageContainer>
                <Overlay />
                <CardImage src={renderLogo()} />
            </ImageContainer>
            <CardContent>
                <TextWrapper>
                    <Title>{title}</Title>
                    <Text>{description}</Text>
                </TextWrapper>
                <StyledLink target="_blank" to={pageUrl}>
                    +
                </StyledLink>
            </CardContent>
        </CardContainer>
    );
};

export default Card;
