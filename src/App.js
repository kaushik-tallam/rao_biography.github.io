import React, { Component } from 'react';
import Header from './Header';
import Timeline from './Timeline';
import data from './data.json';

export default class App extends Component {

  render() {
    const { title, name, events, afternote, missyou } = data;
    return (
      <div>
        <Header
          primaryHeading={ title }
          secondaryHeading={ name }
        />
        <Timeline data={ events } />
        <div className="header ending-note">
          <blockquote>
            { afternote }
          </blockquote>
          <div className="text-center">
            <p> { missyou }</p>
          </div>
        </div>
      </div>
    );
  }

}
