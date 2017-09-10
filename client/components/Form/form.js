/*
 * @Author: zhanghuiming
 * @Date:   2017-09-10 10:21:50
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-10 10:29:56
 */
import React, {
	Component
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Form extends Component {
	render() {
		const {
			children,
			className,
			...others
		} = this.props;
		const cls = classNames({
			[className]: className
		});
		return (
			<form className={cls} {...others}>{children}</form>
		);
	}
}