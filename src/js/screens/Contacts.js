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

class Contacts extends Component {
  constructor(props) {
    super(props);
    this._onResponsive = this._onResponsive.bind(this);

    this.state = {
        docked: false,
        open: false,
        transitions: true,
        touch: true,
        shadow: true,
        pullRight: true,
        touchHandleWidth: 20,
        dragToggleDistance: 30
    };

    this.renderPropCheckbox = this.renderPropCheckbox.bind(this);
    this.renderPropNumber = this.renderPropNumber.bind(this);
    this.onSetOpen = this.onSetOpen.bind(this);
    this.tabLinkClicked = this.tabLinkClicked.bind(this);
  }

  onSetOpen(open) {
    console.log('test---------', open);
    this.setState({open: open});

  }
  tabLinkClicked() {
    this.onSetOpen(true);
    // this.state.open = true;
  }

  renderPropCheckbox(prop) {
    const toggleMethod = (ev) => {
      const newState = {};
      newState[prop] = ev.target.checked;
      this.setState(newState);
    };

    return (
      <p key={prop}>
        <input type="checkbox" onChange={toggleMethod} checked={this.state[prop]} id={prop} />
        <label htmlFor={prop}> {prop}</label>
      </p>);
  }

  renderPropNumber(prop) {
    const setMethod = (ev) => {
      const newState = {};
      newState[prop] = parseInt(ev.target.value, 10);
      this.setState(newState);
    };

    return (
      <p key={prop}>
         {prop} <input type="number" onChange={setMethod} value={this.state[prop]} />
      </p>);
  }
  
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

    const sidebar = <SidebarContent />;

    const sidebarProps1 = {
      sidebar: sidebar,
      docked: this.state.docked,
      sidebarClassName: 'custom-sidebar-class',
      open: this.state.open,
      touch: this.state.touch,
      shadow: this.state.shadow,
      pullRight: this.state.pullRight,
      touchHandleWidth: this.state.touchHandleWidth,
      dragToggleDistance: this.state.dragToggleDistance,
      transitions: this.state.transitions,
      onSetOpen: this.onSetOpen
    };

    console.log(sidebarProps1);
    const nav = <NavSidebar />;
    
    return (
      <Sidebar {...sidebarProps1} size='large'>
        <Header className="introduction-header">
          <Anchor path='/'>Bizintro</Anchor>
        </Header>
        <Box direction='row'>
          {nav}
          <div className='main-content'>
            <Tabs className="tabs tabs-1">
              <Box direction='row' justify='between' className="main-content-header">
                <Heading align='center' margin='none' className='main-content-header-title'>0 Contacts</Heading>
                <Box direction='row' className='social-box'>
                  <TabLink to="tab1"><SocialFacebookIcon className='social-item' /></TabLink>
                  <TabLink to="tab2"><SocialLinkedinIcon className='social-item' /></TabLink>
                  <TabLink to="tab3"><SocialTwitterIcon className='social-item' /></TabLink>
                  <TabLink to="tab4"><SocialMailIcon /></TabLink>
                </Box>
                <Anchor icon={<SearchIcon />} path='contacts/lists' />
              </Box>
              <div className="content">
                <TabContent for="tab1" className="tab-content">
                  <Heading className="tab-content-title">Connect your Facebook Account</Heading>
                  <Box className="tab-content-paragraph">Bizintro can easily import all of your contacts from Twitter.
                  Click the link below to start the process.</Box>
                  {!this.state.docked && <Button label='Connect Facebook' className="tab-content-button" onClick={this.tabLinkClicked} />}
                </TabContent>
                <TabContent for="tab2" className="tab-content">
                  <Heading className="tab-content-title">Connect your Linkedin Account</Heading>
                  <Box className="tab-content-paragraph">Bizintro can easily import all of your contacts from Twitter.
                  Click the link below to start the process.</Box>
                  <Button label='Connect Linkedin' href='#' className="tab-content-button" />
                </TabContent>
                <TabContent for="tab3" className="tab-content">
                  <Heading className="tab-content-title">Connect your Twitter Account</Heading>
                  <Box className="tab-content-paragraph">Bizintro can easily import all of your contacts from Twitter.
                  Click the link below to start the process.</Box>
                  <Button label='Connect Twitter' href='#' className="tab-content-button" />
                </TabContent>
                <TabContent for="tab4" className="tab-content">
                  <Heading className="tab-content-title">Connect your account</Heading>
                  <Box className="tab-content-paragraph">Click the links above to connect your social media or email accounts</Box>
                  <Box className="tab-content-paragraph2">For more information &nbsp;<a>check out our guides</a></Box>
                </TabContent>
              </div>
            </Tabs>
          </div>
        </Box>
      </Sidebar>
    );
  }
}

export default Contacts;
