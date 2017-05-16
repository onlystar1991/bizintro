import React, { Component, PropTypes } from 'react';
import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';
import { findDOMNode } from 'react-dom';
import RequestComponent from './DraggableRequest';


function getPlaceholderIndex(y, scrollY) {
  // shift placeholder if y position more than card height / 2
  const yPos = y - 100 + scrollY;
  let placeholderIndex;
  if (yPos < 200 / 2) {
    placeholderIndex = -1; // place at the start
  } else {
    placeholderIndex = Math.floor((yPos - 200 / 2) / (200 + 20));
  }
  return placeholderIndex;
}


const specs = {
  drop(props, monitor, component) {
    document.getElementById(monitor.getItem().id).style.display = 'block';
    const { placeholderIndex } = component.state;
    const lastX = monitor.getItem().x;
    const lastY = monitor.getItem().y;
    const nextX = props.x;
    let nextY = placeholderIndex;

    if (lastY > nextY) { // move top
      nextY += 1;
    } else if (lastX !== nextX) { // insert into another list
      nextY += 1;
    }

    if (lastX === nextX && lastY === nextY) { // if position equel
      return;
    }
    props.moveRequest(lastX, lastY, nextX, nextY);
    props.openSideMenu();

  },
  hover(props, monitor, component) {
    // defines where placeholder is rendered
    const placeholderIndex = getPlaceholderIndex(
      monitor.getClientOffset().y,
      findDOMNode(component).scrollTop
    );

    // horizontal scroll
    if (!props.isScrolling) {
      if (window.innerWidth - monitor.getClientOffset().x < 200) {
        props.startScrolling('toRight');
      } else if (monitor.getClientOffset().x < 200) {
        props.startScrolling('toLeft');
      }
    } else {
      if (window.innerWidth - monitor.getClientOffset().x > 200 &&
          monitor.getClientOffset().x > 200
      ) {
        props.stopScrolling();
      }
    }

    // IMPORTANT!
    // HACK! Since there is an open bug in react-dnd, making it impossible
    // to get the current client offset through the collect function as the
    // user moves the mouse, we do this awful hack and set the state (!!)
    // on the component from here outside the component.
    // https://github.com/gaearon/react-dnd/issues/179
    component.setState({ placeholderIndex });

    // when drag begins, we hide the card and only display cardDragPreview
    const item = monitor.getItem();
    document.getElementById(item.id).style.display = 'none';
  }
};


@DropTarget(ItemTypes.REQUEST, specs, (connectDragSource, monitor) => ({
  connectDropTarget: connectDragSource.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
  item: monitor.getItem()
}))

export default class Requests extends Component {

  constructor(props) {
    super(props);
    this.state = {
      placeholderIndex: undefined,
      isScrolling: false,
    };
  }
  

  render() {
    console.log('============', this.props);
    const { connectDropTarget, x, requests, isOver, canDrop } = this.props;
    const { placeholderIndex } = this.state;

    let isPlaceHold = false;
    let requestList = [];
    requests.forEach((item, i) => {
      if (isOver && canDrop) {
        isPlaceHold = false;
        if (i === 0 && placeholderIndex === -1) {
          requestList.push(<div key="placeholder" className="main-content-item placeholder" />);
        } else if (placeholderIndex > i) {
          isPlaceHold = true;
        }
      }
      if (item !== undefined) {
        requestList.push(
          <RequestComponent x={x} y={i}
            item={item}
            key={item.id}
            stopScrolling={this.props.stopScrolling}
          />
        );
      }
      if (isOver && canDrop && placeholderIndex === i) {
        requestList.push(<div key="placeholder" className="main-content-item placeholder" />);
      }
    });

    // if placeholder index is greater than array.length, display placeholder as last
    if (isPlaceHold) {
      requestList.push(<div key="placeholder" className="main-content-item placeholder" />);
    }

    // if there is no items in cards currently, display a placeholder anyway
    if (isOver && canDrop && requests.length === 0) {
      requestList.push(<div key="placeholder" className="main-content-item placeholder" />);
    }

    return connectDropTarget(
      <div className={ requestList.length > 0 ? 'have-child' : 'no-child'} style={{ height: '100%' }}>
        {requestList}
      </div>
    );
  }
}


Requests.propTypes = {
  connectDropTarget: PropTypes.func,
  moveRequest: PropTypes.func.isRequired,
  openSideMenu: PropTypes.func.isRequired,
  requests: PropTypes.array.isRequired,
  x: PropTypes.number.isRequired,
  isOver: PropTypes.bool,
  item: PropTypes.object,
  canDrop: PropTypes.bool,
  startScrolling: PropTypes.func,
  stopScrolling: PropTypes.func,
  isScrolling: PropTypes.bool
};