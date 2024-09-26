import { redirect } from "react-router-dom";
import * as Yup from "yup";

import featureImgBulb from "./assets/images/featureImgBulb.png";
import featureImgGraph from "./assets/images/featureImgGraph.png";
import featureImgmMedia from "./assets/images/featureImgMedia.png";

import tpc from "./assets/images/clubs/tpc.png";
import bpc from "./assets/images/clubs/bpc.png";
import sae from "./assets/images/clubs/sae.jpg";
import osmium from "./assets/images/clubs/osmium.jpeg";
import magboard from "./assets/images/clubs/magboard.jpg";
import debsoc from "./assets/images/clubs/debsoc.png";
import autonomy from "./assets/images/clubs/autonomy.jpg";
import bhangra from "./assets/images/clubs/bhangra.jpg";
import edc from "./assets/images/clubs/edc.jpeg";
import dic from "./assets/images/clubs/dic.png";
import gdsc from "./assets/images/clubs/gdsc.png";
import euphoria from "./assets/images/clubs/euphoria.png";
import ieee from "./assets/images/clubs/ieee.jpeg";
import imagen from "./assets/images/clubs/imagen.png";
import mitra from "./assets/images/clubs/mitra.jpeg";
import rotaract from "./assets/images/clubs/rotaract.png";
import star from "./assets/images/clubs/star.png";
import jugadd from "./assets/images/clubs/jugadd.jpeg";
import sportsCommittee from "./assets/images/clubs/sportsCommittee.jpg";
import psych from "./assets/images/clubs/psych.jpg";

export const features = [
  {
    titleImg: featureImgBulb,
    title: "PU HOLIDAYS 2024",
    description:
      "Stay informed about all the official holidays for the upcoming academic year. Plan your study schedule and activities with this comprehensive list of holidays recognized by the university.",
    redirect:
      "https://puchd.ac.in/includes/documents/2024/pu-holidays-2024.pdf?20243017083612",
  },
  {
    titleImg: featureImgGraph,
    title: "SYLLABUS 2024-2028",
    description:
      "Access the complete syllabus for your courses this year. Understand what topics will be covered and what you need to prepare to excel in your studies.",
    redirect: "/syllabus",
  },
  {
    titleImg: featureImgmMedia,
    title: "PU CALENDAR",
    description:
      "Keep track of all important dates, including exams, submission deadlines, and university events. This calendar is your guide to managing your time effectively throughout the year.",
    redirect: "/puCalendar",
  },
  {
    titleImg: featureImgBulb,
    title: "PREVIOUS YEAR QUESTIONS",
    description:
      "Get a competitive edge by practicing with past exam papers. Familiarize yourself with the types of questions asked and enhance your exam preparation.",
    redirect: "/previousYearQuestions",
  },
  {
    titleImg: featureImgGraph,
    title: "TODO LIST",
    description:
      "Organize your tasks and assignments with ease. Use this tool to keep track of what needs to be done, prioritize your work, and ensure you stay on top of your academic responsibilities",
    redirect: "/todoList",
  },
  {
    titleImg: featureImgmMedia,
    title: "CLUBS",
    description:
      "Explore the variety of student clubs and societies available at your university. Join a club to enhance your college experience, meet new people, and develop new skills outside the classroom.",
    redirect: "/clubs",
  },
];

export const signupSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "Name must be atleast of 2 characters")
    .max(25, "Name cannot exceed 25 characters")
    .required("please enter your name"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  password: Yup.string().min(8).required("Please enter your password"),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  otp: Yup.number("Please Enter a number").required(""),
});

export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  password: Yup.string().min(8).required("Please enter your password"),
});

