import Product58Section from "./Product58Section";

import hrMainImg from "../../assets/hr/banner01.png";
import hrCard1 from "../../assets/hr/banner01-01.png";
import hrCard2 from "../../assets/hr/banner01-02.png";
import hrCard3 from "../../assets/hr/banner01-03.png";
import hrLogo from "../../assets/hr/hr58-logo.svg";
import iconStreamLined from "../../assets/hr/icon-streamlined.svg";
import iconAttendance from "../../assets/hr/icon-attendance.svg";

import todoMainImg from "../../assets/todo/banner02.png";
import todoCard1 from "../../assets/todo/banner02-02.png";
import todoCard2 from "../../assets/todo/banner02-01.png";
import todoLogo from "../../assets/todo/todo58-logo.svg";
import iconTeam from '../../assets/todo/icon-teamwork.svg';
import iconSytem from '../../assets/todo/icon-system.svg';

import cmMainImg from "../../assets/C&M/banner1.svg";
import cmcard1 from "../../assets/C&M/c&m-inner1.png";
import cmLogo from "../../assets/C&M/c&m58.svg";
import iconTruck from '../../assets/C&M/icon-truck-delivery.svg';

import booksMainImg from "../../assets/books58/banner2.svg";
import booksCard1 from "../../assets/books58/books-inner1.svg";
import booksCard2 from "../../assets/books58/books-inner2.svg";
import booksLogo from "../../assets/books58/books-logo.svg";
import iconAcc from '../../assets/books58/icon-account.svg';
import iconGST from '../../assets/books58/icon-gst.svg';

import pattern from "../../assets/hr/pattern02.png";

const PRODUCTS = [
    {
        variant: "hr58",
        layout: "text-left",
        logo: hrLogo,
        title: <>Simplifying HR<br />Management</>,
        features: [
            {
                icon: iconStreamLined,
                heading: "Streamlined Employee Data Management",
                text: "From personal details and performance reviews to benefits and leave tracking."
            },
            {
                icon: iconAttendance,
                heading: "Efficient Time and Attendance",
                text: "Easily track and manage attendance, leaves, and time-off ensuring accurate payroll."
            }
        ],
        mainImg: hrMainImg,
        hoverImages: [hrCard1, hrCard2, hrCard3]
    },
    {
        variant: "todo58",
        layout: "image-left",
        logo: todoLogo,
        title: <>Streamlined Task <br />Management</>,
        features: [
            {
                icon: iconTeam,
                heading: "Collaborative Team Workflows",
                text: "Enhance teamwork by assigning tasks, setting deadlines, and tracking progress."
            },
            {
                icon: iconSytem,
                heading: "Smart Priority Management",
                text: "Custom priorities ensure nothing slips through the cracks."
            }
        ],
        mainImg: todoMainImg,
        hoverImages: [todoCard1, todoCard2]
    },
    {
        variant: "cm58",
        layout: "text-left",
        logo: cmLogo,
        title: <>Simplifying Crusher and<br />Mines Solution</>,
        features: [
            {
                icon: iconAttendance,
                heading: "Centralized Workforce Management",
                text: "Manage employee data, shifts, and productivity efficiently."
            },
            {
                icon: iconTruck,
                heading: "Accurate Attendance Tracking",
                text: "Track attendance and leaves with precision in challenging environments."
            }
        ],
        mainImg: cmMainImg,
        hoverImages: [cmcard1]
    },
    {
        variant: "books58",
        layout: "image-left",
        logo: booksLogo,
        title: <>Streamlined Account <br />Management</>,
        features: [
            {
                icon: iconAcc,
                heading: "Simplifying Accounting",
                text: "Accurate bookkeeping and streamlined financial operations."
            },
            {
                icon: iconGST,
                heading: "Simplify and Master GST",
                text: "Effortless GST calculations, reporting, and compliance."
            }
        ],
        mainImg: booksMainImg,
        hoverImages: [booksCard1, booksCard2]
    }
];

export default function AllProducts58Section() {
    return (
        <>
            {PRODUCTS.map((product, index) => (
                <Product58Section
                    key={product.variant || index}
                    {...product}
                    pattern={pattern}
                />
            ))}
        </>
    );
}
