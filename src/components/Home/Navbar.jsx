/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from 'emailjs-com';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import "../../Styles/Navbar.css";
import GL from "../../images/GL.jpg";
import HR from "../../images/HackerRank.jpg";
import logo from "../../images/ai-variant.webp";
import bank from "../../images/bank.jpg";
import car from "../../images/car-image.jpg";
import diploma from "../../images/diploma.avif";
import Excelr from "../../images/excler.jpg";
import passport from "../../images/passort_photo.jpg";
import resume from "../../images/resume.jpg";
import sun from "../../images/sun-college.png";
import tea from "../../images/tea.jpg";
import weather from "../../images/weather.jpg";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const names = ["Full Stack Developer", "Frontend Developer", "Backend Developer"];
    const [currentNameIndex, setCurrentNameIndex] = useState(0);

    const frontend = ["HTML5", "CSS3", "javaScript", "Sass", "React.js", "Redux", "Next.js", "HTTP", "NPM", "Media Queries", "UI/UX design", "AWS S3"];

    const backend = ["Java", "Microservices Architecture", "Spring Boot", "RESTful APIs", "Node.js", "OAuth", "Apache"];

    const db = ["MySQL", "AWS Services", "EC2", "Docker", "Jenkins", "CI/CD Pipeline", "IaC", "Maven", "Kubernetes", "Agile"];

    const others = ["Git", "GitHub", "Jira", "IntelliJ", "Communication skills", "Problem-Solving"];

    const [formData, setFormData] = useState({
        Name: '',
        email: '',
        message: ''
    });

    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(false);
    const [resumeopen, setresumeopen] = useState(false);
    const [resumeImage, setresumeImage] = useState(null);

    const openresume = (resume) => {
        setresumeImage(resume);
        setresumeopen(true);
    };

    const closeresume = () => {
        setresumeImage(false);
        setresumeopen(false);
    };


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleMenuClose = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentNameIndex((prevIndex) => (prevIndex + 1) % names.length);
        }, 2000);

        return () => clearInterval(intervalId);
    });

    const openimg = (imagesrc) => {
        setSelectedImage(imagesrc);
        setIsOpen(true);
    };

    const closeimg = () => {
        setIsOpen(false);
        setSelectedImage(null);
    };



    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_s3hjxuj', 'template_0qh3sce', e.target, "jG-jdlvb8KtOq5mho")
            .then((result) => {
                console.log(result.text);
                alert("Message sent succesfully");
            }, (error) => {
                console.log(error.text);
                alert("Failed to send message");
            });

        setFormData({
            Name: '',
            email: '',
            message: ''
        });
    };

    const openlinkedin = () => {
        window.open("https://www.linkedin.com/in/tharun-gouli");
    }

    const opengithub = () => {
        window.open("https://github.com/THARUN-KUMAR-GOULI");
    }

    return (
        <>
            <div className='navbar'>
                <div className="hamburger" id='hamburger' onClick={toggleMenu}>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </div>

                <div className="logo">
                    <p>&lt;  Tharun  &gt;</p>
                </div>

                <div className="nav-menu">
                    <ul>
                        <li><Link to='about' smooth={true} duration={2000} >About</Link></li>
                        <li><Link to='skills' smooth={true} duration={2000}>Skills</Link></li>
                        <li><Link to='timeline' href="#">Work History</Link></li>
                        <li><Link to='projects' smooth={true} duration={2000}>Projects</Link></li>
                        <li><Link to='education' smooth={true} duration={2000}>Education</Link></li>
                        <li><Link to='certificate' smooth={true} duration={2000}>Certifications</Link></li>
                    </ul>
                </div>

                <div className={`overlay ${isMenuOpen ? 'active' : ''}`}>
                    <FontAwesomeIcon icon={faTimes} className='F-icon' id='F-icon' onClick={toggleMenuClose} />
                    <ul>
                        <li><Link to='about' smooth={true} onClick={toggleMenuClose}>About</Link></li>
                        <li><Link to='skills' smooth={true} onClick={toggleMenuClose}>Skills</Link></li>
                        <li><Link to='timeline' smooth={true} onClick={toggleMenuClose}>Work History</Link></li>
                        <li><Link to='projects' smooth={true} onClick={toggleMenuClose}>Projects</Link></li>
                        <li><Link to='education' smooth={true} onClick={toggleMenuClose}>Education</Link></li>
                        <li><Link to='certificate' smooth={true} onClick={toggleMenuClose}>Certifications</Link></li>
                        <li><Link to='contact' smooth={true} onClick={toggleMenuClose}>Contact Me</Link></li>
                    </ul>
                </div>

                <div className='github'>
                    <h3><a className='github-btn' onClick={() => opengithub()}>GitHub</a></h3>

                    <h3><a className='linkedin-btn' onClick={() => openlinkedin()}>Linkedin</a></h3>
                </div>

            </div>

            <div className="separator"></div>

            <div className="about" id='about'>

                <div className="left">
                    <img className='profile-pic' src={passport} alt="" />
                    <button className='resume-btn' onClick={() => openresume(resume)}>Resume</button>
                    {resumeopen && (
                        <div className="resume-overlay" onClick={closeresume}>
                            <div className="resume-content" onClick={(e) => e.stopPropagation()}>
                                <button className="close" onClick={() => closeresume()}>X</button>
                                <img src={resumeImage} alt="" style={{ width: '100%', height: '100%' }} />
                            </div>
                        </div>
                    )}


                </div>

                <div className="right">
                    <div>Hello, This is <br></br><span className='name'>Tharun Kumar</span></div>

                    <br></br>

                    <div className="role">I'm a <span className='transition'>{names[currentNameIndex]}</span></div>

                    <p>Entry level AWS Full stack Java developer always eager to take new challenges.<br></br> <br></br>Skilled in building and deploying end-to-end applications using Java and AWS cloud services.<br></br><br></br>Seeking new Technologies to enrich my Skill set</p>

                </div>

            </div>

            <div className="separator"></div>

            <h2 className='skill-heading'>Skills</h2>
            <div className="skills" id='skills'>

                <div className="skill frontend">
                    <div className="heading">Front End</div>
                    <div className="set">
                        {frontend.map((name, index) => (
                            <small key={index}>{name}</small>
                        ))}
                    </div>
                </div>


                <div className="skill backend">
                    <div className="heading">Back End</div>
                    <div className="set">
                        {backend.map((name, index) => (
                            <small key={index}>{name}</small>
                        ))}

                    </div>
                </div>

                <div className="skill DB&cloud">
                    <div className="heading">DB & AWS</div>
                    <div className="set">
                        {db.map((name, index) => (
                            <small key={index}>{name}</small>
                        ))}
                    </div>
                </div>

                <div className="skill other">
                    <div className="heading">Other</div>
                    <div className="set">
                        {others.map((name, index) => (
                            <small key={index}>{name}</small>
                        ))}
                    </div>
                </div>
            </div>

            <div className="separator"></div>


            <h2 className='work-heading'>Work History</h2>
            <div className="timeline" id='timeline'>

                <div className="container right">
                    <img src={logo} alt="" />
                    <div className="text-box">
                        <h3>Ai Variant</h3>
                        <small className="date">12 Feb 2024 - 12 May 2024</small>
                        <p className="description">Trained on Full Stack Java Development through developing projects.<br></br>Gained practical experience on developing and designing web applications.<br></br>Experienced in deploying applications to production environments.</p>
                        <span className="work-arrow"></span>
                    </div>
                </div>
            </div>

            <div className="separator"></div>

            <div className="projects" id='projects'>
                <h2 className='project-heading'>Projects</h2>
                <div className="containers">

                    <div className="car-rental project">
                        <img src={car} alt="" />
                        <h3>Car Rental Booking</h3>
                        <small><span>Java</span> <span>Spring Boot</span> <span>JavaScript</span> <span>React.js</span> <span>REST APIs</span><span>MySQL</span></small>
                        <span>The user can book the car according to the location he selects from the dropdown. User can receive mail confirmation after booking.</span>
                    </div>

                    <div className="weather project">
                        <img src={weather} alt="" />
                        <h3>Weather application</h3>
                        <small><span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>React.js</span><span>Redux</span> <span>API</span></small>
                        <span>The user can view rel-time weather data of any location by searching in the search bar. Developed using OpenWeatherMap API.</span>
                    </div>

                    <div className="bank-management project">
                        <img src={bank} alt="" />

                        <h3>Bank Management System</h3>
                        <small><span>Java</span> <span>JavaFX</span> <span>Swing</span><span>REST APIs</span> <span>AWT</span> <span>MySQL</span></small>
                        <span>By submitting the details, the user can create the account. Later can able to perform Banking operations</span>
                    </div>

                    <div className="tea-station project">
                        <img src={tea} alt="" />

                        <h3>Tea Station</h3>
                        <small><span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>Bootstrap</span><span>React.js</span></small>
                        <span>Responsive website showcases the variety of Tea-brands available and their prices.</span>
                    </div>
                </div>
            </div>

            <div className="separator"></div>


            <div className="education" id='education'>
                <h2>Education</h2>

                <div className="containerr rightt">
                    <img src={sun} alt="" />
                    <div className="textbox">
                        <h4>Bachelor of Science</h4>
                        <h6>Sun International Institute of Tourism and management</h6>
                        <small className="date">2020 - 2023</small><br />
                        <small>Hyderabad, T.S</small>
                        <span className="arrow-right"></span>
                    </div>
                </div>

                <div className="containerr leftt">
                    <img src={diploma} alt="" />
                    <div className="textbox">
                        <h4>Technical Diploma</h4>
                        <h6>Government Polytechnic College</h6>
                        <small className="date">2017 - 2020</small><br />
                        <small> Anantapur, A.P</small>
                        <span className="arrow-left"></span>
                    </div>

                </div>
            </div>

            <div className="education-active" id='education'>
                <h2>Education</h2>

                <div className="containerr rightt">
                    <img src={sun} alt="" />
                    <div className="textboxes">
                        <h4>Bachelor of Science</h4>
                        <h6>Sun International Institute of Tourism and management</h6>
                        <small className="date">2020 - 2023</small><br />
                        <small>Hyderabad, T.S</small>
                        <span className="arrow-right"></span>
                    </div>
                </div>

                <div className="containerr leftt">
                    <img src={diploma} alt="" />
                    <div className="textboxes">
                        <h4>Technical Diploma</h4>
                        <h6>Government Polytechnic College</h6>
                        <small className="date">2017 - 2020</small><br />
                        <small> Anantapur, A.P</small>
                        <span className="arrow-left"></span>
                    </div>

                </div>
            </div>

            <div className="separator"></div>


            <div className="certifications" id='certificate'>
                <h2>Certifications</h2>
                <div className='certificates'>
                    <div className="excelr" onClick={() => openimg(Excelr)}>
                        <img src={Excelr} alt="" />
                        <small>Full Stack Java </small>
                    </div>
                    <div className="HackerRank" onClick={() => openimg(HR)}>
                        <img src={HR} alt="" />
                        <small>Java</small>
                    </div>
                    <div className="GL" onClick={() => openimg(GL)}>
                        <img src={GL} alt="" />
                        <small>Java Programming</small>
                    </div>
                </div>

                {isOpen && (
                    <div className="img-overlay" onClick={closeimg}>
                        <div className="img-content" onClick={(e) => e.stopPropagation()}>
                            <img src={selectedImage} alt="" />
                            <button onClick={closeimg}>Close</button>
                        </div>
                    </div>
                )}
            </div>

            <div className="separator"></div>


            <div className="contact" id='contect'>
                <h2>Message Me</h2>
                <form className='contact-form' onSubmit={handleSubmit}>
                    <input type="text" value={formData.Name} name='Name' placeholder='YourName' onChange={handleChange} required />

                    <input type="email" name='email' value={formData.email} placeholder='Your Email' onChange={handleChange} required />

                    <textarea type="textarea" name='message' value={formData.message} placeholder='Enter the Message' onChange={handleChange} required />

                    <button type='submit' className='submit'>Send</button>
                </form>
            </div>

            <div className="footer">
                <div className="name">Tharun Kumar</div>
                <div><span>&copy;</span><span>Tharun.</span><span>All rights reserved</span></div>
            </div>

        </>
    )
}

export default Navbar