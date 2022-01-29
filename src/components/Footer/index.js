import {FiInstagram} from 'react-icons/fi'
import {VscGithubAlt} from 'react-icons/vsc'
import {FaTwitter} from 'react-icons/fa'
import './index.css'

const Footer = () => (
  <div className="footer-container">
    <h1 className="main-logo">
      COVID19<span className="main-logo-span">INDIA</span>
    </h1>
    <p className="footer-content">
      We stand with everyone fighting on the front lines
    </p>
    <div className="footer-icon-container">
      <a
        href="https://github.com/gaddamsairam/COVID-19-Dasnboard.git"
        className="link-footer"
        target="__break"
      >
        <VscGithubAlt className="icon" />
      </a>
      <a
        href="https://www.instagram.com/"
        className="link-footer"
        target="__break"
      >
        <FiInstagram className="icon" />
      </a>
      <a href="https://twitter.com/" className="link-footer" target="__break">
        <FaTwitter className="icon" />
      </a>
    </div>
  </div>
)

export default Footer
