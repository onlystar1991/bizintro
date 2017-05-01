import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Value from 'grommet/components/Value';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import FormField from 'grommet/components/FormField';
import Form from 'grommet/components/Form';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Footer from 'grommet/components/Footer';
import Logo from 'grommet/components/icons/Grommet';
import Box from 'grommet/components/Box';
import TextInput from 'grommet/components/TextInput';
import Button from 'grommet/components/Button';
import Title from 'grommet/components/Title';
import { login } from '../actions/session';
import { navEnable } from '../actions/nav';
import { pageLoaded } from './utils';

import MenuIcon from 'grommet/components/icons/base/Menu';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Label from 'grommet/components/Label';
import FormNextLinkIcon from 'grommet/components/icons/base/FormNextLink';
import CubesIcon from 'grommet/components/icons/base/Cubes';
import ComplianceIcon from 'grommet/components/icons/base/Compliance';
import Headline from 'grommet/components/Headline';
import Paragraph from 'grommet/components/Paragraph';
import Card from 'grommet/components/Card';

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8,
  },
  content: {
    padding: '16px',
  },
};


class Pricing extends Component {

  onSetOpen(open) {
    this.setState({open: open});
  }

  menuButtonClick(ev) {
    ev.preventDefault();
    this.onSetOpen(!this.state.open);
  }

  renderPropCheckbox(prop) {
    const toggleMethod = (ev) => {
      const newState = {};
      newState[prop] = ev.target.checked;
      this.setState(newState);
    };

    return (
      <p key={prop}>
        <input type="checkbox" onChange={toggleMethod} checked={this.state[prop]} id={prop} />
        <label htmlFor={prop}> {prop}</label>
      </p>);
  }

  renderPropNumber(prop) {
    const setMethod = (ev) => {
      const newState = {};
      newState[prop] = parseInt(ev.target.value, 10);
      this.setState(newState);
    };

    return (
      <p key={prop}>
         {prop} <input type="number" onChange={setMethod} value={this.state[prop]} />
      </p>);
  }

  constructor(props) {
    super(props);

    this.state = {
      docked: false,
      open: false,
      transitions: true,
      touch: true,
      shadow: true,
      pullRight: true,
      touchHandleWidth: 20,
      dragToggleDistance: 30,
    };

    this.renderPropCheckbox = this.renderPropCheckbox.bind(this);
    this.renderPropNumber = this.renderPropNumber.bind(this);
    this.onSetOpen = this.onSetOpen.bind(this);
    this.menuButtonClick = this.menuButtonClick.bind(this);
  }

