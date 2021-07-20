import styled from 'styled-components';
import COLORS from '../../design/colors';

export const RootDiv = styled.div`
    height: 100vh;
    background-color: ${COLORS.dark_gray};
`;

export const NoGraphicsText = styled.div`
    margin: 30px;
    font-size: 30px;
    font-weight: bold;
    color: ${COLORS.white};
    text-align: center;
`;