import styled from "styled-components";
import Slider from "react-slick";

import { Text } from "../../components";

export const Container = styled.aside`
    background-color: ${({ theme: { colors } }) => colors.background};
    width: 360px;
    height: 100vh;
    overflow-y: scroll;
`;

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #ffffff;
    padding: 16px;
`;

export const Logo = styled.img`
    margin: 20px;
`;

export const CarouselTitle = styled(Text)`
    font-family: ${(props) => props.theme.fonts.regular };
    color: ${(props) => props.theme.colors.text };
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    margin: 16px 0;
`;


export const Carousel = styled(Slider)`
    .slick-slide {
        margin-right: 16px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;