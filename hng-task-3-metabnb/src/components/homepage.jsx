import React from 'react'

import '../../src/styles/homepage.css'
import '../../src/styles/footer.css'

import Hero from './hero'
import TokensPage from './TokensPage'
import NftPage from './NftPage'
import Metabnb from './metabnb'



const HomePage = () => {
  return (
    <div>
      <Hero/>
      <TokensPage/>
      <NftPage/>
      <Metabnb/>

    </div>
  )
}

export default HomePage