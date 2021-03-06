/*
 * @Author: zhanghuiming
 * @Date:   2017-09-10 10:59:41
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-10 11:22:21
 */
import React from 'react';
import classNames from 'classnames';

/**
 * weui wrapper for checkbox
 *
 */
const Checkbox = (props) => {
	const {
		className,
		...others
	} = props;
	const cls = classNames({
		[className]: className
	});

	return (
		<div>
            <input className={cls} type="checkbox" {...others}/>
            <span className="weui-icon-checked"></span>
        </div>
	);
};

export default Checkbox;