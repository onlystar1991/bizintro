import React, { Component, PropTypes } from 'react';
import Responsive from 'grommet/utils/Responsive';
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

import { Axis } from 'grommet/components/chart/Chart';
import LineChart from './LineChart';


const LESS_MONEY_TO_SPEND = {
  axis: {
    large: {
      series: [
        {"index": 0, "label": "2000"},
        {"index": 2, "label": "2002"},
        {"index": 4, "label": "2004"},
        {"index": 6, "label": "2006"},
        {"index": 8, "label": "2008"},
        {"index": 10, "label": "2010"},
        {"index": 12, "label": "2012"}
      ],
      count: 13
    },
    small: {
      series: [
        {"index": 0, "label": "2000"},
        {"index": 3, "label": "2006"},
        {"index": 5, "label": "2012"}
      ],
      count: 6
    }
  },
  max: 69,
  min: 62,
  title: "Less Money to Spend",
  series: [
    {
      values: [69, 69, 68, 67, 66, 65, 66, 66, 
        66, 64, 64, 63, 64],
      units: "%",
      colorIndex: "accent-1"
    }
  ]
};

class Dashboard extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.layout !== nextProps.layout) return true;
    else return false;
  }
  
  componentDidMount() {
    console.log(this);
    pageLoaded('Dashboard');
    this.props.dispatch(loadDashboard());
    this._responsive = Responsive.start(this._onResponsive);
  }

  componentWillUnmount() {
    console.log(this);
    this.props.dispatch(unloadDashboard());
    this._responsive.stop();
  }

  constructor(props) {
    super(props);
    console.log('props');
    console.log(props);
    this._onResponsive = this._onResponsive.bind(this);
  }

  _onResponsive (isLayoutSmall) {
    console.log(isLayoutSmall);
    this.setState({
      layout: (isLayoutSmall) ? 'small' : 'large'
    });
  }

  render() {
    const nav = <NavSidebar />;
    const axisSmall = LESS_MONEY_TO_SPEND.axis.small;
    const axisLarge = LESS_MONEY_TO_SPEND.axis.large;
    const { series, title, max, min } = LESS_MONEY_TO_SPEND;
    const axis = (this.props.layout === 'small')
      ? <Axis vertical={true} ticks={true} count={axisSmall.count}
        labels={axisSmall.series} />
      : <Axis vertical={false} ticks={true} count={axisLarge.count}
        labels={axisLarge.series} />;
    return (
      <Box>
        <Header className="introduction-header">
          <Anchor path='/'>Bizintro</Anchor>
        </Header>
        <Box direction='row'>
          {nav}
          <div className='main-content'>
            <Box>
              <LineChart 
                axis={axis} 
                layout={this.props.layout}
                min={min}
                max={max}
                title={title}
                series={series}
              />
            </Box>
          </div>
        </Box>
      </Box>
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
