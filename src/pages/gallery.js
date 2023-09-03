import gallery1 from '../images/gallery/gallery1.png'
import gallery2 from '../images/gallery/gallery2.png'
import gallery3 from '../images/gallery/gallery3.png'
import gallery4 from '../images/gallery/gallery4.png'
import gallery5 from '../images/gallery/gallery5.png'
export default function Gallery() {
    return (
        <>
            <div className="about-official container-fluid bg-black h-100 d-flex align-items-center justify-content-center text-center">
                <h1 className="text-white official-about-heading my-5 mx-5 px-5 py-5 fw-bold fs-1">OUR GALLERY</h1>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src={gallery1} className='img-fluid' alt="" />
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
