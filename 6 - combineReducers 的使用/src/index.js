import React ,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ResetStyle} from './style.js'
import {IconfontStyle} from './statics/iconfont/iconfont.js'


ReactDOM.render(
    <Fragment>
        <ResetStyle/>
        <IconfontStyle/>
        <App/>
    </Fragment>
    ,document.getElementById('root'));


