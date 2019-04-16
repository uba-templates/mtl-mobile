/**
 * 组织管理模块
 */

import React, { Component } from 'react';
import mirror, { actions } from 'mirrorx';
import { WingBlank, Flex, WhiteSpace } from 'antd-mobile';

import './index.less';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        actions.app.loadList();
    }

    render() {
        return (
            <div className="home-wrap">
                <WingBlank size="md">111</WingBlank>
                <WingBlank size="md">222</WingBlank>
            </div>
        );
    }
}

App.displayName = 'App';
export default App;