export const pdfFilesSem1 = [
  {
    branch: "CSE",
    fileName: "Calculus",
    filePath: "/pdfs/pyqs/CSE/sem1/Calculus.pdf",
  },
  {
    branch: "CSE",
    fileName: "Professional Communication",
    filePath: "/pdfs/pyqs/CSE/sem1/Professional-Communication.pdf",
  },
  {
    branch: "CSE",
    fileName: "Quantum Physics",
    filePath: "/pdfs/pyqs/CSE/sem1/Quantum-Physics.pdf",
  },
  {
    branch: "IT",
    fileName: "Calculus",
    filePath: "/pdfs/pyqs/IT/sem1/Calculus.pdf",
  },
  {
    branch: "IT",
    fileName: "Professional Communication",
    filePath: "/pdfs/pyqs/IT/sem1/Professional-Communication.pdf",
  },
  {
    branch: "IT",
    fileName: "Quantum Physics",
    filePath: "/pdfs/pyqs/IT/sem1/Quantum-Physics.pdf",
  },
  {
    branch: "ECE",
    fileName: "Calculus",
    filePath: "/pdfs/pyqs/ECE/sem1/Calculus.pdf",
  },
  {
    branch: "ECE",
    fileName: "Professional Communication",
    filePath: "/pdfs/pyqs/ECE/sem1/Professional-Communication.pdf",
  },
  {
    branch: "ECE",
    fileName: "Quantum Physics",
    filePath: "/pdfs/pyqs/ECE/sem1/Quantum-Physics.pdf",
  },
  {
    branch: "EEE",
    fileName: "Calculus",
    filePath: "/pdfs/pyqs/EEE/sem1/Calculus.pdf",
  },
  {
    branch: "EEE",
    fileName: "Professional Communication",
    filePath: "/pdfs/pyqs/EEE/sem1/Professional-Communication.pdf",
  },
  {
    branch: "EEE",
    fileName: "Quantum Physics",
    filePath: "/pdfs/pyqs/EEE/sem1/Quantum-Physics.pdf",
  },
  {
    branch: "MECHANICAL",
    fileName: "Calculus",
    filePath: "/pdfs/pyqs/MECHANICAL/sem1/Calculus.pdf",
  },
  {
    branch: "MECHANICAL",
    fileName: "Professional Communication",
    filePath: "/pdfs/pyqs/MECHANICAL/sem1/Professional-Communication.pdf",
  },
  {
    branch: "MECHANICAL",
    fileName: "Quantum Physics",
    filePath: "/pdfs/pyqs/MECHANICAL/sem1/Quantum-Physics.pdf",
  },
  {
    branch: "BIOTECH",
    fileName: "Calculus",
    filePath: "/pdfs/pyqs/BIOTECH/sem1/Calculus.pdf",
  },
  {
    branch: "BIOTECH",
    fileName: "Professional Communication",
    filePath: "/pdfs/pyqs/BIOTECH/sem1/Professional-Communication.pdf",
  },
  {
    branch: "BIOTECH",
    fileName: "Quantum Physics",
    filePath: "/pdfs/pyqs/BIOTECH/sem1/Quantum-Physics.pdf",
  },
];

