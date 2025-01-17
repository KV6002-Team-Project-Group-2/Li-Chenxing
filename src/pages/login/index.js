import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox,Logintitle, Input, Button } from './style';
import { actionCreators } from './store';

class Login extends PureComponent {
	render() {
		const { loginStatus } = this.props;
		if (!loginStatus) {
			return (
				<LoginWrapper>
					<LoginBox>
				<Logintitle>Sign-in</Logintitle>
						<Input placeholder='Account' innerRef={(input) => {this.account = input}}/>
						<Input placeholder='Password' type='password' innerRef={(input) => {this.password = input}}/>
						<Input placeholder='Email Address' innerRef={(input) => {this.account = input}}/>
						<Button onClick={() => this.props.login(this.account, this.password)}>Login</Button>
					</LoginBox>
				</LoginWrapper>
			)
		}else {
			return <Redirect to='/'/>
		}
	}
}

const mapState = (state) => ({
	loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
	login(accountElem, passwordElem){
		dispatch(actionCreators.login(accountElem.value, passwordElem.value))
	}
})

export default connect(mapState, mapDispatch)(Login);