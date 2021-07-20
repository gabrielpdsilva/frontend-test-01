import styled from 'styled-components';
import COLORS from '../../design/colors';

export const RootDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    background-color: ${COLORS.dark_gray};
`;

export const Title = styled.h1`
    color: ${COLORS.white};
    font-size: 90px;
    margin-right: 30px;
`;

export const Text = styled.p`
    color: ${COLORS.white};
`;