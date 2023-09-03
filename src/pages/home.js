import aboutHero from '../images/About/her.png'
import about2 from "../images/about 2/about2.png"
import builder1 from "../images/About 3/team1.png"
import builder2 from "../images/About 3/team2.png"
import builder3 from "../images/About 3/team3.png"
import gallery1 from '../images/gallery/gallery1.png'
import gallery2 from '../images/gallery/gallery2.png'
import gallery3 from '../images/gallery/gallery3.png'
import gallery4 from '../images/gallery/gallery4.png'
import gallery5 from '../images/gallery/gallery5.png'
import contact_img from "../images/Conatct/contact_form.png"
import footer_img from "../images/footer/section_bg03.png"
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
export default function Home() {
    const currencies = [
        {
            value: 'USD',
            label: 'Saiful Islam',
        },
        {
            value: 'EUR',
            label: 'Boxing',
        },
        {
            value: 'BTC',
            label: 'Arafat Miya',
        },
        {
            value: 'JPY',
            label: 'Shakil Miya',
        },
        {
            value: 'JPY',
            label: 'Tameem Sharkar',
        },
    ];
    return (

        <>
            {/* Home : Banner */}
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-12 mt-5">
                            <div className="row">
                                <div className="col-md-2 col-6">
                                    <div className="for-line"></div>
                                </div>
                                <div className="col-md-4 col-6">
                                    <h6 className="red-text">WITH PATRICK POTTER</h6>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-white mt-5">BUILD PERFECT BODY <br /> SHAPE FOR GOOD AND <br /> HEALTHY LIFE</h1>
                          
                                    <Button variant="contained" className="nav-button mt-5"  >become  a  member</Button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Home : About */}
            <div className="About container my-5">
                <div className="row">
                    <div className="col-md-5 col-sm-12 mt-5"> <img className='img-fluid' src={aboutHero} alt="" /></div>
                    <div className="col-md-7 col-sm-12 ">
                        <div className="row">
                            <div className="col-md-2 col-6">
                                <div className="about-for-line"></div>
                            </div>
                            <div className="col-md-4 col-6">
                                <h6 className="about-red-text">ABOUT OUR GYM</h6>
                            </div>
                        </div>
                        <h1 className='text-white mt-2 fw-bold about-heading'>
                            SAFE BODY BUILDING PROPER <br /> SOLUTIONS THAT SAVES OUR <br />     VALUABLE TIME!
                        </h1>
                        <p className="about-text mt-3">Brook presents your services with flexible, convenient and cdpose layouts. <br /> You can select your favorite layouts & elements for cular ts with unlimited <br /> ustomization possibilities. Pixel-perfect replication of the designers is <br /> intended.</p>
                        <p className="about-text-2 disabled mt-3">Brook presents your services with flexible, convefnient and chient <br /> anipurpose layouts. You can select your favorite layouts.</p>
                        
                            <Button variant="contained" className="nav-button mt-3"  >become  a  member</Button>
                        
                    </div>

                </div>
            </div>
            {/* Home : service */}
            <div className="service-bg-overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-sm-12">
                            <div className="row">
                                <div className="col-md-2 col-6">
                                    <div className="service-for-line"></div>
                                </div>
                                <div className="col-md-4 col-6">
                                    <h6 className="service-red-text">ABOUT OUR GYM</h6>

                                </div>
                                <h1 className="service-heading my-5 text-white">PUSH YOUR LIMITS FORWARD <br /> WE OFFER TO YOU</h1>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <Link to="Services">
                                <Button variant="contained" className="Service-button ">MORE SERVICES</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-4 col-sm-12 bg-white text-center border my-2 shadow  card-1">
                            <div className="card-1-icon mt-5">
                                {/* <i className="fa-solid fa-dumbbell fa-lg mt-5   " style={{ color: "#000000", fontSize: "60px", }}></i> */}
                                <span className="material-symbols-outlined icon-1">
                                    fitness_center
                                </span>
                            </div>
                            <div className="card-1-heading mt-5">
                                <h5 className='mt-3 fw-bold'>QUALITY EQUIPMENT</h5>
                            </div>
                            <div className="card-1-text mb-5 mt-2">
                                <h5 className='mt-3 text-muted mb-5 card-1-text'>The sea freight service has grown <br /> consider ably in recent years. We spend <br /> timetting to kn.</h5>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 bg-white text-center border my-2 shadow card-2">
                            <div className="card-1-icon mt-5">
                                <span className="material-symbols-outlined icon-1">
                                    ecg_heart
                                </span>
                            </div>
                            <div className="card-1-heading mt-5">
                                <h5 className='mt-3 fw-bold'>HEALTH CARING</h5>
                            </div>
                            <div className="card-1-text mb-5 mt-2">
                                <h5 className='mt-3 text-muted mb-5 card-1-text'>The sea freight service has grown <br /> consider ably in recent years. We spend <br /> timetting to kn.</h5>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 bg-white text-center   border my-2 shadow card-3">
                            <div className="card-1-icon mt-5">
                                <span className="material-symbols-outlined icon-1   ">
                                    acute
                                </span>
                            </div>
                            <div className="card-1-heading mt-5">
                                <h5 className='mt-3 fw-bold'>GYM STRATIGIES</h5>
                            </div>
                            <div className="card-1-text mb-5 mt-2">
                                <h5 className='mt-3 text-muted mb-5 card-1-text'>The sea freight service has grown <br /> consider ably in recent years. We spend <br /> timetting to kn.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Home : About 2 */}
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-5 col-lg-5 col-sm-12">
                        <div className="about-img mt-3">
                            <img src={about2} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-12 col-lg-7">
                        <div className="row">
                            <div className="col-md-2 col-6">
                                <div className="for-line"></div>
                            </div>
                            <div className="col-md-4 col-6">
                                <h6 className="red-text">CLIENT FEEDBACK</h6>
                            </div>
                        </div>
                        <div className="about-2-heading">
                            <h1>WHAT OUR CLIENT THIK ABOUT OUR GYM</h1>
                            <p className='text-muted mt-4'>Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts &amp; elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.</p>
                            <span className='fw-bold fs-4 mt-4'>Jhone Smith </span>
                            <span className='text-muted'>Gym Trainer</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* HOME:Gallery */}
            <div className="container m">
                <div className="row">
                    <div className="col-md-6">
                        <img src={gallery1} className='img-fluid' alt="" />

                        <Link to="Gallery">
                            <ArrowRightAltIcon className='gallery-icon-1' />
                        </Link>
                        <h4 className='fw-bold fs-3 text-white '>BEST FITNESS GALLERY</h4>


                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-sm-6 my-1"><img src={gallery2} className='img-fluid' alt="" />

                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-6 my-1"><img src={gallery3} className='img-fluid' alt="" />
                            </div>

                            <div className="col-md-6 col-lg-6 col-sm-6 my-1"><img src={gallery4} className='img-fluid' alt="" />
                            </div>

                            <div className="col-md-6 col-lg-6 col-sm-6 my-1"><img src={gallery5} className='img-fluid' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* home:About 3 */}
            <div className="container"><div className="row">
                <div className="col-md-9 col-lg-9 col-sm-12">
                    <div className="row">
                        <div className="col-md-2 col-6">
                            <div className="for-line"></div>
                        </div>
                        <div className="col-md-4 col-6  ">
                            <h6 className="red-text fs-4 fw-bold">OUR TEAM MEMBERS</h6>
                        </div>
                    </div>
                    <h1 className="fs-1 fw-bold about-3-heading">OUR MOST EXPRIENCED <br /> TRAINERS</h1>
                </div>
                <div className="col-md-3 col-sm-6">
                    <Link to="Services">
                        <Button variant="contained" className="about-3-button ">MORE SERVICES</Button>
                    </Link></div>
            </div></div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="about-3-img-1">
                            <img src={builder1} className='img-fluid' alt="" />
                            <div className="about-3-card-1-text">
                                <span className='text-danger fw-bold about-3-line'>____________</span>
                                <h5 className='text-white'>JHON SHUSANT </h5><span className='disabled  text-white ms-5 '>CREATIVE DERECTOR</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="about-3-img-2">
                            <img src={builder2} className='img-fluid' alt="" />
                            <div className="about-3-card-1-text">
                                <span className='text-danger fw-bold about-3-line'>____________</span>
                                <h5 className='text-white'>JHON SHUSANT </h5><span className='disabled  text-white ms-5 '>CREATIVE DERECTOR</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="about-3-img-3">
                            <img src={builder3} className='img-fluid' alt="" />
                            <div className="about-3-card-1-text">
                                <span className='text-danger fw-bold about-3-line'>____________</span>
                                <h5 className='text-white'>JHON SHUSANT </h5><span className='disabled  text-white ms-5 '>CREATIVE DERECTOR</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* April member ship */}
            <div className="container-fluid bg-primary">
                <div className="row">
                    <div className="col-md-9 col-lg-9 col-sm-12">
                        <h1 className="fw-bold text-white my-5 fs-1 april-text">
                            April membership offer <br /> available Now
                        </h1>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <Link to="Services">
                            <Button variant="contained" className="April-button shadow   ">MORE SERVICES</Button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* home : shedule */}
            {/* <div className="container"></div> */}
            {/* home : contact */}
            <div className="container-fluid contact my-5 h-100">
                <div className="row">
                    <div className="col-md-5 col-lg-5 col-sm-12 ">
                        <img src={contact_img} className='img-fluid mt-4 h-100' alt="" />
                    </div>
                    <div className="col-md-7 col-lg-7 col-sm-12">
                        <div className="row">
                            <div className="col-md-2 col-6">
                                <div className="contact-for-line mb-4"></div>
                            </div>
                            <div className="col-md-4 col-6">
                                <h6 className="contact-red-text mb-4">CONTACT FORM</h6>
                            </div>
                        </div>
                        <h1 className="fw-bold my-1 fs-1 CONTACT-text">
                            FEEL FREE TO CONTACT  <br /> WITH US
                        </h1>
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-sm-12"><TextField type='text' id="standard-basic" className='w-100' label="Name" variant="standard" /></div>
                            <div className="col-md-6 col-lg-6 col-sm-12"><TextField type='number' id="standard-basic" label="Phone" className='w-100' variant="standard" /></div>
                            <div className="col-md-6 col-lg-6 col-sm-12"> <TextField
                        
                                className='w-100 text-muted mt-5'
                                id="standard-select-currency-native"
                                select
                                label=""
                                defaultValue="EUR"
                                SelectProps={{
                                    native: true,
                                }}
                                helperText=""
                                variant="standard"
                            >
                                {currencies.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField></div>
                            <div className="col-md-6 col-lg-6 col-sm-12"><TextField type='email' id="standard-basic" label="Email" className='w-100 mt-4' variant="standard" /></div>
                            <div className="col-md-12 col-lg-12 col-sm-12"><TextField
                                className='mt-5 w-100'
                                id="filled-multiline-static"
                                label="Message"
                                multiline
                                rows={4}
                                defaultValue=""
                                variant="standard"
                            /></div>
                            <div className="col-md-5 col-lg-4 col-sm-6">

                                <Button variant='contained' className='contact-message w-75 mt-4 py-3 bg-danger'>MESSAGE</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer */}
            <div className="footer-bg-overlay">
                <div className="container">
                    <div className="footer-padding">
                        <div className="row d-flex juftify-content-between">
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>COMPANY</h4>
                                        <ul className='text-white' style={{
                                            margin: "0px"
                                            , padding: "0px"
                                        }}>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Company</a></li>
                                            <li><a href="#"> Press &amp; Blog</a></li>
                                            <li><a href="#"> Privacy Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-4 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>COMPANY</h4>
                                        <ul className='text-white' style={{
                                            margin: "0px"
                                            , padding: "0px"
                                        }}>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Company</a></li>
                                            <li><a href="#"> Press &amp; Blog</a></li>
                                            <li><a href="#"> Privacy Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-4 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>COMPANY</h4>
                                        <ul className='text-white' style={{
                                            margin: "0px"
                                            , padding: "0px"
                                        }}>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Company</a></li>
                                            <li><a href="#"> Press &amp; Blog</a></li>
                                            <li><a href="#"> Privacy Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-4 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>COMPANY</h4>
                                        <ul className='text-white' style={{
                                            margin: "0px"
                                            , padding: "0px"
                                        }}>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Company</a></li>
                                            <li><a href="#"> Press &amp; Blog</a></li>
                                            <li><a href="#"> Privacy Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-12">
                            <hr className='text-white'/>
                            <div className="footer-copy-right text-center">
                                <p>
                                    Copyright ©2023 All rights reserved | This template is made with <i className="material-symbols-outlined text-danger ">
                                        favorite
                                    </i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}