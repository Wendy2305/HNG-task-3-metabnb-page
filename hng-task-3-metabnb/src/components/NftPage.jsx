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
    <div className="nft-page" >
        <h2 className="NFT-header" 
        style={{
          fontFamily: "Red Rose",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "48px",
          lineHeight: "60px",
          textAlign: "center",
        }}>
            Inspiration for your next Adventure
        </h2>
            <div className='nft-rows'
                  style={{
                    marginLeft: '80px',
                    marginRight: '0px',
                    marginBottom: '40px',
                  }}>
          
                <img className="nft-image" style={{paddingLeft: '10px', paddingBottom:'10px'}} src={image1} alt="an NFT" />
                <img className="nft-image" style={{paddingLeft: '10px', paddingBottom:'10px'}} src={image2} alt="an NFT" />
                <img className="nft-image" style={{paddingLeft: '10px', paddingBottom:'10px'}} src={image3} alt="an NFT" />
                <img className="nft-image" style={{paddingLeft: '10px', paddingBottom:'10px'}} src={image4} alt="an NFT" />
            

                <img className="nft-image" style={{paddingLeft: '10px', paddingBottom:'10px'}} src={image5} alt="an NFT" />
                <img className="nft-image" style={{paddingLeft: '10px', paddingBottom:'10px'}} src={image6} alt="an NFT" />
                <img className="nft-image" style={{paddingLeft: '10px', paddingBottom:'10px'}} src={image7} alt="an NFT" />
                <img className="nft-image" style={{paddingLeft: '10px', paddingBottom:'10px'}} src={image8} alt="an NFT" />
            </div>
    </div>
  )
}

export default NftPage;