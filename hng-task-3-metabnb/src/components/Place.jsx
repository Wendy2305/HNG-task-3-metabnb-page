import React from 'react'
import image1 from '../../src/images/NFTS/Desert_king.png'
import image2 from '../../src/images/NFTS/Image_2.png'
import image3 from '../../src/images/NFTS/Image_3.png'
import image4 from '../../src/images/NFTS/Image_4.png'
import image5 from '../../src/images/NFTS/Image_5.png'
import image6 from '../../src/images/NFTS/Image_6.png'
import image7 from '../../src/images/NFTS/Image_7.png'
import image8 from '../../src/images/NFTS/Image_8.png'
import image9 from '../../src/images/NFTS/Image_9.png'
import image10 from '../../src/images/NFTS/Image_10.png'
import image11 from '../../src/images/NFTS/Image_11.png'
import image12 from '../../src/images/NFTS/Image_12.png'
import image13 from '../../src/images/NFTS/Image_13.png'
import image14 from '../../src/images/NFTS/Image_14.png'
import image15 from '../../src/images/NFTS/Image_15.png'
import image16 from '../../src/images/NFTS/Image_16.png'

import location from '../../src/images/NFTS/location_button.png'


import '../styles/homepage.css'
const Place = () => {
  return (
    <div className="nft-page" >
        
            <div className='nft-rows'
                  style={{
                    paddingTop: '100px',
                    marginLeft: '80px',
                    marginRight: '0px',
                    marginBottom: '40px',
                  }}>

                <div className="nft-categories" style={{
                                      display: 'flex',
                                      flexDirection: 'row',
                                      fontSize: '20px',
                                      justifyContent: 'space-between',
                                      marginRight: '60px',
                                      marginLeft: '10px'
                                    }}>
                  <p>Restaurant</p>
                  <p>Cottage</p>
                  <p>Castle</p>
                  <p>Fantasy city</p>
                  <p>Beach</p>
                  <p>Cabins</p>
                  <p>Off-grid</p>
                  <p>Farm</p>
                    <img className="nft-image" style={{paddingLeft: '10px', paddingBottom:'10px'}} src={location} alt="an NFT" />
                  
                </div>



                <img className="nft-image" style={{paddingLeft: '10px', paddingBottom:'10px'}} src={image5} alt="an NFT" />
                <img className="nft-image" style={{paddingLeft: '10px', paddingBottom:'10px'}} src={image6} alt="an NFT" />
                <img className="nft-image" style={{paddingLeft: '10px', paddingBottom:'10px'}} src={image7} alt="an NFT" />
                <img className="nft-image" style={{paddingLeft: '10px', paddingBottom:'10px'}} src={image8} alt="an NFT" />
                
                <img className="nft-image" style={{paddingLeft: '10px', paddingBottom:'10px'}} src={image1} alt="an NFT" />
                <img className="nft-image" style={{paddingLeft: '10px', paddingBottom:'10px'}} src={image2} alt="an NFT" />
                <img className="nft-image" style={{paddingLeft: '10px', paddingBottom:'10px'}} src={image3} alt="an NFT" />
                <img className="nft-image" style={{paddingLeft: '10px', paddingBottom:'10px'}} src={image4} alt="an NFT" /> 

                <img className="nft-image" style={{paddingLeft: '10px', paddingBottom:'10px'}} src={image9} alt="an NFT" />
                <img className="nft-image" style={{paddingLeft: '10px', paddingBottom:'10px'}} src={image10} alt="an NFT" />
                <img className="nft-image" style={{paddingLeft: '10px', paddingBottom:'10px'}} src={image11} alt="an NFT" />
                <img className="nft-image" style={{paddingLeft: '10px', paddingBottom:'10px'}} src={image12} alt="an NFT" />

                <img className="nft-image" style={{paddingLeft: '10px', paddingBottom:'10px'}} src={image13} alt="an NFT" />
                <img className="nft-image" style={{paddingLeft: '10px', paddingBottom:'10px'}} src={image14} alt="an NFT" />
                <img className="nft-image" style={{paddingLeft: '10px', paddingBottom:'10px'}} src={image15} alt="an NFT" />
                <img className="nft-image" style={{paddingLeft: '10px', paddingBottom:'10px'}} src={image16} alt="an NFT" />          
                
            </div>
    </div>
  )
}

export default Place