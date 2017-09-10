/*
 * @Author: zhanghuiming
 * @Date:   2017-07-31 16:15:28
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-10 14:28:34
 */

'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {
	Input,
	Label,
	Checkbox,
	Form
} from '../components/mixins';
import './style.scss';
export default class Login extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="container">
				<Form method="post" className="form-signin">
					<h2 className="form-signin-heading">Please login in</h2>
					<Label name="username" className="sr-only">userName:</Label>
					<Input type="text" name="username" className="form-control" placeholder="Nickname"/>
					<Label name="password" className="sr-only">passWord:</Label>
					<Input type="password" name="password" className="form-control" placeholder="Password"/>
					<div className="checkbox">
						<label htmlFor="ckbox">
							<input name="ckbox" type="checkbox" value="remember-me"/>
						Remember me
						</label>
					</div>

					<Input type="submit" value="Login in" className="btn btn-lg btn-primary btn-block"/>
				</Form>
        	</div>
		);
	}
}