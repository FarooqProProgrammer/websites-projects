import { CContainer, CListGroup, CListGroupItem } from '@coreui/react'
import React from 'react'
import Icon from '../../common/Icon'
import { FaFacebookF, FaTelegramPlane, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <CContainer className='py-5'>
            <>
                {/* Footer */}
                <footer className="text-center text-lg-start">
                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-3 g-2"> {/* Adjusted gap using g-2 */}
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <p className='text-white'>
                                        Discover NFTs by category, track the latest drop, and follow the collections you love. Enjoy it!
                                    </p>
                                    <div className='d-flex justify-content-start align-items-center gap-2'>
                                        <Icon>
                                            <FaFacebookF color='#000' />
                                        </Icon>
                                        <Icon>
                                            <FaTelegramPlane color='#000' />
                                        </Icon>
                                        <Icon>
                                            <FaTwitter color='#000' />
                                        </Icon>
                                        <Icon>
                                            <FaLinkedin color='#000' />
                                        </Icon>
                                    </div>
                                </div>

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4  text-white">Explore</h6>
                                    <CListGroup className='bg-transparent ps-0'>
                                        <CListGroupItem className='bg-transparent border-0 ps-0'>
                                            <Link to="#!">Art Sign in</Link>
                                        </CListGroupItem>
                                        <CListGroupItem className='bg-transparent border-0 ps-0'>
                                            <Link to="#!">Collectibles</Link>
                                        </CListGroupItem>
                                        <CListGroupItem className='bg-transparent border-0 ps-0'>
                                            <Link to="#!">Domain Name</Link>
                                        </CListGroupItem>
                                        <CListGroupItem className='bg-transparent border-0 ps-0'>
                                            <Link to="#!">Utility</Link>
                                        </CListGroupItem>
                                    </CListGroup>
                                </div>

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4  text-white">Statistic</h6>
                                    <CListGroup className='bg-transparent ps-0'>
                                        <CListGroupItem className='bg-transparent border-0 ps-0'>
                                            <Link to="#!">Ranking</Link>
                                        </CListGroupItem>
                                        <CListGroupItem className='bg-transparent border-0 ps-0'>
                                            <Link to="#!">Collectibles</Link>
                                        </CListGroupItem>
                                        <CListGroupItem className='bg-transparent border-0 ps-0'>
                                            <Link to="#!">Activity</Link>
                                        </CListGroupItem>
                                    </CListGroup>
                                </div>

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4  text-white">Company</h6>
                                    <CListGroup className='bg-transparent ps-0'>
                                        <CListGroupItem className='bg-transparent border-0 ps-0'>
                                            <Link to="#!">About Us</Link>
                                        </CListGroupItem>
                                        <CListGroupItem className='bg-transparent border-0 ps-0'>
                                            <Link to="#!">Career</Link>
                                        </CListGroupItem>
                                        <CListGroupItem className='bg-transparent border-0 ps-0'>
                                            <Link to="#!">Support</Link>
                                        </CListGroupItem>
                                        <CListGroupItem className='bg-transparent border-0 ps-0'>
                                            <Link to="#!">Partners</Link>
                                        </CListGroupItem>
                                    </CListGroup>
                                </div>

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4  text-white">Resources</h6>
                                    <CListGroup className='bg-transparent ps-0'>
                                        <CListGroupItem className='bg-transparent border-0 ps-0'>
                                            <Link to="#!">Help Center</Link>
                                        </CListGroupItem>
                                        <CListGroupItem className='bg-transparent border-0 ps-0'>
                                            <Link to="#!">Platform Status</Link>
                                        </CListGroupItem>
                                        <CListGroupItem className='bg-transparent border-0 ps-0'>
                                            <Link to="#!">Blog</Link>
                                        </CListGroupItem>
                                    </CListGroup>
                                </div>
                            </div>
                        </div>
                    </section>
                </footer>
            </>
        </CContainer>
    );
}

export default Footer;
