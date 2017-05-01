import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import App from 'grommet/components/App';
import Footer from 'grommet/components/Footer';
import Header from 'grommet/components/Header';
import Section from 'grommet/components/Section';
import Title from 'grommet/components/Title';
import FilterIcon from 'grommet/components/icons/base/Filter';
import Add from 'grommet/components/icons/base/Add';
import SearchIcon from 'grommet/components/icons/base/Search';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';

import Sidebar from 'react-sidebar';

import Anchor from 'grommet/components/Anchor';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';

import Label from 'grommet/components/Label';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Notification from 'grommet/components/Notification';
import Paragraph from 'grommet/components/Paragraph';
import Value from 'grommet/components/Value';
import Meter from 'grommet/components/Meter';
import Columns from 'grommet/components/Columns';
import Split from 'grommet/components/Split';
import Image from 'grommet/components/Image';

import Spinning from 'grommet/components/icons/Spinning';
import { getMessage } from 'grommet/utils/Intl';

import NavControl from '../components/NavControl';


import { pageLoaded } from './utils';

import SidebarContent from './sidebar-help-content';
import NavSidebar from '../components/NavSidebar';

import FormNextLinkIcon from 'grommet/components/icons/base/FormNextLink';
import AlertIcon from 'grommet/components/icons/base/Alert';
import UserIcon from 'grommet/components/icons/base/User';
import LinkDownIcon from 'grommet/components/icons/base/LinkDown';
import MoreIcon from 'grommet/components/icons/base/More';
import CheckmarkIcon from 'grommet/components/icons/base/Checkmark';
import FavoriteIcon from 'grommet/components/icons/base/Favorite';

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8,
  },
  content: {
    padding: '16px',
  },
};


class Help extends Component {

  onSetOpen(open) {
    this.setState({open: open});
  }

  menuButtonClick(ev) {
    ev.preventDefault();
    this.onSetOpen(!this.state.open);
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

  constructor(props) {
    super(props);

    this.state = {
      docked: false,
      open: false,
      transitions: true,
      touch: true,
      shadow: true,
      pullRight: true,
      touchHandleWidth: 20,
      dragToggleDistance: 30,
    };

    this.renderPropCheckbox = this.renderPropCheckbox.bind(this);
    this.renderPropNumber = this.renderPropNumber.bind(this);
    this.onSetOpen = this.onSetOpen.bind(this);
    this.menuButtonClick = this.menuButtonClick.bind(this);
  }

  render() {
    
    const { box: { items } } = this.props;
    var i = 0;
    const instructions = items.map(instruction => (
      i++,
      <Box align='start' className="main-content-item"
        pad='medium' >
        <Box direction='row' justify='between' className="main-content-item-up">
          <Box direction='row'>
            <Image src='http://placeimg.com/100/100/animals' className='instruction-item-image'/>
            <div className='instructionName'>
              <span>Bethany Superdeson</span> <br /> Visual Designer ABC Crop
            </div>
          </Box>
          <MoreIcon />
        </Box>
        <LinkDownIcon className="linkdownicon" />
        <Box direction='row' justify='between' className="main-content-item-up">
          <Box direction='row'>
            <Image src='http://placeimg.com/100/100/animals' className='instruction-item-image'/>
            <div className='instructionName'>
              <span>Bethany Superdeson</span> <br /> Visual Designer ABC Crop
            </div>
          </Box>
          <Box justify='end'>
            <Image src='/img/checkbadge.png'
                  full={false}
                  size='xsmall'
                  fit='cover' />
          </Box>
        </Box>
      </Box>
    ));
    
    const sidebar = <SidebarContent />;

    const sidebarProps = {
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
      onSetOpen: this.onSetOpen,
    };
    const nav = <NavSidebar />;




    return (
      <Sidebar {...sidebarProps} size='large'>
        <Header className="page-header">
          <Anchor path='/'>Bizintro</Anchor>
          <UserIcon />
        </Header>
        <Box direction='row'>
          {nav}
          <div className="help-main">
            <Box direction='row' className="help-main-header">
              <Box direction='row' justify='between' className="help-main-header-title">
                <Anchor className="main-content-title">Requests</Anchor>
                <Box></Box>
              </Box>
              <Box direction='row' justify='between' className="help-main-header-title">
                <Anchor className="main-content-title">Approved</Anchor>
                <Box direction='row'>
                  <Menu responsive={true}
                    icon={<FilterIcon />}>
                    <Anchor href='#'
                      className='active'>
                      First action
                    </Anchor>
                    <Anchor href='#'>
                      Second action
                    </Anchor>
                    <Anchor href='#'>
                      Third action
                    </Anchor>
                  </Menu>
                  {!this.state.docked && <Button icon={<Add />} onClick={this.menuButtonClick} href='#' primary={false} />}
                </Box>
              </Box>
            </Box>
            <Split className="help-main-content">
              <Box className="requests-box">
                <div className="help-main-left">
                  {instructions}
                </div>
              </Box>
              <Box className='approved-box'>
                <Image src='/img/heart.png'
                  size='small'
                  className="heart-logo" />
                <h1>Share some love</h1>
                <Box className="paragraph-box">You have not approved any contacts yet to be shared to those you helped.
                Drag and drop into this  column or click the green checkmark to start the approval process.</Box>
              </Box>
            </Split>
          </div>
        </Box>
      </Sidebar>
    );
  }
}



const select = state => ({
  box: state.box,
  nav: state.nav
});

export default connect(select)(Help);
