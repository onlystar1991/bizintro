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
import Label from 'grommet/components/Label';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';

import SocialMailIcon from 'grommet/components/icons/base/SocialMail';
import TrashIcon from 'grommet/components/icons/base/Trash';

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

const GuestSidebarContent = (props) => {
  const style = props.style ? {...styles.sidebar, ...props.style} : styles.sidebar;
  return (
    <Sidebar fixed={true} size='large' className="guest-slide-bar-content">
      <Header justify='between' pad={{ horizontal: 'medium' }} className='guest-sidebar-header'>
        <Label className='guest-sidebar-title'>
          Selected Contacts
        </Label>
        <Button href='#' icon={<CloseIcon />} plain={true}
          a11yTitle='Close Menu' />
      </Header>
      <Box>
        <List>
          <ListItem justify='between' separator='horizontal'>
            <span>
              <strong>John Smith</strong>
            </span>
            <span>
              Information Architect at Timestamp
            </span>
            <Box direction='row' className='secondary'>
              <SocialMailIcon /> &nbsp;&nbsp;&nbsp; <TrashIcon />
            </Box>
          </ListItem>
        </List>
      </Box>
      <Box>
        <Button href="#" className='guest-sidebar-next-button'>Next</Button>
      </Box>
    </Sidebar>
  );
};

GuestSidebarContent.propTypes = {
  style: PropTypes.object,
};

export default GuestSidebarContent;
