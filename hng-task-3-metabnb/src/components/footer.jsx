import React from 'react'
import white_logo from '../../src/images/White_metabnb_logo.svg'
import ig_logo from '../../src/images/instagram_logo.png'
import facebook_logo from '../../src/images/facebook_logo.png'
import twitter_logo from '../../src/images/twitter_logo.png'
import trademark from '../../src/images/trademark.png'

import '../../src/styles/footer.css'

const Footer = () => {
  return (
    <div className="footer-body">
        <div className="entire-footer">
            <div>
                <img className="peep" src={white_logo} alt="Metabnb logo in white"/>
                <br/>

                <div id="footer-sm-logos">
                    <img className='footer-sm-logo' src={facebook_logo} alt="Facebook logo"/>
                    <img className='footer-sm-logo' src={ig_logo} alt="Instagram logo"/>
                    <img className='footer-sm-logo' src={twitter_logo} alt="Twitter logo"/>
                </div>

                <br/>
                <img src={trademark} alt="trademark"/>
            </div>

            <div>
                <h5>Community</h5>
                <p>NFT</p>
                <p>Tokens</p>
                <p>Landlords</p>
                <p>Discord</p>
            </div>

            <div>
                <h5>Places</h5>
                <p>Castles</p>
                <p>Farms</p>
                <p>Beach</p>
                <p>Learn more</p>
            </div>

            <div>
                <h5>About us</h5>
                <p>Road map</p>
                <p>Creators</p>
                <p>Career</p>
                <p>Contact us</p>
            </div>
        </div>
    </div>
  )
}

export default Footer