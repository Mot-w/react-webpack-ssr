import React, { Component } from 'react';
import { render } from 'react-dom';
import './header.less';
import '../../font/iconfont.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render () {
        return (
            <header className='app-header'>
                <div className="header-content">
                    <div className="header-brand">
                        Brand
                    </div>
                    <div className="header-menu">
                        <Link to="/">首页</Link>
                        <Link to="/explore">发现</Link>
                    </div> 
                    <div className="header-search">
                        <div className="header-search-input">
                            <input type="text" placeholder="搜索你感兴趣的内容..."/>
                        </div>
                        <div className="header-search-but">
                            添加
                        </div>
                    </div>
                    <div className="header-user">
                        <div className="header-user-notice">
                            <i className="iconfont icon-remind"></i>
                        </div>
                        <div className="header-user-msg">
                            <i className="iconfont icon-feedback"></i>
                        </div>
                        <div className="header-user-center">
                            <div className="user-avatar"></div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}