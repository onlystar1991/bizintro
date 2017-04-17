import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Form from 'grommet/components/Form';
import LoginForm from 'grommet/components/LoginForm';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
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
        <Box className="login-form-box">
          <Section justify='between' align='center' pad='none' size='large' className="login-form-section">
            <span />
            <LoginForm align='start'
              title='Bizintro'
              rememberMe={true}
              secondaryText='Sign in to lend your hand to the network.'
            onSubmit={this._onSubmit} errors={[error]} usernameType='text' />
            <div className="login-form-foot">New to Bizintro?<Anchor label='Sign Up' href='#' /></div>
          </Section>
        </Box>
        <Footer direction='row' size='small'
          pad={{ horizontal: 'medium', vertical: 'small' }}>
          <span className='secondary'>&copy; 2017 Grommet Labs</span>
        </Footer>
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
