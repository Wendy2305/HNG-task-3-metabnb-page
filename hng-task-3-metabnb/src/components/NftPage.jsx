import React from 'react'

import image1 from '../../src/images/NFTS/Desert_king.png'
import image2 from '../../src/images/NFTS/Image_2.png'
import image3 from '../../src/images/NFTS/Image_3.png'
import image4 from '../../src/images/NFTS/Image_4.png'
import image5 from '../../src/images/NFTS/Image_5.png'
import image6 from '../../src/images/NFTS/Image_6.png'
import image7 from '../../src/images/NFTS/Image_7.png'
import image8 from '../../src/images/NFTS/Image_8.png'


const NftPage = () => {
  return (
    <div className="nft-page">
        <h2 className="NFT-header">Inspiration for your next Adventure</h2>
            <div className='nft-rows'>
          
                <img className="nft-image" src={image1} alt="an NFT" />
                <img className="nft-image" src={image2} alt="an NFT" />
                <img className="nft-image" src={image3} alt="an NFT" />
                <img className="nft-image" src={image4} alt="an NFT" />
            

                <img className="nft-image" src={image5} alt="an NFT" />
                <img className="nft-image" src={image6} alt="an NFT" />
                <img className="nft-image"src={image7} alt="an NFT" />
                <img className="nft-image" src={image8} alt="an NFT" />
            </div>
    </div>
  )
}

export default NftPage;