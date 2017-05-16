import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import MoreIcon from 'grommet/components/icons/base/More';
import LinkDownIcon from 'grommet/components/icons/base/LinkDown';
import Status from 'grommet/components/icons/Status';

import { ItemTypes } from './Constants';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import Request from './Request';

function getStyles(isDragging) {
  return {
    display: isDragging ? 0 : 1
  };
}

const requestSource = {
  beginDrag(props, monitor, component) {
    // dispatch to redux store that drag is started
    const { item, x, y } = props;
    const { id, title } = item;
    const { clientWidth, clientHeight } = findDOMNode(component);

    return { id, title, item, x, y, clientWidth, clientHeight };
  },
  endDrag(props, monitor) {
    document.getElementById(monitor.getItem().id).style.display = 'block';
    props.stopScrolling();
  },
  isDragging(props, monitor) {
    const isDragging = props.item && props.item.id === monitor.getItem().id;
    return isDragging;
  }
};

function collect(connectDragSource, monitor) {
  return {
    connectDragSource: connectDragSource.dragSource(),
    connectDragPreview: connectDragSource.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

@DragSource(ItemTypes.REQUEST, requestSource, collect)
class RequestComponent extends Component {  
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.connectDragPreview(getEmptyImage(), {
      captureDraggingState: true
    });
  }
  render() {
    const { isDragging, connectDragSource, item } = this.props;
    return connectDragSource(
      <div>
        <Request style={getStyles(isDragging)} item={item} />
      </div>
    );
  }
}

RequestComponent.propTypes = {
  dispatch: PropTypes.func,
  error: PropTypes.object,
  tasks: PropTypes.arrayOf(PropTypes.object),
  isDragging: PropTypes.bool,
  connectDragSource: PropTypes.func,
  connectDragPreview: PropTypes.func,
  item: PropTypes.object,
  x: PropTypes.number.isRequired,
  y: PropTypes.number,
  stopScrolling: PropTypes.func
};

export default RequestComponent;