import {Component} from 'react'
import {Link} from 'react-router-dom'
import {ImMenu2} from 'react-icons/im'
import './index.css'

class Header extends Component {
  state = {showOptions: false}

  mobileView = () => {
    const {showOptions} = this.state

    return showOptions ? (
      <div className="mobile-options-container">
        <Link to="/" className="link-header">
          <p className="options">Home</p>
        </Link>
        <hr />
        <Link to="/about" className="link-header">
          <p className="options">About</p>
        </Link>
        <hr />
        <Link to="/vaccination" className="link-header">
          <p className="options">Vaccination</p>
        </Link>
      </div>
    ) : null
  }

  showMenu = () => {
    this.setState(lastView => ({showOptions: !lastView.showOptions}))
  }

  render() {
    return (
      <>
        <nav className="nav-bar-container">
          <Link to="/" className="link-header">
            <h1 className="main-logo">
              COVID19<span className="main-logo-span">INDIA</span>
            </h1>
          </Link>
          <ul className="options-list">
            <Link to="/" className="link-header">
              <li className="options">Home</li>
            </Link>
            <Link to="/about" className="link-header">
              <li className="options">About</li>
            </Link>
            <Link to="/vaccination" className="link-header">
              <li className="options">Vaccination</li>
            </Link>
          </ul>
          <div className="mobile-view-container">
            <button
              type="button"
              className="menu-button"
              onClick={this.showMenu}
            >
              <ImMenu2 className="menu-icon" />
            </button>
          </div>
        </nav>
        <div>{this.mobileView()}</div>
      </>
    )
  }
}

export default Header
