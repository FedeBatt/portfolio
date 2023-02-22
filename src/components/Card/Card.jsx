import Button from "../Button/Button";

import {
    CardContainer,
    CardContent,
    CardImage,
    CardWrapper,
    ImageContainer,
    Overlay,
    Text,
    Title,
} from "./Card.styles";

import advanta from '../../assets/advanta_logo.png'
import ieb from '../../assets/ieb_logo.png'
import mperativ from '../../assets/mperativ_logo.png'
import cammionity from '../../assets/alamedas_logo.png'

const Card = ({title, description}) => {

    const renderLogo = () => {
        switch(title) {
            case 'Advanta':
                return advanta;
            case 'Invertir En Bolsa':
                return ieb;
            case 'Mperativ':
                return mperativ;
            case 'Cammionity': 
                return cammionity;
            default: 
                return null
        }
    }

    return (
        <CardWrapper>
            <CardContainer>
                <ImageContainer>
                    <Overlay />
                    <CardImage src={renderLogo()} />
                </ImageContainer>
                <CardContent>
                    <Title>{title}</Title>
                    <Text>
                        {description}
                    </Text>
                    {/* <Button>Mas info</Button> */}
                </CardContent>
            </CardContainer>
        </CardWrapper>
    );
};

export default Card;
