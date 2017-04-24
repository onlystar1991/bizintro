import React, { Component, PropTypes } from 'react';
import Button from 'grommet/components/Button';
import LinkNextIcon from 'grommet/components/icons/base/LinkNext';
import LinkPreviousIcon from 'grommet/components/icons/base/LinkPrevious';

import moment from 'moment';
import createDateObjects from './createDateObjects';
class Calendar extends Component {

  render() {
    const { date, weekOffset, renderDay, onNextMonth, onPrevMonth, onPickDate } = this.props;
    return (
      <div className='Calendar'>
        <div className='Calendar-header'>

          <Button icon={<LinkPreviousIcon />} onClick={onPrevMonth} />
          <div className='Calendar-header-currentDate'>{date.locale('en').format('MMMM YYYY')}</div>
          <Button icon={<LinkNextIcon />} onClick={onNextMonth} />
        </div>
        <div className='Calendar-grid'>
          <div className="Calendar-grid-item">Mon</div>
          <div className="Calendar-grid-item">Tue</div>
          <div className="Calendar-grid-item">Wed</div>
          <div className="Calendar-grid-item">Thu</div>
          <div className="Calendar-grid-item">Fri</div>
          <div className="Calendar-grid-item">Sat</div>
          <div className="Calendar-grid-item">Sun</div>
          {createDateObjects(date, weekOffset).map((day, i) =>
            <div
              key={`day-${i}`}
              className={`Calendar-grid-item ${day.classNames || ''} ${day.day.isSame(moment(), "date") ? 'active' : ''}`}
              onClick={(e) => onPickDate(day.day)}
            >
              {renderDay(day.day)}
            </div>
          )}
        </div>
      </div>
    );
  }
}

Calendar.propTypes = {
  weekOffset: PropTypes.number.isRequired,
  date: PropTypes.object.isRequired,
  renderDay: PropTypes.func,
  onNextMonth: PropTypes.func.isRequired,
  onPrevMonth: PropTypes.func.isRequired,
  onPickDate: PropTypes.func
}
Calendar.defaultProps = { 
  weekOffset: 1,
  renderDay: day => day.format('D')
};
export default Calendar;