import React, { Component } from 'react';
import titleData from './../data/title';

const randomNum = Math.floor(Math.random() * 7);

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = { title: titleData };
  }

  render() {
    return (
      <section>
        <img
          src={this.state.title[randomNum].imageSrc}
          alt={this.state.title[randomNum].name}
          className='title-image'
        />
      </section>
    );
  }
}

export default Title;
