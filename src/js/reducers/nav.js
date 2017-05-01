// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AddIcon from 'grommet/components/icons/base/Add';
import BarChartIcon from 'grommet/components/icons/base/BarChart';
import HaltIcon from 'grommet/components/icons/base/Halt';
import CalendarIcon from 'grommet/components/icons/base/Calendar';
import ConnectIcon from 'grommet/components/icons/base/Connect';
import GroupIcon from 'grommet/components/icons/base/Group';


import {
  NAV_ACTIVATE, NAV_ENABLE, NAV_RESPONSIVE
} from '../actions';

import { createReducer } from './utils';

const initialState = {
  active: true, // start with nav active
  enabled: true, // start with nav disabled
  responsive: 'multiple',
  items: [
    { path: '/dashboard', label: <AddIcon /> },
    { path: '/dashboard', label: <BarChartIcon /> },
    { path: '/home', label: <HaltIcon /> },
    { path: '/appointment', label: <CalendarIcon /> },
    { path: '/help', label: <ConnectIcon /> },
    { path: '/tasks', label: <GroupIcon /> }
  ]
};

const handlers = {
  [NAV_ACTIVATE]: (_, action) => (
    { active: action.active, activateOnMultiple: undefined }
  ),

  [NAV_ENABLE]: (_, action) => (
    { enabled: action.enabled }
  ),

  [NAV_RESPONSIVE]: (state, action) => {
    const result = { responsive: action.responsive };
    if (action.responsive === 'single' && state.active) {
      result.active = false;
      result.activateOnMultiple = true;
    } else if (action.responsive === 'multiple' && state.activateOnMultiple) {
      result.active = true;
    }
    return result;
  }
};

export default createReducer(initialState, handlers);
