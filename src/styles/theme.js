import { hex2rgba } from '@utils';

//underline text as well as button colors
const ACCENT = '#000000';
const DARK_BG = '#000000';
const BG = '#ffffff';


const theme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    transparent: '',
    header: '#',
    heading: '#',
    background: '#ffffff',

    navBar: '#',
    navLink: '#',
    heroTopText: '#',
    heroBottomText: '#',
    aboutPictureOutline: '#81d8d0',

    headingLine: '#',
    featuredProjectHighlight: '#020c1b',
    
    tiffanyBlue: '#81d8d0',
    tiffanyMidBlue: '#5cdfe5',
    tiffanyDarkBlue: '#0097a3',
    tiffanyWhite: '#f3f4f7',
    tiffanyGrey: '#a19e9e',

    //og Colors
    darkNavy: '#020c1b',
    navy: '#0a192f',
    lightNavy: '#81d8d0',
    lightestNavy: '#303C55',
    slate: '#8892b0',
    lightSlate: '#a8b2d1',
    lightestSlate: '#81d8d0',
    green: '#0097a3',
    transGreen: hex2rgba('#81d8d0', 0.07),
    shadowNavy: hex2rgba('#020c1b', 0.7),
  },

  fonts: {
    Calibre:
      'Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
    SFMono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
  },

  fontSizes: {
    xs: '12px',
    smish: '13px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '22px',
    h3: '32px',
  },

  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

  borderRadius: '3px',
  navHeight: '100px',
  navScrollHeight: '70px',
  margin: '20px',

  tabHeight: 42,
  tabWidth: 120,
  radius: 3,

  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,

  navDelay: 1000,
  loaderDelay: 2000,
};

export default theme;
