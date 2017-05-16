import React, { Component, PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';

// import RequestComponent from './DraggableRequest';
import Requests from './Requests';


export default class DropRequestPan extends Component {
  render() {
    const { item, x, moveRequest, isDragging, openSideMenu } = this.props;
    console.log('=============', openSideMenu);
    if (item.name == 'Requests') {
      var content = <Box className="requests-box help-body-first-col">
                      <div className="help-main-left">
                        <Requests
                          moveRequest={moveRequest}
                          openSideMenu={openSideMenu}
                          x={x}
                          item={item}
                          requests={item.requests}
                          startScrolling={this.props.startScrolling}
                          stopScrolling={this.props.stopScrolling}
                          isScrolling={this.props.isScrolling}
                        />
                      </div>
                    </Box>
    } else {
      var content = <Box className='approved-box help-body-second-col help-main-left'>
                      <Box className='droppable-area'>
                        <Requests
                          moveRequest={moveRequest}
                          openSideMenu={openSideMenu}
                          x={x}
                          item={item}
                          requests={item.requests}
                          startScrolling={this.props.startScrolling}
                          stopScrolling={this.props.stopScrolling}
                          isScrolling={this.props.isScrolling}
                        />
                      </Box>
                      <Box className='background-area' style={item.requests.length > 0 ? { display: 'none' } : { display: 'block' } }>
                        <Image src='/img/heart.png'
                        size='small'
                        className="heart-logo" />
                        <h1>Share some love</h1>
                        <Box className="paragraph-box">You have not approved any contacts yet to be shared to those you helped.
                        Drag and drop into this  column or click the green checkmark to start the approval process.</Box>
                      </Box>
                    </Box>
    }
    return (
        content
    );
  }
}
DropRequestPan.propTypes = {
  item: PropTypes.object,
  x: PropTypes.number,
  moveRequest: PropTypes.func.isRequired,
  isDragging: PropTypes.bool,
  startScrolling: PropTypes.func,
  stopScrolling: PropTypes.func,
  openSideMenu: PropTypes.func.isRequired,
  isScrolling: PropTypes.bool
}