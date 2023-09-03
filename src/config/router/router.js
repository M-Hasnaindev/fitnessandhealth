import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/home";
import About from "../../pages/about";
import Services from "../../pages/services";
import Gallery from "../../pages/gallery";
import Contact from "../../pages/contact";
import Button from '@mui/material/Button';
import Image from "../../pages/imageComponent";

export default function AppRouter() {
    return (
        <>
            <Router>
                <nav className="navbar navbar-expand-lg bg-black sticky-top">
                    <div className="container">
                        <Link className="navbar-brand" to="#"><Image /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5 px-3 list-nav">
                                <li className="nav-item">
                                    <Link className="nav-link px-3" to='/'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link px-3" to='About'>About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link px-3" to='Services'>Service</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link px-3" to='Contact'>Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link px-3" to='Gallery'>Gallery</Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                    <Button variant="contained" className="nav-button"  >become  a  member</Button>  
                            </form>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </Router>
        </>
    )
}

