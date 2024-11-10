import React from 'react'
import NewsletterImage from "../../assets/images/newletter.png"
import { CCol, CContainer, CRow } from '@coreui/react'
import EmailInput from '../../common/EmailInput'


const NewsLetter = () => {
    return (
        <div className='py-5'>
            <CContainer>
                <CRow>
                    <CCol md={6}>
                        <img src={NewsletterImage} alt="" className='img-fluid' />
                    </CCol>
                    <CCol md={6} className='px-4 pt-sm-7'>
                        <h2 className='font-tertiary text-white display-5'>
                            Subscribe  And
                            <span className='primary-color'>  get our Updates </span>
                            Every Week
                        </h2>
                        <p className='text-white mt-4'>
                            We have a blog related to NFT so we can share thoughts and routines on our blog which is updated weekly
                        </p>
                        <EmailInput />
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    )
}

export default NewsLetter
