import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.less'
let imgTest = require('./images/testimg.jpg')

ReactDOM.render(
    <h1 className='text'>
        <img src={imgTest} alt=""/>
        <p>你好世界</p>
    </h1>,
    document.getElementById('root')
)