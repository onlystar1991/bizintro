'use strict'
import React, { Component, PropTypes } from 'react'
import App from 'grommet/components/App';
import Footer from 'grommet/components/Footer';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import SearchInput from 'grommet/components/SearchInput';
import Button from 'grommet/components/Button';

const store = { primary_contact: ''}
const FirstStep = React.createClass ({
    getInitialState() {
        return store
    },
    
    handlePrimaryContactChanged(event) {
      store.primary_contact = event.target.value
      this.setState(store)  
    },
    
    
    render() {
      return (
        <Section className='slide-bar-section'>
          Choose the contact you would like to offer to help
          <Box className='slide-bar-search'>
            <div>
              Contact
            </div>
            <SearchInput placeHolder='Type name here'
              suggestions={['first', 'second', 'third', 'fourth']}
              className="slide-bar-search-bar"
              onChange={this.handlePrimaryContactChanged} 
              value={this.state.primary_contact}
              />
          </Box>
        </Section>
      )
    }
})

export { FirstStep }