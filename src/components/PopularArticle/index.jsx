import React from 'react'
import { CCol, CContainer, CRow } from '@coreui/react'
import ArticleCard from '../../common/ArticleCard'
import Article1 from "../../assets/images/article-images/article-1.png"
import Article2 from "../../assets/images/article-images/article-2.png"
import Article3 from "../../assets/images/article-images/article-3.png"
import Article4 from "../../assets/images/article-images/article-4.png"
import Article5 from "../../assets/images/article-images/article-5.png"
import Avatar1 from "../../assets/images/avatar/avatar-1.png"

const PopularArticle = () => {
    return (
        <CContainer className='mt-14 mb-5'>
            <div className='w-100 d-flex justify-content-between align-items-center'>
                <h3 className='text-white font-tertiary display-6 '>Popular <span className='primary-color'>Artist</span>  <br /> on the Week</h3>
                <button className='btn primary-bg-color text-white px-5'>See All</button>
            </div>


            <CRow className='mt-4'>
                <CCol md={8}>
                    <CRow className='gy-3'>
                        <CCol md={5}>
                            <ArticleCard image={Article1} avatarimage={Avatar1} />
                        </CCol>
                        <CCol md={7}>
                            <ArticleCard image={Article2} avatarimage={Avatar1} />
                        </CCol>
                        <CCol md={6}>
                            <ArticleCard image={Article3} avatarimage={Avatar1} />
                        </CCol>
                        <CCol md={6}>
                            <ArticleCard image={Article4} avatarimage={Avatar1} />
                        </CCol>
                    </CRow>
                </CCol>

                <CCol md={4}>
                    <ArticleCard image={Article5} height={'100%'} avatarimage={Avatar1} />
                </CCol>
            </CRow>
        </CContainer>
    )
}

export default PopularArticle
