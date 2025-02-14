import Profile from '../assets/Rectangle 90.png';
import { FaSquareTwitter, FaSquareFacebook, FaSquareInstagram, FaSquareGithub, FaEnvelope, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="card-footer d-flex justify-content-center gap-2 ">
            <FaSquareTwitter />
            <FaSquareFacebook />
            <FaSquareInstagram />
            <FaSquareGithub />
        </div>
    )
}

const About = () => {
    return (
        <div className="about text-start">
            <h4>About</h4>
            <p>
                I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
            </p>
        </div>
    )
}

const Intereset = () => {
    return (
        <div className="interest text-start">
            <h4>Intereset</h4>
            <p>
                Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
        </div>
    )
}

const Info = () => {
    return (
        <>
            <h5 className='name'>Laura Smith</h5>
            <span className="profession">Frontend developer</span>
            <br />
            <span className="website lead">laura.website</span>
            <div className="d-flex justify-content-around gap-2 mt-1">
                <button type="button" className='btn btn--email rounded'>
                    <FaEnvelope size={16} className='mt-0 mr-1' />
                    Email
                </button>
                <button type="button" className='btn btn--linkedin rounded'>
                    <FaLinkedin size={16} className='mt-0 mr-1' />
                    LinkedIn
                </button>
            </div>
        </>
    )
}

const BusinessCard = () => {
    return (
        <div className="card text-center my-3" style={{ width: "15rem" }}>
            <img src={Profile} className="image" alt="Business Card" />
            <div className="card-body">
                <Info />
                <About />
                <Intereset />
            </div>
            <Footer />
        </div>
    )
}

export default BusinessCard;