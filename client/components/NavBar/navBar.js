/*
 * @Author: zhanghuiming
 * @Date:   2017-09-10 18:26:51
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-10 18:27:21
 */
import React, {
	Component
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class NavBar extends Component {
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
			<nav className={cls} {...others}>{children}</nav>
		);
	}
}