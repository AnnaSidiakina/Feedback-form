import { createGlobalStyle } from 'styled-components';

import ApercuArabicPro2 from './ApercuArabicPro-Regular.woff2';
import ApercuArabicPro from './ApercuArabicPro-Regular.woff';

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'ApercuArabicPro';
        src: local('ApercuArabicPro'), local('ApercuArabicPro'),
        url(${ApercuArabicPro2}) format('woff2'),
        url(${ApercuArabicPro}) format('woff'),
        font-weight: 400;
        font-style: normal;
    }
`;
export default FontStyles;

// export default createGlobalStyle`
//     @font-face {
//         font-family: 'ApercuArabicPro';
//         src: local('ApercuArabicPro'), local('ApercuArabicPro'),
//         url(${ApercuArabicPro2}) format('woff2'),
//         url(${ApercuArabicPro}) format('woff'),
//         font-weight: 400;
//         font-style: normal;
//     }
// `;
