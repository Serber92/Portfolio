import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <h1>Check Out Some of My Works.</h1>
        <div className="twelve columns collapsed">
          <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item, i)=>{
              return(
                <div className="columns portfolio-item" key={i}>
                  <div className="item-wrap">
                    <a href={`${item.imgurl}`}>
                      <img src={`${item.imgurl}`} className="item-img" alt='portfolio_screenshot'/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}