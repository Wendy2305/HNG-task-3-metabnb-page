import logo from '../images/logo.png'

const Navibarr = () => {
    

  return (
    <div className="entire-nav-bar">
      <a className="class-links" href="/"><img className="nav-logo" src={logo} alt="company logo"/></a>
      <a className="class-links text-links" href="/">Home</a>
      <a className="class-links text-links " href="/place ">Place to Stay</a>
      <a className="class-links text-links" href=" ">NFTs</a>
      <a className="class-links text-links" href=" ">Communities</a>
      <button className="nav-button">Connect Wallet</button>
    </div> 
  )
}

export default Navibarr