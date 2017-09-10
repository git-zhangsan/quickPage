/*
 * @Author: zhanghuiming
 * @Date:   2017-09-10 18:28:59
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-10 18:29:18
 */
import React, {
	Component
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class MenuWrap extends Component {
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
			<ul className={cls} {...others}>{children}</ul>
		);
	}
}