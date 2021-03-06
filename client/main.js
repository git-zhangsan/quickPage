/*
 * @Author: zhanghuiming
 * @Date:   2017-06-22 17:39:08
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-10 19:18:27
 */

'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import Login from './login/index.js';
import addNote from './addNote/index.js';
import {
	HomePage,
	LoginPage,
	NoteItem,
	TagItem
} from './components/mixins.js'

//ReactDOM.render(<Routes />, document.getElementById('app'));