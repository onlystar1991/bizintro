import React, { Component, PropTypes } from 'react';
import Responsive from 'grommet/utils/Responsive';
import { connect } from 'react-redux';

import Anchor from 'grommet/components/Anchor';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Notification from 'grommet/components/Notification';
import Paragraph from 'grommet/components/Paragraph';
import Split from 'grommet/components/Split';
import Value from 'grommet/components/Value';
import Meter from 'grommet/components/Meter';
import Spinning from 'grommet/components/icons/Spinning';
import { getMessage } from 'grommet/utils/Intl';

import NavControl from '../components/NavControl';
import {
  loadDashboard, unloadDashboard
} from '../actions/dashboard';

import { pageLoaded } from './utils';
import NavSidebar from '../components/NavSidebar';

import SocialFacebookIcon from 'grommet/components/icons/base/SocialFacebook';
import SocialLinkedinIcon from 'grommet/components/icons/base/SocialLinkedin';
import SocialTwitterIcon from 'grommet/components/icons/base/SocialTwitter';
import SocialMailIcon from 'grommet/components/icons/base/SocialMail';
import SearchIcon from 'grommet/components/icons/base/Search';
import ReactModal from 'react-modal';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import Button from 'grommet/components/Button';


import Sidebar from 'react-sidebar';
import SidebarContent from './contacts-sidebar';
import UserIcon from 'grommet/components/icons/base/User';
import Image from 'grommet/components/Image';
import EditIcon from 'grommet/components/icons/base/Edit';
import CloseIcon from 'grommet/components/icons/base/Close';

class Contacts extends Component {
  
  componentDidMount() {
    // console.log(this);
    pageLoaded('Contacts');
    // this.props.dispatch(loadDashboard());
    this._responsive = Responsive.start(this._onResponsive);
  }

  componentWillUnmount() {
    // console.log(this);
    // this.props.dispatch(unloadDashboard());
    this._responsive.stop();
  }

  _onResponsive (isLayoutSmall) {
    console.log(isLayoutSmall);
    this.setState({
      layout: (isLayoutSmall) ? 'small' : 'large'
    });
  }

