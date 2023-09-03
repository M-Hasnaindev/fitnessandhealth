import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
export default function Services() {
    return (
        <>
            <div className="about-official container-fluid bg-black h-100 d-flex align-items-center justify-content-center text-center">
                <h1 className="text-white official-about-heading my-5 mx-5 px-5 py-5 fw-bold fs-1">OUR SERVICES</h1>
            </div>
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
                            <hr className='text-white' />
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
