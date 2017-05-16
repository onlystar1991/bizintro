import React from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';
import Sidebar from 'grommet/components/Sidebar';
import Section from 'grommet/components/Section';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';
import Logo from 'grommet/components/icons/Grommet';
import Anchor from 'grommet/components/Anchor';
import SearchInput from 'grommet/components/SearchInput';

import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import FormFields from 'grommet/components/FormFields';
import TextInput from 'grommet/components/TextInput';
import Select from 'grommet/components/Select';


const styles = {
  sidebar: {
    width: 256,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none',
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575',
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'white',
  },
};

const SidebarContent = (props) => {
  const style = props.style ? {...styles.sidebar, ...props.style} : styles.sidebar;

  const links = [];

  for (let ind = 0; ind < 10; ind++) {
    links.push(
      <a key={ind} href="#" style={styles.sidebarLink}>Mock menu item {ind}</a>);
  }

  return (
    <Sidebar fixed={true} size='large' className="contacts-slide-bar-content">
      <Header size='large' justify='between' pad={{ horizontal: 'medium' }} className='contacts-sidebar-header'>
        <Title className='contacts-sidebar-title'>
          New Contacts
        </Title>
        <Button icon={<CloseIcon />} plain={true}
          a11yTitle='Close Menu' />
      </Header>
      <Box>
        <Form className='contacts-sidebar-form'>
          <Header>
            <Heading className="contacts-sidebar-paragraph">
              Set the contact information for <Anchor>John Smith.</Anchor>
            </Heading>
          </Header>
          <Section>
            <FormFields>
              <FormField label='First Name' className='contacts-sidebar-formfield'>
                <Select placeHolder='Toby' />
              </FormField>
              <FormField label='Last Name' className='contacts-sidebar-formfield'>
                <Select placeHolder='John' />
              </FormField>
              <FormField label='CEO' className='contacts-sidebar-formfield'>
                <Select placeHolder='Title' />
              </FormField>
              <FormField label='Company' className='contacts-sidebar-formfield'>
                <Select placeHolder='Title LLC' />
              </FormField>
              <FormField label='Email' className='contacts-sidebar-formfield'>
                <Select placeHolder='toby@titlellc.com' />
              </FormField>
              <FormField label='Phone Number' className='contacts-sidebar-formfield'>
                <Select placeHolder='322-8556-655' />
              </FormField>
              <FormField label='Address' className='contacts-sidebar-formfield'>
                <Select placeHolder='234LemonRd Lemont' />
              </FormField>
            </FormFields>
          </Section>
          <Box className='contacts-sidebar-formsubmit'>
            <Button label='Submit'
              type='submit'
              primary={true} className='submit-button'
              />
          </Box>
          
        </Form>
      </Box>
    </Sidebar>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object,
};

export default SidebarContent;
