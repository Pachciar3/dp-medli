/* eslint-disable max-len */
const appUrl = process.env.REACT_APP_URL;

export const links = [
  {
    id: "menu-1",
    text: "Home",
    active: true
  },
  {
    id: "menu-2",
    text: "About",
    active: false
  },
  {
    id: "menu-3",
    text: "Courses",
    active: false,
  },
  {
    id: "menu-4",
    text: "News",
    active: false
  },
  {
    id: "menu-5",
    text: "Contact",
    active: false
  }
];

export const image = {
  src: `${appUrl}/images/header-image.png`,
  alt: "The woman reading book"
};

export const textContent = {
  head: {
    before: "Check y",
    middle: "o",
    after: "ur well-being"
  },
  desc: "We’re sure that deciding to check on your health is a big step, even if it doesn’t bother in any way. ",
  linkText: "Get started",
  linkUrl: "/"
};

export const ourNumbers = [
  {
    id: "numbers-1",
    number: "230+",
    text: "Scientifically based tests"
  },
  {
    id: "numbers-2",
    number: "10,000+",
    text: "Medical recommendations"
  },
  {
    id: "numbers-3",
    number: "25M+",
    text: "Students learning"
  }
];

export const sectionWithVideo = {
  header: "What our community is saying?",
  description: "A mission-driven company that invest in and builds healthier living",
  src: `${appUrl}/images/video-image.png`,
};

export const servicesSectionTextContent = {
  header: "What you’re getting?",
  description: "We bring you personalized development programs that are backed by research and crafted from the years of experience"
};

export const services = [
  {
    id: "services-1",
    image: `${appUrl}/images/service-1.png`,
    title: "1 FREE chat session",
    desc: "Start with a free text based chat session online"
  },
  {
    id: "services-2",
    image: `${appUrl}/images/service-2.png`,
    title: "Personal Coach",
    desc: "A dedicated coach to help you through your journey"
  },
  {
    id: "services-3",
    image: `${appUrl}/images/service-3.png`,
    title: "Text chat session",
    desc: "An excellent way of preaparing a projects wireframe"
  }
];

export const footerLinks = [
  {
    id: "footer-1", title: "Product", links: [
      {
        id: "Footerlinks-1",
        name: "Updates",
        href: "ss"
      },
      {
        id: "Footerlinks-2",
        name: "Security",
        href: "ss"
      },
      {
        id: "Footerlinks-3",
        name: "Chrome Extension",
        href: "ss"
      },
    ]
  },
  {
    id: "footer-2", title: "Company", links: [
      {
        id: "Footerlinks-1",
        name: "About",
        href: "ss"
      },
      {
        id: "Footerlinks-2",
        name: "Blog",
        href: "ss"
      },
      {
        id: "Footerlinks-3",
        name: "Join us",
        href: "ss"
      },
    ]
  },
  {
    id: "footer-3", title: "Help", links: [
      {
        id: "Footerlinks-1",
        name: "Talk to Support",
        href: "ss"
      },
      {
        id: "Footerlinks-2",
        name: "Support Docs",
        href: "ss"
      },
      {
        id: "Footerlinks-3",
        name: "API Docs",
        href: "ss"
      },
      {
        id: "Footerlinks-4",
        name: "System Status",
        href: "ss"
      },
    ]
  }
];

export const footerNewsletter = {
  placeholder: "Enter your email",
  label: "Try Medli for free",
  buttonText: "Get started"
};