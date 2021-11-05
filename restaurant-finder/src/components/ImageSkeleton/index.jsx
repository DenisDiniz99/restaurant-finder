import React from "react";
import styled, { keyframes } from "styled-components";

const keyFramaLoading = keyframes`
    0% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
`;

export const LoadingSkeleton = styled.div`
    background-color: gray;
    border-radius: 6px;
    margin-bottom: 10px;
    min-width: ${(props) => props.width };
    heigth: ${(props) => props.heigth };
    animation: ${keyFramaLoading} 500ms infinite alternate;
`;

export default ({width, heigth }) => <LoadingSkeleton width={width} heigth={heigth}/>;