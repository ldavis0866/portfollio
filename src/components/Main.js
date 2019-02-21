import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import project from '../images/project.png'
import project2 from '../images/project2.png'
import photo from '../images/photo.jpg'
import picIntro from '../images/intro-pic.png'
import collpic from '../images/collpic.jpg'
class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={picIntro} alt="" /></span>
          <p>Hello, my name is  Lonnie. I am a fullstack web developer living in the Dallas metroplex. I love working with Javascript using React and Node, but picking up a new language is not a problem. I'm comfortable developing on the frontend or backend. I would love to work with you creating awesome projects.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2><br /><br /><br />
          <h2>Project 1</h2>
          <span className="image main"><img src={project} alt="" /></span>
          <p>
          Adventure Tracker (12/2018)<br />     
          Web application that allows a user to map out an outdoors adventure trip and share with others to monitor progress using Facebook OAuth, Google Maps API and Stripe API<br />
          Five week project timeline with four team members using Agile Development<br />
          Contributed client and server implementation of Stripe payment API, client deployment and maintenance, and application styling and responsiveness using React styled-components<br />
          Tech stack | React.js | Apollo client | GraphQL Yoga | Prisma |<br />
          <a href="https://adventure-tracker-frontend.netlify.com"> Client</a><br />
          <a href="https://github.com/Lambda-School-Labs/Labs8-AdventureTracker"> GitHub</a>
          </p>
          <h2>Project 2</h2>
          <span className="image main"><img src={project2} alt="" /></span>
          <br />
          <br />
          <p>
          Game of Life (10/2018)<br />     
          A client-side zero-player game, its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.<br />
          Tech | React.js |<br />
          <a href="https://react-game-of-life.netlify.com">Client</a><br />
          <a href="https://github.com/ldavis0866/Conways-Life">GitHub</a>
          </p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={collpic} alt="" /></span>
          <p>I'm passionate about collaborating with others making software that will empower people and change the world. In my previous career I worked as a Critical Care Paramedic collaborating with teams of dedicated health care professionals to provide service to those in need. I'm ready to bring that passion and dedication to your team so we can do awesome things.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <p>lonnie.r.davis.jr@gmail.com</p><br />
          {/* <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form> */}
          <ul className="icons">
            {/* <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li> */}
            <li><a href="https://www.linkedin.com/in/lonnie-r-davis/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="https://github.com/ldavis0866" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main