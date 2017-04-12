import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import App from 'grommet/components/App';
import Footer from 'grommet/components/Footer';
import Header from 'grommet/components/Header';
import Section from 'grommet/components/Section';
import Title from 'grommet/components/Title';
import FilterIcon from 'grommet/components/icons/base/Filter';
import Add from 'grommet/components/icons/base/Add';
import SearchIcon from 'grommet/components/icons/base/Search';
import Menu from 'grommet/components/Menu';




import Anchor from 'grommet/components/Anchor';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';

import Label from 'grommet/components/Label';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Notification from 'grommet/components/Notification';
import Paragraph from 'grommet/components/Paragraph';
import Value from 'grommet/components/Value';
import Meter from 'grommet/components/Meter';
import Spinning from 'grommet/components/icons/Spinning';
import { getMessage } from 'grommet/utils/Intl';

import NavControl from '../components/NavControl';

import { pageLoaded } from './utils';

class Home extends Component {

  componentDidMount() {
    pageLoaded('Introductions');
    // this.props.dispatch(loadDashboard());
  }

  componentWillUnmount() {
    // this.props.dispatch(unloadDashboard());
  }

  render() {
    console.log(this.props);
    // const { box: { items } } = this.props;
    // var i = 0;
    // const instructions = items.map(instruction => (
    //   i++,
    //   <Box key={i}>
    //     Test
    //    </Box>
    // ));

    return (
      <div>
        <Header size='small' className="instruction-header">
          <Title>
            521 Introductions
          </Title>
          <Box flex={true}
            justify='end'
            direction='row'
            responsive={false}>
            <Menu icon={<FilterIcon size='small' />}
              dropAlign={{"right": "right"}}>
            </Menu>
            <Menu icon={<Add size='small' />}
              dropAlign={{"right": "right"}}>
              <Anchor href='#'
                className='active'>
                First
              </Anchor>
              <Anchor href='#'>
                Second
              </Anchor>
              <Anchor href='#'>
                Third
              </Anchor>
            </Menu>
          </Box>
        </Header>
        <Section className="instruction-section">
          Test
        </Section>
        <Footer>Footer</Footer>
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string,
      label: PropTypes.Object
    }))
  })
};

const select = state => ({
  nav: state.nav
});

export default connect(select)(Home);
