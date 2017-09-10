/*
 * @Author: zhanghuiming
 * @Date:   2017-09-10 11:27:29
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-10 14:34:37
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
export default class Register extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="container">
				<Form method="post" className="form-signin">
					<h2 className="form-signin-heading">Please Sigin in</h2>

					<Label name="name" className="sr-only">UserName:</Label>
					<Input type="text" name="name" className="form-control" placeholder="Nickname"/>
					<Label name="password" className="sr-only">PassWord:</Label>
					<Input type="password" name="password" className="form-control" placeholder="Password"/>

					<Label name="confirmPass" className="sr-only">Confirm password:</Label>
					<Input type="password" name="confirmPass" className="form-control" placeholder="Confirm password"/>

					<Label name="emails" className="sr-only">Email:</Label>
					<Input type="email" name="emails" className="form-control" placeholder="Email"/>
					<br/>
					<Input type="submit" value="Sigin in" className="btn btn-lg btn-primary btn-block"/>
				</Form>
        	</div>
		);
	}
}