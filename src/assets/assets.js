import ceoImg from '../assets/images/ceo-img.png';
import ctoImg from '../assets/images/cto-img.png';
import brand_1 from '../assets/images/safaricom.png'
import brand_2 from '../assets/images/facebook.svg'
import brand_3 from '../assets/images/amazon.svg'
import brand_4 from '../assets/images/apple-173-svgrepo-com.svg'
import brand_5 from '../assets/images/netflix.svg'
import brand_6 from '../assets/images/google.svg'
import brand_7 from '../assets/images/microsoft.svg'
import brand_8 from '../assets/images/ibm.svg'


let currentDtae = new Date();

let day = currentDtae.getDate();
let month = currentDtae.getMonth() + 1;
let year = currentDtae.getFullYear();

let formatedDate = `${day}/${month}/${year}`

export const assets = {
    ceoImg,
    ctoImg,
    brand_1,
    brand_2,
    brand_3,
    brand_4,
    brand_5,
    brand_6,
    brand_7,
    brand_8,
}


export const jobs = [

    {
        _id:1,
        title:"Software Engineer",
        date:'21 Feb 2025',
        briefDescription: "Specializing in estate planning and business formation, conducting virtual consultations, and drafting comprehensive estate plans while ensuring compliance with legal standards and providing exceptional client support.",
        remote:"100% Remote",
        site:"Full-Time",
        location:"Nairobi",
        salary:19,
        career_level: "Experienced",
        quallification: "Bachelors Degree",
        responsibilities: [
            "Customer Satisfaction: Deliver fast, effective Services to internal and external customers/stakeholders/departments.",
            "Compliance: Ensuring preparation, payment, distribution and display of licenses (including Single Business Permits, Music Licenses, Fire Licenses, Branding, Signage etc.) by 31 December of every year.",
            "Overseeing department budget planning and tracking monthly spend: Prepare on an annual basis and monitor relevant office expenses versus budget",
            "Customer Satisfaction: Deliver fast, effective Services to internal and external customers/stakeholders/departments.",
            "Performance Management and Career development: Oversee, mentor, train, and coach junior administrative staff to optimize productivity.",
        ]
    },
    {
        _id:2,
        title:"Product Manager",
        date:formatedDate,
        briefDescription: "Specializing in estate planning and business formation, conducting virtual consultations, and drafting comprehensive estate plans while ensuring compliance with legal standards and providing exceptional client support.",
        remote:"100% Remote",
        site:"Full-Time",
        location:"Nairobi",
        salary:19,
        career_level: "Experienced",
        quallification: "Bachelors Degree",
        responsibilities: [
            "Customer Satisfaction: Deliver fast, effective Services to internal and external customers/stakeholders/departments.",
            "Compliance: Ensuring preparation, payment, distribution and display of licenses (including Single Business Permits, Music Licenses, Fire Licenses, Branding, Signage etc.) by 31 December of every year.",
            "Overseeing department budget planning and tracking monthly spend: Prepare on an annual basis and monitor relevant office expenses versus budget",
            "Customer Satisfaction: Deliver fast, effective Services to internal and external customers/stakeholders/departments.",
            "Performance Management and Career development: Oversee, mentor, train, and coach junior administrative staff to optimize productivity.",
        ]
    },
    {
        _id:3,
        title:"Senior Frontend Engineer",
        date:formatedDate,
        briefDescription: "Specializing in estate planning and business formation, conducting virtual consultations, and drafting comprehensive estate plans while ensuring compliance with legal standards and providing exceptional client support.",
        remote:"100% Remote",
        site:"Full-Time",
        location:"Nairobi",
        salary:19,
        career_level: "Experienced",
        quallification: "Bachelors Degree",
        responsibilities: [
            "Customer Satisfaction: Deliver fast, effective Services to internal and external customers/stakeholders/departments.",
            "Compliance: Ensuring preparation, payment, distribution and display of licenses (including Single Business Permits, Music Licenses, Fire Licenses, Branding, Signage etc.) by 31 December of every year.",
            "Overseeing department budget planning and tracking monthly spend: Prepare on an annual basis and monitor relevant office expenses versus budget",
            "Customer Satisfaction: Deliver fast, effective Services to internal and external customers/stakeholders/departments.",
            "Performance Management and Career development: Oversee, mentor, train, and coach junior administrative staff to optimize productivity.",
        ]
    },
    {
        _id:4,
        title:"Senior Backend Engineer",
        date:formatedDate,
        briefDescription: "Specializing in estate planning and business formation, conducting virtual consultations, and drafting comprehensive estate plans while ensuring compliance with legal standards and providing exceptional client support.",
        remote:"100% Remote",
        site:"Full-Time",
        salary:19,
        location:"Nairobi",
        career_level: "Experienced",
        quallification: "Bachelors Degree",
        responsibilities: [
            "Customer Satisfaction: Deliver fast, effective Services to internal and external customers/stakeholders/departments.",
            "Compliance: Ensuring preparation, payment, distribution and display of licenses (including Single Business Permits, Music Licenses, Fire Licenses, Branding, Signage etc.) by 31 December of every year.",
            "Overseeing department budget planning and tracking monthly spend: Prepare on an annual basis and monitor relevant office expenses versus budget",
            "Customer Satisfaction: Deliver fast, effective Services to internal and external customers/stakeholders/departments.",
            "Performance Management and Career development: Oversee, mentor, train, and coach junior administrative staff to optimize productivity.",
        ]
    },
    {
        _id:5,
        title:"Quality Assurance",
        date:formatedDate,
        briefDescription: "Specializing in estate planning and business formation, conducting virtual consultations, and drafting comprehensive estate plans while ensuring compliance with legal standards and providing exceptional client support.",
        remote:"100% Remote",
        site:"Full-Time",
        location:"Nairobi",
        salary:19,
        career_level: "Entry-Level",
        quallification: "Bachelors Degree",
        responsibilities: [
            "Customer Satisfaction: Deliver fast, effective Services to internal and external customers/stakeholders/departments.",
            "Compliance: Ensuring preparation, payment, distribution and display of licenses (including Single Business Permits, Music Licenses, Fire Licenses, Branding, Signage etc.) by 31 December of every year.",
            "Overseeing department budget planning and tracking monthly spend: Prepare on an annual basis and monitor relevant office expenses versus budget",
            "Customer Satisfaction: Deliver fast, effective Services to internal and external customers/stakeholders/departments.",
            "Performance Management and Career development: Oversee, mentor, train, and coach junior administrative staff to optimize productivity.",
        ]
    },
    {
        _id:6,
        title:"DevOps Engineer",
        date:formatedDate,
        briefDescription: "Specializing in estate planning and business formation, conducting virtual consultations, and drafting comprehensive estate plans while ensuring compliance with legal standards and providing exceptional client support.",
        remote:"100% Remote",
        site:"Full-Time",
        location:"Kilifi",
        salary:19,
        career_level: "Experienced",
        quallification: "Bachelors Degree",
        responsibilities: [
            "Customer Satisfaction: Deliver fast, effective Services to internal and external customers/stakeholders/departments.",
            "Compliance: Ensuring preparation, payment, distribution and display of licenses (including Single Business Permits, Music Licenses, Fire Licenses, Branding, Signage etc.) by 31 December of every year.",
            "Overseeing department budget planning and tracking monthly spend: Prepare on an annual basis and monitor relevant office expenses versus budget",
            "Customer Satisfaction: Deliver fast, effective Services to internal and external customers/stakeholders/departments.",
            "Performance Management and Career development: Oversee, mentor, train, and coach junior administrative staff to optimize productivity.",
        ]
    },
    {
        _id:7,
        title:"ML/AI Engineer",
        date:formatedDate,
        briefDescription: "Specializing in estate planning and business formation, conducting virtual consultations, and drafting comprehensive estate plans while ensuring compliance with legal standards and providing exceptional client support.",
        remote:"100% Remote",
        site:"Full-Time",
        location:"Thika",
        salary:19,
        career_level: "Experienced",
        quallification: "Diploma",
        responsibilities: [
            "Customer Satisfaction: Deliver fast, effective Services to internal and external customers/stakeholders/departments.",
            "Compliance: Ensuring preparation, payment, distribution and display of licenses (including Single Business Permits, Music Licenses, Fire Licenses, Branding, Signage etc.) by 31 December of every year.",
            "Overseeing department budget planning and tracking monthly spend: Prepare on an annual basis and monitor relevant office expenses versus budget",
            "Customer Satisfaction: Deliver fast, effective Services to internal and external customers/stakeholders/departments.",
            "Performance Management and Career development: Oversee, mentor, train, and coach junior administrative staff to optimize productivity.",
        ]
    },
    {
        _id:8,
        title:"UI/UX Designer",
        date:formatedDate,
        briefDescription: "Specializing in estate planning and business formation, conducting virtual consultations, and drafting comprehensive estate plans while ensuring compliance with legal standards and providing exceptional client support.",
        remote:"100% Remote",
        site:"Full-Time",
        location:"Nairobi",
        salary:19,
        career_level: "Entry-Level",
        quallification: "Masters",
        responsibilities: [
            "Customer Satisfaction: Deliver fast, effective Services to internal and external customers/stakeholders/departments.",
            "Compliance: Ensuring preparation, payment, distribution and display of licenses (including Single Business Permits, Music Licenses, Fire Licenses, Branding, Signage etc.) by 31 December of every year.",
            "Overseeing department budget planning and tracking monthly spend: Prepare on an annual basis and monitor relevant office expenses versus budget",
            "Customer Satisfaction: Deliver fast, effective Services to internal and external customers/stakeholders/departments.",
            "Performance Management and Career development: Oversee, mentor, train, and coach junior administrative staff to optimize productivity.",
        ]
    },
    {
        _id:9,
        title:"Human Resource Manager",
        date:formatedDate,
        briefDescription: "Specializing in estate planning and business formation, conducting virtual consultations, and drafting comprehensive estate plans while ensuring compliance with legal standards and providing exceptional client support.",
        remote:"100% Remote",
        site:"Full-Time",
        location:"Mombasa",
        salary:19,
        career_level: "Experienced",
        quallification: "Bachelors Degree",
        responsibilities: [
            "Customer Satisfaction: Deliver fast, effective Services to internal and external customers/stakeholders/departments.",
            "Compliance: Ensuring preparation, payment, distribution and display of licenses (including Single Business Permits, Music Licenses, Fire Licenses, Branding, Signage etc.) by 31 December of every year.",
            "Overseeing department budget planning and tracking monthly spend: Prepare on an annual basis and monitor relevant office expenses versus budget",
            "Customer Satisfaction: Deliver fast, effective Services to internal and external customers/stakeholders/departments.",
            "Performance Management and Career development: Oversee, mentor, train, and coach junior administrative staff to optimize productivity.",
        ]
    },
]