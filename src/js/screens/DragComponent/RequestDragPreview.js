import React, { PropTypes } from 'react';
import Request from './Request';

const styles = {
  display: 'inline-block',
  transform: 'rotate(-7deg)',
  WebkitTransform: 'rotate(-7deg)'
};

const propTypes = {
  request: PropTypes.object
};

const RequestDragPreview = (props) => {
  styles.width = `${props.request.clientWidth || 243}px`;
  styles.height = `${props.request.clientHeight || 243}px`;

  return (
    <div style={styles}>
      <Request item={props.request.item} />
    </div>
  );
};

RequestDragPreview.propTypes = propTypes;

export default RequestDragPreview;
