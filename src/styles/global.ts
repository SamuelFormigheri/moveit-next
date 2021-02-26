import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: var(--background);
        color: var(--text);
    }

    body, input, textarea, button{
        font: 400 1rem "Inter", sans-serif;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    @media(max-width: 1080px){
        html{
            font-size: 93.75%;
        }
    }

    @media(max-width: 720px){
        html{
            font-size: 87.5%;
        }
    }

    :root{
        --background: ${props => props.theme.colors.background};
        --blue: ${props => props.theme.colors.blue};
        --blue-dark: ${props => props.theme.colors.blueDark};
        --blue-twitter: ${props => props.theme.colors.blueTwitter};
        --border: ${props => props.theme.colors.border};
        --border-dark: ${props => props.theme.colors.borderDark};
        --gray-line: ${props => props.theme.colors.grayLine};
        --green: ${props => props.theme.colors.green};
        --red: ${props => props.theme.colors.red};
        --overlay: ${props => props.theme.colors.overlay};
        --text: ${props => props.theme.colors.text};
        --text-highlight: ${props => props.theme.colors.textHighlight};
        --title: ${props => props.theme.colors.title};
        --white: ${props => props.theme.colors.white};
    }
`;