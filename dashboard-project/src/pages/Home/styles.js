import styled from 'styled-components';
import COLORS from '../../design/colors';

export const RootDiv = styled.div`
    height: 100vh;
    overflow: auto;
    max-height: 100vh;
    background-color: ${COLORS.dark_gray};
`;

export const NoGraphicsText = styled.div`
    font-size: 20px;
    color: ${COLORS.white};
    text-align: center;
`;

export const WelcomeText = styled.p`
    color: ${COLORS.soft_yellow};
    font-size: 50px;
    font-weight: bold;
    text-align: center;
`;

export const InformationText = styled.p`
    color: ${COLORS.white};
    font-size: 20px;
    text-align: center;
`;