'use strict'
import React, { Component, PropTypes } from 'react'
import App from 'grommet/components/App';
import Footer from 'grommet/components/Footer';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import SearchInput from 'grommet/components/SearchInput';
import Button from 'grommet/components/Button';
import ReactQuill from 'react-quill';

const store = { primary_contact: ''}

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
          Compose a message to let them know why you want to meet.
          <Box className='slide-bar-search'>
            <div>
              Introduction Message
            </div>
            <ReactQuill className="rich-editor"
                theme="snow"
                modules={modules}
                formats={formats}
               />
          </Box>
        </Section>
      )
    }
})

export { FirstStep }