  render() {

    const nav = <NavSidebar />;
    
    return (
      <Box>
        <Header className="page-header">
          <Anchor path='/'>Bizintro</Anchor>
          <UserIcon />
        </Header>
        <Box direction='row'>
          {nav}
          <div className='main-content'>
            <Box direction='row' className="main-contacts-header">
              <Box></Box>
              <Box direction="row" className="search" justify='center'>
                <Box className="search-item">Bethany Sup</Box>
                <Anchor icon={<SearchIcon className="search-icon" />} path='contacts/lists' />
              </Box>
              <CloseIcon className="close-icon" />
            </Box>
            <Box className="main-contacts">
              <Box direction='row' className="contacts-list">
                <Box direction='row' className="contacts-list-data">
                  <Image src='http://placeimg.com/100/100/mans' className='contacts-list-image' />
                  <div className='instructionName'>
                    <span>Bethany Superdeson</span> <br /> Visual Designer ABC Crop
                  </div>
                </Box>
                <Box direction='row' className="contacts-list-social">
                  <SocialFacebookIcon className='facebook-item' />
                  <SocialTwitterIcon className='twitter-item' />
                </Box>
                <Anchor className="contacts-list-items">Share</Anchor>
                <Anchor className="contacts-list-items">Introduce</Anchor>
                <Anchor className="contacts-list-items">Help</Anchor>
                <Anchor className="contacts-list-items">Request Appointment</Anchor>
                <Button icon={<EditIcon className='icons' />} href='#' className="iconbtn" />
              </Box>              
             
              <Box direction='row' className="contacts-list">
                <Box direction='row' className="contacts-list-data">
                  <Image src='http://placeimg.com/100/100/mans' className='contacts-list-image' />
                  <div className='instructionName'>
                    <span>Bethany Superdeson</span> <br /> Visual Designer ABC Crop
                  </div>
                </Box>
                <Box direction='row' className="contacts-list-social">
                  <SocialLinkedinIcon className='linkedin-item' />
                  <SocialTwitterIcon className='twitter-item' />
                </Box>
                <Anchor className="contacts-list-items">Share</Anchor>
                <Anchor className="contacts-list-items">Introduce</Anchor>
                <Anchor className="contacts-list-items">Help</Anchor>
                <Anchor className="contacts-list-items">Request Appointment</Anchor>
                <Button icon={<EditIcon className='icons' />} href='#' className="iconbtn" />
              </Box>
              <Box direction='row' className="contacts-list">
                <Box direction='row' className="contacts-list-data">
                  <Image src='http://placeimg.com/100/100/mans' className='contacts-list-image' />
                  <div className='instructionName'>
                    <span>Bethany Superdeson</span> <br /> Visual Designer ABC Crop
                  </div>
                </Box>
                <Box direction='row' className="contacts-list-social">
                  <SocialFacebookIcon className='facebook-item' />
                  <SocialLinkedinIcon className='linkedin-item' />
                  <SocialTwitterIcon className='twitter-item' />
                </Box>
                <Anchor className="contacts-list-items">Share</Anchor>
                <Anchor className="contacts-list-items">Introduce</Anchor>
                <Anchor className="contacts-list-items">Help</Anchor>
                <Anchor className="contacts-list-items">Request Appointment</Anchor>
                <Button icon={<EditIcon className='icons' />} href='#' className="iconbtn" />
              </Box>
              <Box direction='row' className="contacts-list">
                <Box direction='row' className="contacts-list-data">
                  <Image src='http://placeimg.com/100/100/mans' className='contacts-list-image' />
                  <div className='instructionName'>
                    <span>Bethany Superdeson</span> <br /> Visual Designer ABC Crop
                  </div>
                </Box>
                <Box direction='row' className="contacts-list-social">
                  <SocialFacebookIcon className='facebook-item' />
                  <SocialTwitterIcon className='twitter-item' />
                </Box>
                <Anchor className="contacts-list-items">Share</Anchor>
                <Anchor className="contacts-list-items">Introduce</Anchor>
                <Anchor className="contacts-list-items">Help</Anchor>
                <Anchor className="contacts-list-items">Request Appointment</Anchor>
                <Button icon={<EditIcon className='icons' />} href='#' className="iconbtn" />
              </Box>
              <Box direction='row' className="contacts-list">
                <Box direction='row' className="contacts-list-data">
                  <Image src='http://placeimg.com/100/100/mans' className='contacts-list-image' />
                  <div className='instructionName'>
                    <span>Bethany Superdeson</span> <br /> Visual Designer ABC Crop
                  </div>
                </Box>
                <Box direction='row' className="contacts-list-social">
                  <SocialLinkedinIcon className='linkedin-item' />
                  <SocialTwitterIcon className='twitter-item' />
                </Box>
                <Anchor className="contacts-list-items">Share</Anchor>
                <Anchor className="contacts-list-items">Introduce</Anchor>
                <Anchor className="contacts-list-items">Help</Anchor>
                <Anchor className="contacts-list-items">Request Appointment</Anchor>
                <Button icon={<EditIcon className='icons' />} href='#' className="iconbtn" />
              </Box>
              <Box direction='row' className="contacts-list">
                <Box direction='row' className="contacts-list-data">
                  <Image src='http://placeimg.com/100/100/mans' className='contacts-list-image' />
                  <div className='instructionName'>
                    <span>Bethany Superdeson</span> <br /> Visual Designer ABC Crop
                  </div>
                </Box>
                <Box direction='row' className="contacts-list-social">
                  <SocialFacebookIcon className='facebook-item' />
                  <SocialLinkedinIcon className='linkedin-item' />
                  <SocialTwitterIcon className='twitter-item' />
                </Box>
                <Anchor className="contacts-list-items">Share</Anchor>
                <Anchor className="contacts-list-items">Introduce</Anchor>
                <Anchor className="contacts-list-items">Help</Anchor>
                <Anchor className="contacts-list-items">Request Appointment</Anchor>
                <Button icon={<EditIcon className='icons' />} href='#' className="iconbtn" />
              </Box>
              <Box direction='row' className="contacts-list">
                <Box direction='row' className="contacts-list-data">
                  <Image src='http://placeimg.com/100/100/mans' className='contacts-list-image' />
                  <div className='instructionName'>
                    <span>Bethany Superdeson</span> <br /> Visual Designer ABC Crop
                  </div>
                </Box>
                <Box direction='row' className="contacts-list-social">
                  <SocialLinkedinIcon className='linkedin-item' />
                  <SocialTwitterIcon className='twitter-item' />
                </Box>
                <Anchor className="contacts-list-items">Share</Anchor>
                <Anchor className="contacts-list-items">Introduce</Anchor>
                <Anchor className="contacts-list-items">Help</Anchor>
                <Anchor className="contacts-list-items">Request Appointment</Anchor>
                <Button icon={<EditIcon className='icons' />} href='#' className="iconbtn" />
              </Box>
              <Box direction='row' className="contacts-list">
                <Box direction='row' className="contacts-list-data">
                  <Image src='http://placeimg.com/100/100/mans' className='contacts-list-image' />
                  <div className='instructionName'>
                    <span>Bethany Superdeson</span> <br /> Visual Designer ABC Crop
                  </div>
                </Box>
                <Box direction='row' className="contacts-list-social">
                  <SocialFacebookIcon className='facebook-item' />
                  <SocialLinkedinIcon className='linkedin-item' />
                  <SocialTwitterIcon className='twitter-item' />
                </Box>
                <Anchor className="contacts-list-items">Share</Anchor>
                <Anchor className="contacts-list-items">Introduce</Anchor>
                <Anchor className="contacts-list-items">Help</Anchor>
                <Anchor className="contacts-list-items">Request Appointment</Anchor>
                <Button icon={<EditIcon className='icons' />} href='#' className="iconbtn" />
              </Box>
              <Box direction='row' className="contacts-list">
                <Box direction='row' className="contacts-list-data">
                  <Image src='http://placeimg.com/100/100/mans' className='contacts-list-image' />
                  <div className='instructionName'>
                    <span>Bethany Superdeson</span> <br /> Visual Designer ABC Crop
                  </div>
                </Box>
                <Box direction='row' className="contacts-list-social">
                  <SocialFacebookIcon className='facebook-item' />
                  <SocialLinkedinIcon className='linkedin-item' />
                  <SocialTwitterIcon className='twitter-item' />
                </Box>
                <Anchor className="contacts-list-items">Share</Anchor>
                <Anchor className="contacts-list-items">Introduce</Anchor>
                <Anchor className="contacts-list-items">Help</Anchor>
                <Anchor className="contacts-list-items">Request Appointment</Anchor>
                <Button icon={<EditIcon className='icons' />} href='#' className="iconbtn" />
              </Box>
              <Box direction='row' className="contacts-list">
                <Box direction='row' className="contacts-list-data">
                  <Image src='http://placeimg.com/100/100/mans' className='contacts-list-image' />
                  <div className='instructionName'>
                    <span>Bethany Superdeson</span> <br /> Visual Designer ABC Crop
                  </div>
                </Box>
                <Box direction='row' className="contacts-list-social">
                  <SocialFacebookIcon className='facebook-item' />
                  <SocialLinkedinIcon className='linkedin-item' />
                </Box>
                <Anchor className="contacts-list-items">Share</Anchor>
                <Anchor className="contacts-list-items">Introduce</Anchor>
                <Anchor className="contacts-list-items">Help</Anchor>
                <Anchor className="contacts-list-items">Request Appointment</Anchor>
                <Button icon={<EditIcon className='icons' />} href='#' className="iconbtn" />
              </Box>
              <Box direction='row' className="contacts-list">
                <Box direction='row' className="contacts-list-data">
                  <Image src='http://placeimg.com/100/100/animals' className='contacts-list-image' />
                  <div className='instructionName'>
                    <span>Bethany Superdeson</span> <br /> Visual Designer ABC Crop
                  </div>
                </Box>
                <Box direction='row' className="contacts-list-social">
                  <SocialFacebookIcon className='facebook-item' />
                  <SocialTwitterIcon className='twitter-item' />
                </Box>
                <Anchor className="contacts-list-items">Share</Anchor>
                <Anchor className="contacts-list-items">Introduce</Anchor>
                <Anchor className="contacts-list-items">Help</Anchor>
                <Anchor className="contacts-list-items">Request Appointment</Anchor>
                <Button icon={<EditIcon className='icons' />} href='#' className="iconbtn" />
              </Box>
            </Box>
            
          </div>
        </Box>
      </Box>
    );
  }
}

export default Contacts;
