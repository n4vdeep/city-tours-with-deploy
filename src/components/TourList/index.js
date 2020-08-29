import React, { Component } from 'react';
import Tour from '../Tour';
import './tourlist.scss';
import { tourData } from '../../tourData';

class TourList extends Component {
  /* 
    Set up state...
    This state object references the 
    tourdata.js file being imported
    above
  */
  state = {
    tours: tourData
  };

  removeTour = id => {
    // console.log(id);
    const { tours } = this.state;
    const sortedTours = tours.filter(tour => tour.id !== id);

    this.setState({
      tours: sortedTours
    });
  };

  render() {
    //console.log(this.state.tours);
    const { tours } = this.state

    return (
      <section className="tour__list">
        {/*
          Loop through tourData...
          each and every time we get an item
          return the information from the item
        */}

        {tours.map(tour => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
        ))}
      </section>
    );
  }
}

export default TourList;