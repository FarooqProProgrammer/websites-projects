import { CCol, CContainer, CRow } from '@coreui/react'
import NFT1 from "../../assets/images/nft-1.png"
import NFT2 from "../../assets/images/nft-2.png"
import "./index.css"


const SellNft = () => {
    return (
        <CContainer className='h-100'>
            <CRow className='py-5 h-100 gx-5'>
                <CCol lg={6} className='px-6 pt-8 pe-8'>
                    <h3 className='text-white font-tertiary display-6'>CREATE AND SELL YOUR <span className='primary-color'>  NFT</span></h3>
                    <p className='text-white'>Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!</p>
                    <div className='d-flex align-items-center gap-3'>
                        <button className='btn primary-bg-color text-white'>Create NFT</button>
                        <button className='btn  text-white'>Learn More</button>
                    </div>
                </CCol>
                <CCol lg={6} className='position-relative nft-image'>
                    <img src={NFT1} className='img-1' />
                    <img src={NFT2} className='img-2' />
                </CCol>
            </CRow>
        </CContainer>
    )
}

export default SellNft
