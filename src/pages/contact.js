import contact_img from "../images/Conatct/contact_form.png"
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
export default function Contact() {
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
            <div className="about-official container-fluid bg-black h-100 d-flex align-items-center justify-content-center text-center">
                <h1 className="text-white official-about-heading my-5 mx-5 px-5 py-5 fw-bold fs-1">CONTACT US</h1>
            </div>
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