export const pdfFilesSem2 = [
  {
    branch: "CSE",
    fileName: "Subject1",
    filePath: "/pdfs/pyqs/CSE/sem2/Subject1.pdf",
  },
  {
    branch: "CSE",
    fileName: "Subject2",
    filePath: "/pdfs/pyqs/CSE/sem2/Subject2.pdf",
  },
  {
    branch: "CSE",
    fileName: "Subject3",
    filePath: "/pdfs/pyqs/CSE/sem2/Subject3.pdf",
  },
  {
    branch: "IT",
    fileName: "Subject1",
    filePath: "/pdfs/pyqs/IT/sem2/Subject1.pdf",
  },
  {
    branch: "IT",
    fileName: "Subject2",
    filePath: "/pdfs/pyqs/IT/sem2/Subject2.pdf",
  },
  {
    branch: "IT",
    fileName: "Subject3",
    filePath: "/pdfs/pyqs/IT/sem2/Subject3.pdf",
  },
  {
    branch: "ECE",
    fileName: "Subject1",
    filePath: "/pdfs/pyqs/ECE/sem2/Subject1.pdf",
  },
  {
    branch: "ECE",
    fileName: "Subject2",
    filePath: "/pdfs/pyqs/ECE/sem2/Subject2.pdf",
  },
  {
    branch: "ECE",
    fileName: "Subject3",
    filePath: "/pdfs/pyqs/ECE/sem2/Subject3.pdf",
  },
  {
    branch: "EEE",
    fileName: "Subject1",
    filePath: "/pdfs/pyqs/EEE/sem2/Subject1.pdf",
  },
  {
    branch: "EEE",
    fileName: "Subject2",
    filePath: "/pdfs/pyqs/EEE/sem2/Subject2.pdf",
  },
  {
    branch: "EEE",
    fileName: "Subject3",
    filePath: "/pdfs/pyqs/EEE/sem2/Subject3.pdf",
  },
  {
    branch: "MECHANICAL",
    fileName: "Subject1",
    filePath: "/pdfs/pyqs/MECHANICAL/sem2/Subject1.pdf",
  },
  {
    branch: "MECHANICAL",
    fileName: "Subject2",
    filePath: "/pdfs/pyqs/MECHANICAL/sem2/Subject2.pdf",
  },
  {
    branch: "MECHANICAL",
    fileName: "Subject3",
    filePath: "/pdfs/pyqs/MECHANICAL/sem2/Subject3.pdf",
  },
  {
    branch: "BIOTECH",
    fileName: "Subject1",
    filePath: "/pdfs/pyqs/BIOTECH/sem2/Subject1.pdf",
  },
  {
    branch: "BIOTECH",
    fileName: "Subject2",
    filePath: "/pdfs/pyqs/BIOTECH/sem2/Subject2.pdf",
  },
];

