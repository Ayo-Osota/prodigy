// DATA TYPES
// string
// number
// boolean
// any
// unknown
// never
// void

import { AdobeXd, Ai, Figma, Photoshop } from "./stackIcons";


// difference b/w type and interface
// Type can use properties from another type
// Interface can use properties form nother interface with extends or class

interface LinkInterface {
    id: string,
    text: string,
    path: string
}

interface ProjectInterface {
    id: string | number,
    name: string,
    description: string,
    link: string,
    imagePath: string
}

interface SocialMediaInterface {
    id: number,
    name: string,
    link: string,
    icon?: string
}

interface TestimonyInterface {
    id: number | string;
    quoteText: string;
    authorName: string;
    companyName: string;
    jobTitle: string;
    photoUrl: string;
}

interface StackInterface {
    id: string,
    name: string,
    icon: () => JSX.Element
}

export const navLinks: LinkInterface[] = [
    {
        id: '1',
        text: 'Home',
        path: '#'
    },
    {
        id: '2',
        text: 'Portfolio',
        path: '#portfolio'
    },
    {
        id: '3',
        text: 'Contact me',
        path: '#contact'
    },
]

export const projects: ProjectInterface[] = [
    {
        id: '1',
        name: 'Prodigy Logistic',
        description: 'This is a mobile app design for prodigy logistic, the App allow users to request and track pickups, and as well make payments.',
        link: 'https://gratis-humidity-0ce.notion.site/Orimadegun-promise-s-UI-UX-Portfolio-27f74fe079e24971af01fdaea1e01bc0?p=eae1062310054dae8399b9c634e1508e&pm=c',
        imagePath: '/assets/prodigy-logistics.png'
    },
    {
        id: '2',
        name: 'Revitalizing Byclick Downloader',
        description: 'A Usability Test and Redesign to Improve User Experience',
        link: 'https://gratis-humidity-0ce.notion.site/Orimadegun-promise-s-UI-UX-Portfolio-27f74fe079e24971af01fdaea1e01bc0?p=c33e4521a7f34ab88b238f08fd230f5f&pm=c',
        imagePath: '/assets/byclick-downloader.png'
    },
]

export const socialMedia: SocialMediaInterface[] = [
    {
        id: 1,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/orimadegun-promise-6a7595240/",
    },
    {
        id: 2,
        name: "Twitter",
        link: "https://twitter.com/Extricator_UX",
    },
    {
        id: 3,
        name: "+2349030691200",
        link: "https://wa.me/9030691200",
    },
]

export const testimonies: TestimonyInterface[] = [
    {
        id: '1',
        authorName: "Milantia Taylor",
        companyName: "CEO",
        jobTitle: "Milantiawebs",
        quoteText: "I had the pleasure of working with Prodigy on Quantum world project, and I couldn't be happier with the results. Promise is a talented and dedicated professional who truly cares about delivering high-quality work.",
        photoUrl: "/assets/mili.png"
    },
    {
        id: '2',
        authorName: "Ayo Osota",
        companyName: "CEO",
        jobTitle: "Ay Oil and gass",
        quoteText: "I had the pleasure of working with Prodigy on Quantum world project, and I couldn't be happier with the results. Promise is a talented and dedicated professional who truly cares about delivering high-quality work. I highly recommend Prodigy to anyone looking for a skilled and reliable Product designer, and I look forward to working with them again in the future.",
        photoUrl: "/assets/mili.png"
    },
]

export const stacks: StackInterface[] = [
    {
        id: '1',
        name: 'figma',
        icon: Figma
    },
    {
        id: '2',
        name: 'Photoshop',
        icon: Photoshop
    },
    {
        id: '3',
        name: 'AdobeXd',
        icon: AdobeXd
    },
    {
        id: '4',
        name: 'Ai',
        icon: Ai
    }
]