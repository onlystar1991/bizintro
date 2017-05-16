import React, { Component, PropTypes } from 'react';

import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import MoreIcon from 'grommet/components/icons/base/More';
import LinkDownIcon from 'grommet/components/icons/base/LinkDown';
import Status from 'grommet/components/icons/Status';

const propTypes = {
  item: PropTypes.object.isRequired,
  style: PropTypes.object
};

const Request = (props) => {
  const { style, item } = props;

  return (
    <div style={style} className="item" id={style ? item.id : null}>
      <Box align='start' className="main-content-item" pad='medium' style={{
          cursor: 'move'
        }}>
          <Box direction='row' justify='between' className="main-content-item-up">
            <Box direction='row'>
              <Image src='http://placeimg.com/100/100/animals' className='instruction-item-image'/>
              <div className='instructionName'>
                <span>Bethany Superdeson</span> <br /> Visual Designer ABC Crop
              </div>
            </Box>
            <MoreIcon />
          </Box>
          <Box className='down-arrow-box'>
            <LinkDownIcon className="linkdownicon" />
          </Box>
          <Box direction='row' justify='between' className="main-content-item-up">
            <Box direction='row'>
              <Image src='http://placeimg.com/100/100/animals' className='instruction-item-image'/>
              <div className='instructionName'>
                <span>Bethany Superdeson</span> <br /> Visual Designer ABC Crop
              </div>
            </Box>
            <Box className='okay-button'>
              <Status value='ok' />
            </Box>
          </Box>
        </Box>
    </div>
  );
};

Request.propTypes = propTypes;

export default Request;
