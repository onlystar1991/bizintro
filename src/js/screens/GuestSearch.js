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



import UserIcon from 'grommet/components/icons/base/User';
import MenuIcon from 'grommet/components/icons/base/Menu';

import SocialTwitterIcon from 'grommet/components/icons/base/SocialTwitter';
import SocialMailIcon from 'grommet/components/icons/base/SocialMail';
import SearchIcon from 'grommet/components/icons/base/Search';
import ReactModal from 'react-modal';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import Button from 'grommet/components/Button';


import Sidebar from 'react-sidebar';
import SidebarContent from './contacts-sidebar';

import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import SearchInput from 'grommet/components/SearchInput';
import GuestSidebarContent from './guest-sidebar-content'
// import SidebarContent from './sidebar-content';

class GuestSearch extends Component {
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

    this._onResponsive = this._onResponsive.bind(this);
    this.menuButtonClick = this.menuButtonClick.bind(this);
    this.onSetOpen = this.onSetOpen.bind(this);
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

  onSetOpen(open) {
    this.setState({open: open});
  }

  menuButtonClick(ev) {
    ev.preventDefault();
    console.log('---------');
    this.onSetOpen(!this.state.open);
  }

  componentDidMount() {
    // console.log(this);
    pageLoaded('Find..');
    // this.props.dispatch(loadDashboard());
    this._responsive = Responsive.start(this._onResponsive);
  }

  componentWillUnmount() {
    // console.log(this);
    // this.props.dispatch(unloadDashboard());
    this._responsive.stop();
  }

  _onResponsive (isLayoutSmall) {
    
  }

  render() {

    const sidebar = <GuestSidebarContent />;

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
    return (
      <Sidebar {...sidebarProps} size='large'>
        <Box>
          <Box className='guest-search-header'>
            <Box className='guest-search-header-title'>
              Bizintro
            </Box>
            <Anchor icon={<MenuIcon colorIndex='light-1'/>} href='#' onClick={this.menuButtonClick} className='guest-menu-button'/>
          </Box>
          <Box className='guest-search-text'>
            <Form>
              <FormField label='Who are you looking for?' className='guest-search-form'>
                <SearchInput placeHolder='Search by Position, Title, Company...' className='guest-search-icon' />
              </FormField>
            </Form>
          </Box>
          <Box className='guest-search-results'>
          </Box>
        </Box>
      </Sidebar>
    );
  }
}

export default GuestSearch;
