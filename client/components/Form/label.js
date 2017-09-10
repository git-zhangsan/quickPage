/*
 * @Author: zhanghuiming
 * @Date:   2017-09-10 10:32:20
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-10 10:36:18
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Label = (props) => {
	const {
		className,
		name,
		...others
	} = props;
	const els = classNames({
		[className]: className
	})
	return (
		<label htmlFor={name} className={els}{...others}></label>
	)
}

Label.propTypes = {
	defaultText: PropTypes.string
};
Label.defaultProps = {
	defaultText: ''
}

export default Label;