import React from 'react'
import three_nfts from '../../src/images/nft_pages.png'

const Metabnb = () => {
  return (

    <div className="MetaBNB" >
        <div className="Metabnb-text">
                <h2 id="Metabnb-header">Metabnb NFTs</h2>
                <p id="Metabnb-paragraph">Discover our NFT gift cards collection. Loyal <br/>
                customers gets amazing gift cards which are <br/>
                traded as NFTs. These NFTs gives our cutomer <br/>
                access to loads of our exclusive services.</p>
                <button id="Metabnb-button">Learn More</button>
            </div>

            <img id = 'metabnb-img' src={three_nfts} alt="Three NFTs together"/>
    </div>
  )
}

export default Metabnb