export const academicCalendar1stYear = {
  oddSemester: [
    { particulars: "Department opens", from: "09-07-2024 (Tuesday)", to: "" },
    {
      particulars: "Academic Term: Teaching for Odd semester",
      from: "31.07.2024 (Wednesday)",
      to: "04.12.2024 (Wednesday)",
    },
    {
      particulars: "Minor-1 Test",
      from: "14.10.2024 (Monday)",
      to: "16.10.2024 (Wednesday)",
    },
    {
      particulars: "Minor-2 Test",
      from: "02.12.2024 (Monday)",
      to: "04.12.2024 (Wednesday)",
    },
    {
      particulars: "Study group for Odd semester (Preparatory)",
      from: "05.12.2024 (Thursday)",
      to: "11.12.2024 (Wednesday)",
    },
    {
      particulars: "University Examinations (Theory)",
      from: "12.12.2024 (Thursday)",
      to: "21.12.2024 (Saturday)",
    },
    {
      particulars: "Winter Break",
      from: "22.12.2024 (Sunday)",
      to: "06.01.2025 (Monday)",
    },
    {
      particulars: "Showing of Answer Sheets to students",
      from: "07.01.2025 (Tuesday)",
      to: "10.01.2025 (Friday)",
    },
    {
      particulars: "Department reopens for Even semester",
      from: "07.01.2025 (Tuesday)",
      to: "",
    },
  ],
  evenSemester: [
    {
      particulars: "Academic Term: Teaching for Even semester",
      from: "07.01.2025 (Tuesday)",
      to: "06.05.2025 (Tuesday)",
    },
    {
      particulars: "Minor-1 Test",
      from: "05.03.2025 (Wednesday)",
      to: "07.03.2025 (Friday)",
    },
    {
      particulars: "Minor-2 Test",
      from: "05.05.2025 (Monday)",
      to: "07.05.2025 (Wednesday)",
    },
    {
      particulars: "Study group for Even semester (Preparatory)",
      from: "08.05.2025 (Thursday)",
      to: "15.05.2025 (Thursday)",
    },
    {
      particulars: "University Examinations (Theory)",
      from: "16.05.2025 (Friday)",
      to: "30.05.2025 (Friday)",
    },
    {
      particulars: "Summer Vacations (Tentative)",
      from: "01.06.2025 (Sunday)",
      to: "10.07.2025 (Thursday)",
    },
    {
      particulars: "Showing of Answer Sheets to students",
      from: "28.05.2025 (Wednesday)",
      to: "31.05.2025 (Saturday)",
    },
  ],
};
export const academicCalendar = {
  oddSemester: [
    {
      particulars: "Department opens",
      from: "16.07.2024 (Tuesday)",
      to: "22.11.2024 (Friday)",
    },
    {
      particulars: "Academic Term: Teaching for Odd semester",
      from: "18.09.2024 (Wednesday)",
      to: "20.09.2024 (Friday)",
    },
    {
      particulars: "Minor-1 Test",
      from: "25.11.2024 (Monday)",
      to: "27.11.2024 (Wednesday)",
    },
    {
      particulars: "Minor-2 Test",
      from: "28.11.2024 (Thursday)",
      to: "05.12.2024 (Thursday)",
    },
    {
      particulars: "Study group for Odd semester (Preparatory)",
      from: "06.12.2024 (Friday)",
      to: "21.12.2024 (Saturday)",
    },
    {
      particulars: "University Examinations (Theory)",
      from: "22.12.2024 (Sunday)",
      to: "06.01.2025 (Monday)",
    },
    {
      particulars: "Winter Break",
      from: "22.12.2024 (Sunday)",
      to: "06.01.2025 (Monday)",
    },
    {
      particulars: "Showing of Answer Sheets to students",
      from: "07.01.2025 (Tuesday)",
      to: "10.01.2025 (Friday)",
    },
    {
      particulars: "Department reopens for Even semester",
      from: "07.01.2025 (Tuesday)",
      to: "",
    },
  ],
  evenSemester: [
    {
      particulars: "Academic Term: Teaching for Even semester",
      from: "07.01.2025 (Tuesday)",
      to: "06.05.2025 (Tuesday)",
    },
    {
      particulars: "Minor-1 Test",
      from: "05.03.2025 (Wednesday)",
      to: "07.03.2025 (Friday)",
    },
    {
      particulars: "Minor-2 Test",
      from: "05.05.2025 (Monday)",
      to: "07.05.2025 (Wednesday)",
    },
    {
      particulars: "Study group for Even semester (Preparatory)",
      from: "08.05.2025 (Thursday)",
      to: "15.05.2025 (Thursday)",
    },
    {
      particulars: "University Examinations (Theory)",
      from: "16.05.2025 (Friday)",
      to: "30.05.2025 (Friday)",
    },
    {
      particulars: "Summer Vacations (Tentative)",
      from: "01.06.2025 (Sunday)",
      to: "10.07.2025 (Thursday)",
    },
    {
      particulars: "Showing of Answer Sheets to students",
      from: "28.05.2025 (Wednesday)",
      to: "31.05.2025 (Saturday)",
    },
  ],
};

//for PreLoader
export const languages = [
  "ਸੁਆਗਤ ਹੈ",
  "स्वागत आहे",
  "স্বাগত",
  "સ્વાગત છે",
  "ಸ್ವಾಗತ",
  "स्वागत",
  "സ്വാഗതം",
  "येवकार",
  "خوش آمدید",
  "வரவேற்பு",
  "స్వాగతం",
  "स्वागतम्‌",
];

