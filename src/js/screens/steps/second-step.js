'use strict'
import React, { Component, PropTypes } from 'react'
import App from 'grommet/components/App';
import Footer from 'grommet/components/Footer';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import SearchInput from 'grommet/components/SearchInput';
import Button from 'grommet/components/Button';
import Section from 'grommet/components/Section';
import { Editor } from 'react-draft-wysiwyg';
import '../../../scss/rich-editor.scss';

const store = { hasPrimaryContactMessage: ''}
const SecondStep = React.createClass ({
    getInitialState() {
        return store
    },
    
    hasPrimaryContactMessage(event) {
      store.hasPrimaryContactMessage = event.target.value
      this.setState(store)  
    },
    
    
    render() {
      return (
        <Section className='slide-bar-section'>
          Compose a message to the primary contact.
          <Box className='slide-bar-search'>
            <div>
              Introduction Message
            </div>
            <Editor className="rich-editor" />
          </Box>
        </Section>
      )
    }
})

export { SecondStep }