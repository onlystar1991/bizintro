import React from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';
import Sidebar from 'grommet/components/Sidebar';
import Section from 'grommet/components/Section';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';
import Logo from 'grommet/components/icons/Grommet';
import Anchor from 'grommet/components/Anchor';
import SearchInput from 'grommet/components/SearchInput';
import Multistep from './react-multistep/';
import { steps } from './help-steps/index.js'

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
    <Sidebar fixed={true} size='large' className="slide-bar-content">
      <Header size='large' justify='between' pad={{ horizontal: 'medium' }} className='slide-bar-title'>
        <Title>
          Offer Help
        </Title>
        <Button icon={<CloseIcon />} plain={true}
          a11yTitle='Close Menu' />
      </Header>
      <Multistep initialStep={1} steps={steps}/>
    </Sidebar>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object,
};

export default SidebarContent;
