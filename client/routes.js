/*
 * @Author: zhanghuiming
 * @Date:   2017-06-22 17:39:23
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-07-31 16:23:38
 */

'use strict';
import React from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'

import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
export default class Routes extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<Router>
				<div>
		<Route path="/" component={HomePage}/> < Route path = "/login"
		component = {
			LoginPage
		}
		/>
				</div>
      		</Router>
		);
	}

}