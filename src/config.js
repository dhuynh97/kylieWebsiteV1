module.exports = {
  siteTitle: 'Daniel Huynh',
  siteDescription:
    'Daniel Huynh is a software engineer based in San Jose, CA who ',
  siteKeywords:
    'Daniel Huynh, Daniel, Huynh, dhuynh97, software engineer, front-end engineer, web developer, javascript, UC San Diego, UCSD, San Jose,',
  siteUrl: 'https://danielhuynh.co',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Daniel Huynh',
  location: 'San Jose, CA',
  email: 'danielhuynh97@gmail.com',
  github: 'https://github.com/dhuynh97',
  twitterHandle: '@danierhuynh',
  socialMedia: [
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/danielhuynh97',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/dhuynh97',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/danisdabombdotcom',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/danierhuynh',
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
