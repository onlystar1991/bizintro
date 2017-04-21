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
import Paragraph from 'grommet/components/Paragraph';
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


class Login extends Component {

  constructor() {
    super();
    this._onSubmit = this._onSubmit.bind(this);
  }

  componentDidMount() {
    pageLoaded('Login');
    this.props.dispatch(navEnable(false));
  }

  componentWillUnmount() {
    this.props.dispatch(navEnable(true));
  }

  _onSubmit(fields) {
    console.log(fields);
    const { dispatch } = this.props;
    const { router } = this.context;
    dispatch(login(fields.username, fields.password, () => (
      router.history.push('/dashboard')
    )));
  }

  render() {
    const { session: { error } } = this.props;

    return (
      <Box>
        <Box className="landing-box">
          <Header>
            <Anchor className='landing-logo'>
              Bizintro
            </Anchor>
            <Box flex={true}
              justify='end'
              direction='row'
              pad='medium' size='small'
              responsive={false} className='landing-nav-menus'>
              <div className='landing-page-menus'>
                <Anchor>Features</Anchor>
                <Anchor>Pricing</Anchor>
                <Anchor>Support</Anchor>
                <Anchor>Blog</Anchor>
              </div>
              <Menu className='landing-page-menu'
                icon={<MenuIcon />}>
                <Anchor href='#'
                  className='active'>
                  Features
                </Anchor>
                <Anchor href='#'>
                  Pricing
                </Anchor>
                <Anchor href='#'>
                  Support
                </Anchor>
                <Anchor href='#'>
                  Blog
                </Anchor>
              </Menu>
              &nbsp;&nbsp;
              <Button label="Sign In" href="/login" className="landing-sign-button"/>
            </Box>
          </Header>
          <Section>
            <Title className='landing-title'>Take a moments that matters.</Title>
            <Box className='get-started-div'>
              <div className='get-started-title'>Sign in to lend your hand to the network.</div>
              <Form className="get-started-form">
                <TextInput
                  name='email'
                  value=''
                  />
                &nbsp;&nbsp;
                  <Button href="#" label="Get Started" className="get-started-button" />
              </Form>
              <div className="landing-footer-menu">Already joined Bizintro? &nbsp;&nbsp;<Anchor label='Sign In' href='/login' /></div>
            </Box>
          </Section>
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

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  session: PropTypes.shape({
    error: PropTypes.string
  })
};

Login.contextTypes = {
  router: PropTypes.object.isRequired,
};

const select = state => ({
  session: state.session
});

export default connect(select)(Login);
