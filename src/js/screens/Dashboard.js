import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Anchor from 'grommet/components/Anchor';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Notification from 'grommet/components/Notification';
import Paragraph from 'grommet/components/Paragraph';
import Split from 'grommet/components/Split';
import Value from 'grommet/components/Value';
import Meter from 'grommet/components/Meter';
import Spinning from 'grommet/components/icons/Spinning';
import { getMessage } from 'grommet/utils/Intl';

import NavControl from '../components/NavControl';
import {
  loadDashboard, unloadDashboard
} from '../actions/dashboard';

import { pageLoaded } from './utils';
import NavSidebar from '../components/NavSidebar';

const ReactHighcharts = require('react-highcharts');
const graph = {
      config: {
        title: {
            text: 'Dashboard'
        },
        xAxis: {
          categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23','24', '25', '26', '27', '28', '29', '30']
        },
        series: [{
          data: [30, 60, 20, 40, 60, 10, 30, 80, 10, 40, 20, 30, 70, 6, 20, 40, 10, 10, 10,20, 70, 80, 50, 40, 10, 30, 40, 30, 40, 50],
          name: ' '
        }]
      }
    }

class Dashboard extends Component {

  componentDidMount() {
    console.log(this);
    pageLoaded('Dashboard');
    this.props.dispatch(loadDashboard());
  }

  componentWillUnmount() {
    console.log(this);
    this.props.dispatch(unloadDashboard());
  }

  constructor(props) {
    super(props);

    // this.state = {
    //   config: {
    //           xAxis: {
    //             categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    //           },
    //           series: [{
    //             data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
    //           }]
    //         }
    // };
  }

  render() {
    const nav = <NavSidebar />;
    return (
      <div>
        <Header className="introduction-header">
          <Anchor path='/'>Bizintro</Anchor>
        </Header>
        <Box direction='row'>
          {nav}
          <div className='main-content'>
            <Box>
              <ReactHighcharts config={graph.config}>
              </ReactHighcharts>
            </Box>
          </div>
        </Box>
      </div>
    );
  }
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.object,
  tasks: PropTypes.arrayOf(PropTypes.object)
};

Dashboard.contextTypes = {
  intl: PropTypes.object
};

const select = state => ({ ...state.dashboard });

export default connect(select)(Dashboard);
