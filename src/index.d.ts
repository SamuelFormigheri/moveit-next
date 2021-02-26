import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme{
        title: string;

        colors: {
            background: string;
            blue: string;
            blueDark: string;
            blueTwitter: string;
            border: string;
            borderDark: string;
            grayLine: string;
            green: string;
            overlay: string;
            red: string;
            text: string;
            textHighlight: string;
            title: string;
            white: string;
        }
    }
}

declare module '*.svg' {
    const content: any;
    export default content;
}