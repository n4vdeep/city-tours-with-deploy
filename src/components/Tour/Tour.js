import React, { Component } from 'react';
import './tour.scss'

class Tour extends Component {
  state = {
    /* 
      setup showing tour information
      by having it set to not show at first.
      (false)
    */

    showInfo: false
  }

  /* 
    set up the method that will
    be responsible for toggling showInfo on and off.

    Use this method on the span tag so when user clicks
    the down arrow icon the info is shown or not shown.
  */
  toggleShowInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  }

  render() {
    // console.log(this.props)
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props
    return (
      <article className="tour">
        <div className="img__container">
          <img src={img} alt="city tour" />
          <span className="close__btn" onClick={() => removeTour(id)}>
            <i className="fas fa-window-close" />
          </span>
        </div>

        <div className="tour__info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info {" "}
            <span onClick={this.toggleShowInfo}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}

export default Tour;