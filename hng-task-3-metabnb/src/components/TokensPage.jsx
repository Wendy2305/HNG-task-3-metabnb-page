import React from 'react'

import OpenSea from '../../src/images/OpenSea.png'
import MetaMask from '../../src/images/metamask.svg'
import MBToken from '../../src/images/mbtoken.svg'

const TokensPage = () => {
  return (
    <div className="tokens-page">
            <img src ={MBToken} alt="MBToken logo"/>
            <img src ={MetaMask} alt="Metamask logo"/>
            <img src ={OpenSea} alt="opensea logo"/>
        </div>
  )
}

export default TokensPage