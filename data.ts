// DATA TYPES
// string
// number
// boolean
// any
// unknown
// never
// void

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