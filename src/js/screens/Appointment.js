import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Anchor from 'grommet/components/Anchor';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import List from 'grommet/components/List';
import Button from 'grommet/components/Button';
import ListItem from 'grommet/components/ListItem';
import Notification from 'grommet/components/Notification';
import Paragraph from 'grommet/components/Paragraph';
import Split from 'grommet/components/Split';
import Value from 'grommet/components/Value';
import Meter from 'grommet/components/Meter';
import Footer from 'grommet/components/Footer';
import Spinning from 'grommet/components/icons/Spinning';
import FilterIcon from 'grommet/components/icons/base/Filter';
import Add from 'grommet/components/icons/base/Add';
import { getMessage } from 'grommet/utils/Intl';
import NavControl from '../components/NavControl';
import {
  loadDashboard, unloadDashboard
} from '../actions/dashboard';
import { pageLoaded } from './utils';
import NavSidebar from '../components/NavSidebar';
import { Calendar } from './calendar';
import moment from 'moment';
import 'moment/locale/nb';
import Sidebar from 'react-sidebar';
import SidebarAppointment from './sidebar-appointment';
// import SidebarContent from './sidebar-content';

class Appointment extends Component {

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
      date: moment()
    };

    this.renderPropCheckbox = this.renderPropCheckbox.bind(this);
    this.renderPropNumber = this.renderPropNumber.bind(this);
    this.onSetOpen = this.onSetOpen.bind(this);
    this.menuButtonClick = this.menuButtonClick.bind(this);
  }

  render() {
    const nav = <NavSidebar />;

    const sidebar = <SidebarAppointment />;

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
        <Header className="introduction-header">
          <Anchor path='/'>Bizintro</Anchor>
        </Header>
        <Box direction='row'>
          {nav}
          <div className='main-content'>
            <Header size='small' className="instruction-header">
              <Title className='instruction-title'>
                521 Introductions
              </Title>
              <Box flex={true}
                justify='end'
                direction='row'
                responsive={false}>
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
            </Header>
            <div className="instruction-section">
              <Calendar
                onNextMonth={() => this.setState({ date: this.state.date.clone().add(1, 'months') }) }
                onPrevMonth={() => this.setState({ date: this.state.date.clone().subtract(1, 'months') }) }
                date={this.state.date}
                onPickDate={(date) => console.log(date)}
              />
            </div>
            <Footer className="instuctions-footer">Instructions</Footer>
          </div>
        </Box>
      </Sidebar>

    );
  }
}

const select = state => ({ ...state.appointment });

export default connect(select)(Appointment);
