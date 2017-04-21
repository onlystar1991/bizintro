import React, { Component, PropTypes } from 'react';

class DateSlide extends Component {
  render() {
    return (
      <div className='timeline'>
        <li>
          <div className='circle'></div><div className='line'></div>
          <div className='date'>2017/4/15</div>
        </li>
        <li>
          <div className='circle'></div><div className='line'></div>
          <div className='date'>2017/4/15</div>
        </li>
        <li>
          <div className='circle'></div>
          <div className='date-last'>2017/4/15</div>
        </li>
      </div>
    );
  }
}

export default DateSlide;
