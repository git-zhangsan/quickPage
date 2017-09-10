/*
 * @Author: zhanghuiming
 * @Date:   2017-09-10 10:21:23
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-10 10:33:48
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Input = (props) => {
	const {
		className,
		...others
	} = props;
	const els = classNames({
		[className]: className
	})
	return (
		<div>
			<input type="text" className={els}{...others}/>
			<span className="input-checked"></span>
		</div>
	)
}

Input.propTypes = {
	defaultValue: PropTypes.string
};
Input.defaultProps = {
	defaultValue: undefined
}

export default Input;