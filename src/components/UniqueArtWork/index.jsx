import { CContainer } from '@coreui/react'
import React from 'react'
import styled from 'styled-components'
import Unique1 from "../../assets/images/unique/unique-1.png"
import { MdOutlineAccessTime } from "react-icons/md";
import Button from '../../common/Button';


const UniqueItemCard = styled.div`
    border-top: 1px solid #d6ef0e;
    border-radius: 28px;
    padding: 20px;
    width: 100%;
    background: #131e3a;

    img { 
        width: 100%;
        height: 340px;
        object-fit: cover;
        border-radius: 20px;
    }

    h6 { 
        font-size: 24px;
    }

    h5 { 
        font-size: 14px ;
        color: #838382;
    }

`


const UniqueArtWork = () => {
    return (
        <CContainer className='py-5'>
            <div className='w-100 d-flex justify-content-between align-items-center'>
                <h3 className='text-white font-tertiary display-6 '>
                    Amazing and Super <br /> Unique Art of this Work
                </h3>
                <button className='btn primary-bg-color text-white px-5'>See All</button>
            </div>

            <div className="row mt-4">
                {
                    [...Array(3)].map((item, index) => {
                        return (
                            <div className="col-md-4" key={index}>
                                <UniqueItemCard>
                                    <img src={Unique1} alt="" srcset="" />
                                    <div className='d-flex mt-2 justify-content-between align-items-center'>
                                        <h6 className='text-white'>Charge, Qi tiao yu</h6>
                                        <p className='text-white mb-0'>490ETH</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='d-flex flex-column justify-content-start align-items-start'>
                                            <h5 className='font-thin mb-0'>Ending in</h5>
                                            <div className='d-flex mt-2 justify-content-start align-items-center gap-2'>
                                                <MdOutlineAccessTime color='white' size={23} />
                                                <h5 className='text-white mb-0'>03:24:56</h5>
                                            </div>
                                        </div>
                                        <Button variant='outline'>Place A Bid</Button>
                                    </div>
                                </UniqueItemCard>
                            </div>
                        )
                    })
                }

            </div>


        </CContainer>
    )
}

export default UniqueArtWork
