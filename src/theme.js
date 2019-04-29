import { createGlobalStyle } from "styled-components"

export const theme = {
    colors: {
        fg: '#000',
        bg: '#fff',
        light: '#666',
        lighter: '#ccc',
        accent: '',
    },
    font: {
        title: "'Abril Fatface', Georgia, serif",
        head: "'Noto Sans', Helvetica, Arial, sans-serif",
        body: "'Noto Sans', Helvetica, Arial, sans-serif",
        reading: "'Noto Serif', Georgia, serif",
    },
}

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Noto+Sans|Noto+Serif');
    * {
        font-family: ${props => props.theme.font.body};
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${props => props.theme.font.head};
    }

    a {
        text-decoration: none;
        color: ${props => props.theme.colors.fg}
    }
`;