  render() {
  

    return (
      <Box>
        <Hero background={<Image src='/img/rectangle.png'
          fit='cover'
          full={true} 
          align={{"left": true}}/>}
          backgroundColorIndex='dark'
          size='large'>
          <Header className="pricing-header">
            <Anchor className="pricing-title">Bizintro</Anchor>
            <Box flex={true} direction='row' responsive={true} className='pricing-menu'>
              <Anchor>Feature</Anchor>
              <Anchor>Pricing</Anchor>
              <Anchor>Support</Anchor>
              <Anchor>Blog</Anchor>
            </Box>
            <Button href='#' plain={false} secondary={false} accent={false} className="pricing-button">Sign In</Button>
          </Header>
          <Section className="pricing-section">
            <Box className="pricing-section-up">
              <Title className="pricing-section-up-title">Pricing Guide</Title>
              <Paragraph className="pricing-section-up-paragragh">
                Lorem ipsum dolor sit amet,dicat sonet congue ei mei, est summo copiosae facilisi an. Sumo accumsan mel ea, eu ignota hendrerit consequuntur me.
              </Paragraph>
            </Box>
            <Box direction="row" pad='none' margin='none' className="pricing-section-down">
              <Box className="pricing-section-down-item">
                <Box pad='none' margin='none' className="pricing-section-down-moneytype">Fre</Box>
                <Box direction="row" pad='none' margin='none'>
                  <Box pad='none' margin='none' className="pricing-section-down-moneysymbol">$</Box>
                  <Box pad='none' margin='none' className="pricing-section-down-moneynumber">0</Box>
                </Box>
                <Box className="pricing-section-down-paragragh">Lorem dolores incidunt similique aliquid rerum reiciendis est!<br />
                  <br />Placeat minma volupras quis tenetur deleniti harum<br />
                  <br /> Nesciunt aut consequatur consequuntur sequi delectus quam qui. llo odio dolorem sunt cupiditate
                </Box>
                <Button label='Help your network'
                  href='#'
                  plain={false}
                  primary={true}
                  className="pricing-section-down-item-button" />
              </Box>
              <Box className="verticalline" />
              <Box className="pricing-section-down-item">
                <Box pad='none' margin='none' className="pricing-section-down-moneytype">Fre</Box>
                <Box direction="row" pad='none' margin='none'>
                  <Box pad='none' margin='none' className="pricing-section-down-moneysymbol">$</Box>
                  <Box pad='none' margin='none' className="pricing-section-down-moneynumber">0</Box>
                </Box>
                <Box className="pricing-section-down-paragragh">Lorem dolores incidunt similique aliquid rerum reiciendis est!<br />
                  <br />Placeat minma volupras quis tenetur deleniti harum<br />
                  <br /> Nesciunt aut consequatur consequuntur sequi delectus quam qui. llo odio dolorem sunt cupiditate
                </Box>
                <Button label='Create Membership'
                  href='#'
                  plain={false}
                  primary={true}
                  className="pricing-section-down-item-button" />
              </Box>
            </Box>
          </Section>
        </Hero>
        <Section className="pricing-section">
          <Box className="pricing-section-first">
            <Box className="pricing-section-first-title">Aenean sit amet solicitudin eros.</Box>
            <Box className="pricing-section-first-content">Lorem dolores incidunt similique aliquid rerum reiciendis est! Pleceat
            minima volptas quis tenetur deleniti harum. Nesciunt aut consequatur consequuntur sequi delectus quam qui. lllo odio
            dolorem sunt cupiditate nihil, ad veniam quibusdam suscipit unde laboriosam, laborum ratione, dicta nihil culpa. Dolor
             eveniet possimus possimus aut praesentium dignissimos sit debitis. Fugit minima totam provident optio aliquam! Magni tenetur
             doloremque rem tempore amet voluptatibus ipsum. Eos aliquid debitis sed mollitia laudantium sit? <br />
             <br /> Sit architecto veritatis neque ex laboriosam,laboriosam? Aliquid illum ullum ullam tenetur molestiae veniam velit quam.
             Facklis ipsam hic labore cupiditate illo soluta error molestias corporis quia, ipsa. Nobis ipsa nam eius esse illum unde.
             Veritatis tenetur incidunt consectetur dolore blanditiis.</Box>
          </Box>
          <Box direction='row' className="pricing-section-hero">
            <Hero background={<Image src='/img/pricing1.png'
              fit='cover'
              full={true} />}
              backgroundColorIndex='dark'
              className="pricing-section-hero-item" />
            <Hero background={<Image src='/img/pricing2.png'
              fit='cover'
              full={true} />}
              backgroundColorIndex='dark' 
              className="pricing-section-hero-item" />
            <Hero background={<Image src='/img/pricing3.png'
              fit='cover'
              full={true} />}
              backgroundColorIndex='dark'
              className="pricing-section-hero-item" />
            <Hero background={<Image src='/img/pricing4.png'
              fit='cover'
              full={true} />}
              backgroundColorIndex='dark'
              className="pricing-section-hero-item" />
          </Box>
        </Section>
        <Hero background={<Image src='/img/pricing.png'
          fit='cover'
          full={true} 
          align={{"left": true}}/>}
          backgroundColorIndex='dark'
          size='large'>
          <Box direction="row">
            <Box className="feature-heading">
              <Label className="feature-label">LABEL</Label>
              <Box className="feature-accelerate">Accelerate your transformation with the cloud</Box>
              <Box className="feature-hpe">HPE can help you benefit now from your right mix of cloud</Box>
              <Box direction="row" className="feature-more">
                <FormNextLinkIcon className="feature-arrow" />
                <Anchor>Learn More</Anchor>
              </Box>
            </Box>
          </Box>
        </Hero>
        <Box pad='small' responsive='true' wrap='true' className="feature-card-section">
          <Header className="feature-card-box-title">Our updates and happenings</Header>
          <Box direction='row' pad='small' responsive='true' wrap='true' className="feature-card-box">
            <Card thumbnail='/img/card.png'
              label='LABEL MEDIUM'
              heading='Heading 2'
              description='Paragraph Large, Vestibulum id ligula parta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo.'
              link={<Anchor icon={<FormNextLinkIcon />}
                    label='Primary'
                    href='#'
                    primary={false}
                    reverse={false}
                    disabled={false} />}
              className="feature-card-item" />
           <Card thumbnail='/img/card.png'
            label='LABEL MEDIUM'
            heading='Heading 2'
            description='Paragraph Large, Vestibulum id ligula parta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo.'
            link={<Anchor icon={<FormNextLinkIcon />}
                  label='Primary'
                  href='#'
                  primary={false}
                  reverse={false}
                  disabled={false} />}
            className="feature-card-item" />
           <Card thumbnail='/img/card.png'
            label='LABEL MEDIUM'
            heading='Heading 2'
            description='Paragraph Large, Vestibulum id ligula parta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo.'
            link={<Anchor icon={<FormNextLinkIcon />}
                  label='Primary'
                  href='#'
                  primary={false}
                  reverse={false}
                  disabled={false} />}
            className="feature-card-item" />
          </Box>
        </Box>
        <Box direction="column"
          pad={{ horizontal: 'medium', vertical: 'small' }}>
          <Box direction='row'
            justify='between'
            align='start'
            wrap={true}
            className='footer-menus'
            >
            <Box 
              justify='start'
              align='start'
              wrap={true}
              pad='small'
              colorIndex='light-1'
              >
              <div className='title'>Corportate</div>
              <Anchor>Accessiblity</Anchor>
              <Anchor>Careers</Anchor>
              <Anchor>Contact Us</Anchor>
              <Anchor>Corporate Responsibility</Anchor>
              <Anchor>Events</Anchor>
              <Anchor>Labs</Anchor>
              <Anchor>Inverstor Relations</Anchor>
              <Anchor>Leadership</Anchor>
              <Anchor>Newsroom</Anchor>
              <Anchor>Sitemap</Anchor>
            </Box>
            <Box 
              justify='start'
              align='start'
              wrap={true}
              pad='small'
              colorIndex='light-1'>
              <div className='title'>Partners</div>
              <Anchor>Find a Partners</Anchor>
              <Anchor>Partner Programms</Anchor>
            </Box>
            <Box 
              justify='start'
              align='start'
              wrap={true}
              pad='small'
              colorIndex='light-1'>
              <div className='title'>Social</div>
              <Anchor>LinkedIn</Anchor>
              <Anchor>Facebook</Anchor>
              <Anchor>Twitter</Anchor>
              <Anchor>You Tube</Anchor>
            </Box>
            <Box 
              justify='start'
              align='start'
              wrap={true}
              pad='small'
              >
              <div className='title'>Communities</div>
              <Anchor>Devloper Forums</Anchor>
              <Anchor>Enterprise Business</Anchor>
            </Box>
            <Box 
              justify='start'
              align='start'
              wrap={true}
              pad='small'
              >
              <div className='title'>Customer Resources</div>
              <Anchor>Enterprise Store</Anchor>
              <Anchor>Public Sector Store</Anchor>
              <Anchor>Education and Training</Anchor>
              <Anchor>Email Signup</Anchor>
            </Box>
            <Box 
              justify='start'
              align='start'
              wrap={true}
              pad='small'
              >
              <div className='title'>Legal</div>
              <Anchor>Privacy</Anchor>
              <Anchor>Terms of Use</Anchor>
              <Anchor>Cookies</Anchor>
            </Box>
          </Box>
          <Footer justify='between'>
            <Box direction='row'
              align='center'
              pad={{"between": "medium"}}>
              <Paragraph margin='none' className='login-page-paragraph'>
                &copy;2017 Bizintro Inc
              </Paragraph>
            </Box>
            <Menu direction='row'
              className="login-form-footer-menu"
              size='small'
              dropAlign={{"right": "right"}}>
              <Anchor href='#'>
                Terms of use
              </Anchor>
              <Anchor href='#'>
                Privacy
              </Anchor>
              <Anchor href='#'>
                Report a Bug
              </Anchor>
            </Menu>
          </Footer>
          <Footer>
            
          </Footer>
        </Box>
      </Box>
    );
  }
}

Pricing.propTypes = {
  dispatch: PropTypes.func.isRequired,
  box: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string,
      label: PropTypes.string
    }))
  }),
  state: PropTypes.shape({
    sidebarOpen: PropTypes.bool
  })
};

const select = state => ({
  box: state.box,
  nav: state.nav
});

export default connect(select)(Pricing);
