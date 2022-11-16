import React from 'react'

import OpenSea from '../../src/images/OpenSea.png'
import MetaMask from '../../src/images/metamask.svg'
import MBToken from '../../src/images/mbtoken.svg'

const TokensPage = () => {
  return (
    <div className="tokens-page">
            <img className="tokens-logo" src ={MBToken} alt="MBToken logo"/>
            <img className="tokens-logo"src ={MetaMask} alt="Metamask logo"/>
            <img className="tokens-logo"src ={OpenSea} alt="opensea logo"/>
        </div>
  )
}

export default TokensPage