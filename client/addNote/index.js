/*
 * @Author: zhanghuiming
 * @Date:   2017-09-10 17:53:59
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-10 19:22:03
 */
'use strict';
import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import {
	Input,
	Label,
	Checkbox,
	Form,
	NavBar,
	MenuWrap,
	MenuLink
} from '../components/mixins';
import './style.scss';
export default class addNote extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="container">
				<div className="header clearfix">
					<NavBar>
				  		<MenuWrap className="nav nav-pills float-right">
							<li className="nav-item">
							<MenuLink className="nav-link" text="Home" linkURL="/"/>
							</li> 
							<li className="nav-item">
							<MenuLink className="nav-link" text="Notes" linkURL="/mynote"/>
							</li> 
							<li className="nav-item">
							<MenuLink className="nav-link active" text="New Note" linkURL="/addnote"/>
							</li> 
							<li className="nav-item">
							<MenuLink className="nav-link" text="Tags" linkURL="/mytags"/>
							</li> 
						</MenuWrap>
					</NavBar>
					<h3 className="text-muted">New Blog</h3>
				</div>
				<Form method="post" className="addNote-form">
					<div className="row">
						<div className="col-md-4"></div> 
						<div className="col-md-4"><Input type="text" name="title" className="form-control" placeholder="Title"/></div> 
						<div className="col-md-4"></div> 
					</div>
					
					
					<textarea rows="15" id="addnote_con" name="content" className="form-control"  placeholder="Please enter the content here"></textarea>
					<div className="row">
					<div className="col-md-4"></div> 
					<div className="col-md-4"><Input type="text" name="tags" placeholder="Use ',' separate" className="form-control" /></div> 
					<div className="col-md-4"></div> 
	
            		</div>
            		<Input type="submit" id="addnote_sub_btn" value="Submit" className="btn btn-lg btn-primary btn-block"/>
				</Form>
        		</div>
		);
	}
}