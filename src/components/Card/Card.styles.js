import styled from "styled-components";

export const CardWrapper = styled.div``;

export const CardContainer = styled.div`
    border-radius: 25px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    min-height: 450px;
    width: 320px;
`;

export const ImageContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 14px;
`;

export const CardImage = styled.img`
    position: relative;
    height: 150px;
    width: 150px;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid #fff;
`;

export const Overlay = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #01bf71;
    border-radius: 25px 25px 0 25px;

    &&::before,
    &&::after {
        position: absolute;
        content: "";
        height: 40px;
        width: 40px;
        background-color: #01bf71;
        right: 0;
        bottom: -40px;
    }

    &&::after {
        border-radius: 0 25px 0 0;
        background-color: #fff;
    }
`;

export const CardContent = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 14px 16px;
`;

export const Title = styled.p`
    font-size: 18px;
    font-weight: 600;
    color: #333;
`;

export const Text = styled.p`
    font-size: 14px;
    color: #707070;
    margin-top: 12px;
    text-align: center;
    margin-bottom: 12px;
`;