export const clubs = [
  {
    picture: tpc,
    fullName: "Training and Placement Cell UIET",
    shortName: "T&P Cell",
    description:
      "Also known as T&P Cell, this organization plays a crucial role in facilitating campus placements, internships, and interactions with industry professionals, helping students bridge the gap between academic knowledge and real-world applications.",
    instagram: "",
    linkedIn:
      "https://www.linkedin.com/company/training-placement-cell-uiet-panjab-university-chandigarh/ ",
    website: "",
  },
  {
    picture: sportsCommittee,
    fullName: "Sports Committee",
    shortName: "Sports Committee",
    description:
      " This committee promotes sports culture within the institute. It organizes various intra-college and inter-college sports events, aiming to foster teamwork, leadership, and a healthy lifestyle among students.",
    instagram: "",
    linkedIn: "https://www.instagram.com/uietsportscommittee/ ",
    website: "https://linktr.ee/UIETSportsCommittee",
  },
  {
    picture: edc,
    fullName: "Entrepreneurship Development Cell UIET",
    shortName: "EcellUiet",
    description:
      "The EDC at UIET encourages students to develop entrepreneurial skills and innovative thinking. It organizes workshops, hackathons, and seminars on entrepreneurship, offering a platform for students to explore business ideas and connect with industry professionals.",
    instagram: "https://www.instagram.com/ecelluiet/",
    linkedIn:
      "https://www.linkedin.com/company/training-placement-cell-uiet-panjab-university-chandigarh/ ",
    website: "",
  },
  {
    picture: bpc,
    fullName: "Brand Promotion Committee UIET",
    shortName: "Brand Promotion",
    description:
      " Focused on promoting UIET's brand and events through various media channels, this committee works to enhance the institute’s visibility and reputation.",
    instagram: "",
    linkedIn: "",
    website: "",
  },
  {
    picture: magboard,
    fullName: "Magboard UIET",
    shortName: "Magboard",
    description:
      "The Club at UIET is known for encouraging innovation and creativity among students. It focuses on innovative problem-solving, providing students with a platform to showcase their skills.",
    instagram: "https://www.instagram.com/magboarduiet/",
    linkedIn: "",
    website: "https://www.facebook.com/magboarduiet",
  },
  {
    picture: ieee,
    fullName: "IEEE UIET",
    shortName: "IEEE",
    description:
      "As a student branch of the IEEE (Institute of Electrical and Electronics Engineers), this club focuses on technical and professional development, offering students opportunities to engage in various IEEE activities and projects.",
    instagram: "https://www.instagram.com/ieee_uiet/",
    linkedIn: "https://www.linkedin.com/company/ieee-uiet-student-branch/",
    website: "",
  },
  {
    picture: dic,
    fullName: "DIC UIET (Design Innovation Centre)",
    shortName: "DIC UIET",
    description:
      "Dedicated to fostering innovation and design thinking, DIC UIET encourages students to explore creative solutions and advancements in technology and design.",
    instagram: "",
    linkedIn: "https://www.linkedin.com/company/dic-panjab-university/",
    website: "https://dicpu.in/",
  },
  {
    picture: euphoria,
    fullName: "Euphoria UIET",
    shortName: "Euphoria",
    description:
      "UIET’s official music and cultural club, Euphoria organizes musical events, competitions, and cultural activities, celebrating and promoting artistic talents within the student community.",
    instagram: "https://www.instagram.com/euphoriauiet/",
    linkedIn: "",
    website: "",
  },
  {
    picture: debsoc,
    fullName: "DebSoc UIET",
    shortName: "DebSoc",
    description:
      " The debating society at UIET, DebSoc nurtures skills in public speaking, argumentation, and critical thinking, providing a platform for students to hone their debating prowess.",
    instagram: "https://www.instagram.com/debsocuiet/",
    linkedIn: "",
    website: "",
  },
  {
    picture: gdsc,
    fullName: "GDSC UIET (Google Developer Student Club)",
    shortName: "GDSC",
    description:
      "A club that offers a platform for students to learn about Google technologies and engage in tech-related projects, GDSC UIET supports students in developing their skills in programming and development.",
    instagram: "https://www.instagram.com/gdsc_uiet/",
    linkedIn:
      "https://www.linkedin.com/company/google-developer-student-club-uiet-panjab-university/",
    website: "",
  },
  {
    picture: imagen,
    fullName: "Imagen Club UIET",
    shortName: "Imagen Club",
    description:
      " Specializing in photography and creative arts, Imagen Club provides students with opportunities to explore and showcase their artistic skills through various media and projects.",
    instagram: "https://www.instagram.com/imagenuiet/",
    linkedIn: "",
    website: "",
  },
  {
    picture: jugadd,
    fullName: "Jugaad Club UIET",
    shortName: "Jugaad Club",
    description:
      "Encouraging innovative solutions and creative engineering hacks, Jugaad Club focuses on practical problem-solving and inventive engineering approaches.",
    instagram: "https://www.instagram.com/jugaadclubuiet/",
    linkedIn: "",
    website: "https://www.facebook.com/jugaaduiet",
  },
  {
    picture: mitra,
    fullName: "Mitra Club UIET",
    shortName: "Mitra Club",
    description:
      "The Mitra Club is focused on social welfare activities. It organizes various events like blood donation camps, environmental awareness drives, and social service projects, aiming to contribute positively to society.",
    instagram: "https://www.instagram.com/mitra_touchinglives/",
    linkedIn: "",
    website: "",
  },
  {
    picture: osmium,
    fullName: "Osmium UIET",
    shortName: "Osmium",
    description: " Osmium is the theatre club of UIET, engaging students in acting, drama, and theatre arts. The club organizes stage performances, workshops, and other events to nurture students' acting skills and promote theatre culture.",
    instagram: "https://www.instagram.com/osmium_osm/",
    linkedIn: "",
    website: "",
  },
  {
    picture: rotaract,
    fullName: "Rotaract Club UIET",
    shortName: "Rotaract",
    description:
      "Engaging students in community service and leadership development, Rotaract Club fosters a spirit of service and social responsibility among its members.",
    instagram: "https://www.instagram.com/rac_uiet/",
    linkedIn: "",
    website: "https://www.facebook.com/rotaractuiet/",
  },
  {
    picture: star,
    fullName: "Star Alumni Club UIET",
    shortName: "Star Alumni",
    description:
      "This club aims to connect current students with distinguished alumni, facilitating networking and mentorship opportunities.",
    instagram: "",
    linkedIn: "",
    website: "",
  },
  {
    picture: autonomy,
    fullName: "Autonomy Club UIET",
    shortName: "Autonomy Club",
    description: "Autonomy is the western dance club, providing a platform for dance enthusiasts. The club participates in inter-college competitions and performs in various cultural fests, encouraging students to express themselves through dance.",
    instagram: "https://www.instagram.com/autonomyuiet/",
    linkedIn: "",
    website: "",
  },
  {
    picture: bhangra,
    fullName: "Bhangra Club UIET",
    shortName: "Bhangra Club",
    description:
      "Engages students in robotics and automation projects, Robotics Club offers practical experience in designing and building robotic systems.",
    instagram: "https://www.instagram.com/uiet_bhangra_crew/",
    linkedIn: "",
    website: "",
  },
  {
    picture: sae,
    fullName: "SAE Club UIET",
    shortName: "SAE Club",
    description:
      " Focuses on automotive engineering and organizes events like BAJA, SAE Club provides students with opportunities to work on automotive projects and participate in engineering competitions.",
    instagram: "https://www.instagram.com/sae_uiet/",
    linkedIn: "https://www.linkedin.com/company/sae-uiet-chandigarh",
    website: "",
  }, {
    picture: psych,
    fullName: "Pysch CLub UIET",
    shortName: "Psych Club",
    description:
      " This club focuses on raising awareness about mental health issues. It organizes workshops, seminars, and interactive sessions to promote mental well-being among students and reduce the stigma around mental health topics.",
    instagram: "https://www.instagram.com/sae_uiet/",
    linkedIn: "  https://www.instagram.com/psychclubuiet/",
    website: "",
  },
];

export const syllabus = [
  {
    fileName: "CSE",
    filePath: "/pdfs/pyqs/CSE/cseSyllabus.pdf",
  },
  {
    fileName: "IT",
    filePath: "/pdfs/pyqs/IT/itSyllabus.pdf",
  },
  {
    fileName: "ECE",
    filePath: "/pdfs/pyqs/ECE/eceSyllabus.pdf",
  },
  {
    fileName: "EEE",
    filePath: "/pdfs/pyqs/EEE/eeeSyllabus.pdf",
  },
  {
    fileName: "Mechanical",
    filePath: "/pdfs/pyqs/MECHANICAL/mechSyllabus.pdf",
  },
  {
    fileName: "Biotech",
    filePath: "/pdfs/pyqs/BIOTECH/biotechSyllabus.pdf",
  },
];
