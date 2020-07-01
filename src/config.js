module.exports = {
  siteTitle: 'Kylie Ikeda',
  siteDescription:
    'Kylie Ikeda is a Product Marketer based in San Diego, CA who ',
  siteKeywords:
    'Kylie Ikeda, Kylie, Ikeda, kyliejci, marketing, product marketing, San Diego State University, SDSU , UCSD, San Diego, Honolulu, Hawaii,',
  siteUrl: 'https://kylieikeda.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Kylie Ikeda',
  location: 'San Diego, CA',
  email: 'ky2260@gmail.com',
  github: 'https://github.com/dhuynh97',
  twitterHandle: '@kyliejci',
  socialMedia: [
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/kylie-ikeda-499b75135/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/kyliejci',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/kyliejci',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#000000',
    darkNavy: '#000000',
    white: '#ffffff',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
