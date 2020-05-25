import React, { Component } from 'react';
import Typing from 'react-typing-animation';

const AnimatedTypingComponent = () => (
   <Typing speed={50}>
    <div>
    <h1 className="responsive-headline">Well, hello there!</h1>
      <Typing.Delay ms={2000} />
      <Typing.Backspace count={18}/>
    <h1 className="responsive-headline">I build great apps with React and Angular</h1>
      <Typing.Delay ms={4000} />
      <Typing.Backspace count={17} />
    <h1 className="responsive-headline">Amazon serverless</h1>
      <Typing.Delay ms={4000} />
      <Typing.Backspace count={18} />
    <h1 className="responsive-headline">Node and Flask</h1>
      <Typing.Delay ms={4000} />
      <Typing.Backspace count={20} />
    </div>
   </Typing>
 );

export default class Header extends Component {

  render() {

    let resumeData = this.props.resumeData;

    return (
      <React.Fragment>
      
      <header ref={this.home} id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
              <AnimatedTypingComponent />
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>Thanks for taking a look at my website! I am a {resumeData.role}. {resumeData.roleDescription}
               </h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}