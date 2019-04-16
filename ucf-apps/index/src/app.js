/**
 * 入口、导入组件样式、渲染
 */
import '@babel/polyfill';
import React from 'react';
import { render } from 'mirrorx';
import App from "./container";

import 'antd-mobile/dist/antd-mobile.css';
import './app.less';

render(<App />, document.querySelector("#app"));