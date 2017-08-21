/*
 * @Author: zhanghuiming
 * @Date:   2017-08-21 16:30:22
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-08-21 17:00:57
 */
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import TagItem from '../TagItem';
export default class NoteItem extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		var markHTML = this.props.content.map(function(item, i) {
			return (
				<div  key={i}>
					<p>{item.time}</p> 
					<h3> {item.title} </h3>
					<TagItem tags={item.tags}/>
				</div>
			)
		});
		return (
			<div>
	        	{markHTML}
        	</div>
		);
	}

}