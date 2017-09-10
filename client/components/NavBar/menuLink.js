/*
 * @Author: zhanghuiming
 * @Date:   2017-09-10 18:22:32
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-10 18:40:57
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const MenuLink = (props) => {
	const {
		className,
		linkURL,
		...others
	} = props;
	const els = classNames({
		[className]: className
	})
	return (

		<a href={linkURL} className={els}{...others}>{props.text}</a>

	)
}

export default MenuLink;