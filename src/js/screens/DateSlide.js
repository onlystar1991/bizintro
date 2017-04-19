import React, { Component, PropTypes } from 'react';

class DateSlide extends Component {
  render() {
    return (
      <div className='timeline'>
        <li>
          <div className='circle'></div><div className='line'></div>
          <span>2017/4/15</span>
        </li>
        <li>
          <div className='circle'></div><div className='line'></div>
          <span>2017/4/15</span>
        </li>
        <li>
          <div className='circle'></div>
          <span>2017/4/15</span>
        </li>
      </div>
    );
  }
}

export default DateSlide;
