import linkedinIcon from "../StaticMedia/Images/Icons/linkedin-icon.png";
import githubIcon from "../StaticMedia/Images/Icons/github-icon.png";
import youtubeIcon from "../StaticMedia/Images/Icons/youtube-play.png";
import twitterIcon from "../StaticMedia/Images/Icons/twitter-icon.png";
import twitterIconDark from "../StaticMedia/Images/Icons/twitter-black.png";
import githubIconDark from "../StaticMedia/Images/Icons/github-black.png";
import linkedinIconDark from "../StaticMedia/Images/Icons/linkedin-black.png";
import youtubeIconDark from "../StaticMedia/Images/Icons/youtube-black.png";
import recruitmeImage from "../StaticMedia/Images/recruitme-project.gif"
import profileImage from "../StaticMedia/Images/profileImage.jpg"
export const name = "Shubham Muniyal";
export const description = "I'm a Software Engineer from India. I love to solve problems in an efficient way.";
export const imageLogo = profileImage;
export const phoneNumber = "+917083893561";
export const emailAddress = "shubhammuniyal@gmail.com";
export const altEmailAddress = "shubham.muniyal@somaiya.edu";


export const courseDetails = [
    {
        key: 1,
        duration: "2016 - 2020",
        name: "B.Tech in Information Technology",
        grade: "CGPA - 8.6/10",
        university: "K.J.Somaiya College of Engineering (KJSCE), Vidyavihar, Mumbai. KJSCE is an autonomous organisation and is currently ranked among top tier undergraduate Institutes in India."
    },
    {
        key: 2,
        duration: "2014 - 2016",
        name: "Maharashtra HSC",
        grade: "Percentage - 81.08%",
        university: "Smt. Chandibai Himathmal Mansukhani College, Ulhasnagar"
    },
    {
        key: 3,
        duration: "2004 - 2014",
        name: "Maharashtra SSC",
        grade: "Percentage - 91.00%",
        university: "S.E.S English Medium High School, Ulhasnagar"
    },
];

export const profileLinks = [
    {
        "key": "linkedin",
        "altProfileIcon": "Linkedin Icon",
        "icon": linkedinIcon,
        "darkIcon": linkedinIconDark,
        "link": "https://www.linkedin.com/in/shubham-muniyal-573285162/"
    },
    {
        "key": "github",
        "altProfileIcon": "Github Icon",
        "icon": githubIcon,
        "darkIcon": githubIconDark,
        "link": "https://github.com/cw-shubhamMuniyal/"
    },
    {
        "key": "twitter",
        "altProfileIcon": "Twitter Icon",
        "icon": twitterIcon,
        "darkIcon": twitterIconDark,
        "link": "https://twitter.com/MuniyalShubham"
    },
    {
        "key": "youtube",
        "altProfileIcon": "Youtube play Icon",
        "icon": youtubeIcon,
        "darkIcon": youtubeIconDark,
        "link": "https://youtube.com/@shubhammuniyal527"
    }
];

export const workExperiences = [
    {
        "key": "Carwale SDE",
        "organization": "carwale.com",
        "position": "Software Developer",
        "duration": "Nov 2020 - Present · 3 years",
        "description": "I handle complete used cars and bike tech, designed architecture of buying and selling used vehicle. Also Lead multiple teams to achieve following: Created microservice to store and retrieve used vehicle data, added complete used bike flow, optimising SEO and user experience, adding new features for sell premium product to help sellers sell their car easily"
    },
    {
        "key": "Carwale Intern",
        "organization": "carwale.com",
        "position": "Intern",
        "duration": "Dec 2019 - Jan 2020 · 1 months",
        "description": `Developed a utility where user can upload images on which some
        validations are performed such as expected aspect ratio, expected size range and required image type. If they
        validate successfully, then image will be uploaded on specified AWS directory.
        It was developed to simplify operations team task where they were manually doing above checks`
    },
    {
        "key": "KJSCE Intern",
        "organization": "K.J. Somaiya College of Engineering",
        "position": "Intern",
        "duration": "Feb 2019 - Jun 2019 . 5 months",
        "description": "The project is done with the help of which the students can give the feedback on twitter account about college event by simply pressing a button on the Raspberry pi. After doing this, the user's image with his feedback will be posted on twitter. Also, the user can search about any twitter handle and can get the graphical analysis of metadata(ex- sentiments of the tweet, number of replies, number of followers of that account, etc) of the recent tweets of that twitter handle and searched hashtag."
    },
]

export const Projects = [
    {
        "key": "1",
        "name": "RECRUIT.ME",
        "image": recruitmeImage,
        "altImage": "Recruit Me Project Image",
        "description": `The project automate the process of finding the student activeness on competitive platforms(codechef.com, hackerrank.com) and development platform(GitHub.com) which ease the work of candidate selection in the placement procedure.
         It takes user account name on those platforms and scrape the information (rating,number of stars,contributions,etc) which is used by the Interviewer to check the student's performance.
         The interviewer can also compare students applied for interview and invite the desired candidate for further placement process.`,
        "githubLink": "https://github.com/cw-shubhamMuniyal/Recruiter-app",
        "demoLink": "https://www.youtube.com/watch?v=8xoCqm1-tL4"
    },
]

export const viewProjectText = "View Project";
export const githubLinkText = "GITHUB LINK"; 