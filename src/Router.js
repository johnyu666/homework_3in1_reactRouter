//引入react jsx写法的必须
import React from 'react';
//引入需要用到的页面组件 
import Caculator from './homework/Caculator.js';
import Poker from './homework/Poker.js';
import Validator from './homework/Validator';
//引入一些模块
import { BrowserRouter as Router, Route } from "react-router-dom";

function router() {
    return (
        <Router>
            <Route path="/validator" component={Validator} />
            <Route path="/poker" component={Poker} />
            <Route path="/caculator" component={Caculator} />
        </Router>);
}

export default router;