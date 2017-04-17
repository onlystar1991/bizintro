// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  LIST_LOAD, LIST_UNLOAD
} from '../actions';

import { createReducer } from './utils';

const initialState = {
  items: [
    { path: '/dashboard', label: '1' },
    { path: '/dashboard1', label: '2' },
    { path: '/home', label: '3' },
    { path: '/dashboard3', label: '4' },
    { path: '/dashboard4', label: '5' },
    { path: '/dashboard4', label: '7' },
    { path: '/dashboard4', label: '8' },
    { path: '/tasks', label: '6' }
  ]
};

const handlers = {
  // [LIST_LOAD]: (_, action) => (
  //   { active: action.active, activateOnMultiple: undefined }
  // ),

  // [LIST_LOAD]: (_, action) => (
  //   { enabled: action.enabled }
  // )
};

export default createReducer(initialState, handlers);
