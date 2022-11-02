import {Component} from 'react'
import './index.css'

class Navbar extends Component {
  state = {activeTabId: 'Home'}

  onHomeTabBtnClicked = () => {
    this.setState({activeTabId: 'Home'})
  }

  onContactUsTabBtnClicked = () => {
    this.setState({activeTabId: 'Contact Us'})
  }

  render() {
    const {activeTabId} = this.state
    console.log(activeTabId === 'Home')
    const homeActiveTab = activeTabId === 'Home' ? 'activeTabStyling' : ''
    const contactActiveTab =
      activeTabId === 'Contact Us' ? 'activeTabStyling' : ''

    return (
      <div className="nav-bg-container">
        <h1 className="nav-heading">WEATHER PREDICTOR</h1>
        <div className="nav-home-contactus-container">
          <button
            type="button"
            className={`nav-home-contactus ${homeActiveTab}`}
            onClick={this.onHomeTabBtnClicked}
          >
            Home
          </button>
          <button
            type="button"
            className={`nav-home-contactus ${contactActiveTab}`}
            onClick={this.onContactUsTabBtnClicked}
          >
            Contact Us
          </button>
        </div>
      </div>
    )
  }
}
export default Navbar
