'use strict'
import React, { Component, PropTypes } from 'react'
import App from 'grommet/components/App';
import Footer from 'grommet/components/Footer';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import SearchInput from 'grommet/components/SearchInput';
import Button from 'grommet/components/Button';
import Section from 'grommet/components/Section';
import ReactQuill from 'react-quill';

const store = { hasPrimaryContactMessage: ''}
const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, false] }],
    ['underline', 'bold', 'italic', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image']
  ],
};
const formats = [
  'header',
  'underline', 'bold', 'italic', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
];

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
            <div className="text-editor">
              <ReactQuill className="rich-editor"
                theme="snow"
                modules={modules}
                formats={formats}
               />
            </div>
          </Box>
        </Section>
      )
    }
})

export { SecondStep }