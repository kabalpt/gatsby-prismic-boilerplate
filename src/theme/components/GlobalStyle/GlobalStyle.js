import { colors, fonts } from '../../variables';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset};

    html,
    body {
        position: relative;
        height: 100%;
        width: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }

    body {
        font-family: ${fonts.families.sans}, "Helvetica Neue", Helvetica, Arial, sans-serif;
        box-sizing: border-box;
        color: ${colors.black};
        line-height: 1.5;
        overflow-x: hidden;

        overflow-y: auto;
        -webkit-overflow-scrolling: touch;

        * {
            box-sizing: border-box;
        }

        &.with-modal {
            overflow-y: hidden;
        }

        &.loading {
            overflow-y: hidden;
        }
    }

    a {
        text-decoration: none;
        outline: 0;

        &:hover,
        &:active,
        &:focus {
            outline: 0;
            text-decoration: none;
        }

        &:not(:disabled) {
            cursor: pointer;
        }
    }

    b {
        font-weight: ${fonts.weights.bold};
    }
`;
