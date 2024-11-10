import React from 'react'
import SellNft from './components/SellNft'
import PopularArticle from './components/PopularArticle'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import NewsLetter from './components/NewsLetter'
import UniqueArtWork from './components/UniqueArtWork'

const App = () => {
  return (
    <BrowserRouter className=''>
      <UniqueArtWork />
      <SellNft />
      <PopularArticle />
      <NewsLetter />
      <Footer />
    </BrowserRouter>
  )
}

export default App
