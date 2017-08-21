/*
 * @Author: zhanghuiming
 * @Date:   2017-06-22 14:08:58
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-07-31 16:29:29
 */

'use strict';
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
// require('./style.scss');
class Page extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="HomePage">
	        	<div className="container" style={{ width: '100%', height: '100%', padding: 0 , position: 'absolute' }}>
		          	<div className="action-btn">
						What is this ? you cai
		          	</div>
	        	</div> 
        	</div>
		);
	}

}

ReactDOM.render(<Page/>, document.getElementById('app'));