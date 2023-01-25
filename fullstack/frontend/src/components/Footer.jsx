import React from 'react'
import "../components/footer.scss"
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className='email'>
              <input type="text" placeholder='Your email' />
              <button>Send</button>
            </div>
          </div>
          <div className="footer_list col-3">
            <ul>
              <li><h4>About</h4></li>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Our Partners</a></li>
              <li><a href="/">Our Services</a></li>
              </ul>
          </div>
          <div className="footer_list col-3">
          <ul>
              <li><h4>Contact</h4></li>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">FAQ Page</a></li>
              <li><a href="/">About Me</a></li>
              </ul>
          </div>
          <div className="footer_list col-3">
            <h4>FOLLOW US</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
