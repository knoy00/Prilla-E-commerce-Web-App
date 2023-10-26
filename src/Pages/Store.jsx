import React from 'react'
import  Hero  from "../Components/Hero/Hero.jsx"
import { Trending } from '../Components/Trending/Trending.jsx'
import { Offers } from '../Components/Offers/Offers.jsx'
import { NewCollections } from '../Components/NewCollections/NewCollections.jsx'
import { Newsletter } from '../Components/Newsletter/Newsletter.jsx'
import { Footer } from '../Components/Footer/Footer.jsx'

export const Store = () => {
  return (
    <div>
        <Hero />
        <Trending />
        <Offers />
        <NewCollections />
        <Newsletter />
        <Footer />
    </div>
  )
}


