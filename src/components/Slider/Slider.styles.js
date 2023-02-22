import styled from "styled-components";
import Carousel from "react-elastic-carousel";

export const SlideContainer = styled.div`
    max-width: 1280px;
    width: 100%;
    padding: 40px 0;

    .sc-iJnaPW.iNNGhf.rec.rec-arrow.rec.rec-arrow-left,
    .sc-iJnaPW.iNNGhf.rec.rec-arrow.rec.rec-arrow-right {
        background-color: transparent;
        color: #fff;
        box-shadow: none;
    }

    .sc-iJnaPW.iNNGhf.rec.rec-arrow.rec.rec-arrow-left:hover,
    .sc-iJnaPW.iNNGhf.rec.rec-arrow.rec.rec-arrow-right:hover {
        background-color: none;
    }

    .sc-iJnaPW.bJVGEJ.rec.rec-arrow.rec.rec-arrow-left:disabled,
    .sc-iJnaPW.bJVGEJ.rec.rec-arrow.rec.rec-arrow-right:disabled {
        color: #333;
        box-shadow: none;
        background-color: transparent;
    }

    .sc-jIRcFI.ivftkk.rec.rec-dot.rec.rec-dot_active {
        background-color: #fff;
        box-shadow: 0 0 1px 3px rgb(1 191 113);
    }

    .sc-jIRcFI.hYIvVP.rec.rec-dot {
        box-shadow: 0 0 1px 3px rgb(1 191 113);
    }
`;

export const SlideContent = styled(Carousel)``;
