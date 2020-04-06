import Router from './Router'
import React from 'react'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>作业综合展示</h1>
                <li>
                    <a href="caculator">caculator</a>
                </li>
                <li>
                    <a href="validator">validator</a>
                </li>
                <li>
                    <a href="poker">poker</a>
                </li>
                <Router />

                <div>
                    <hr/>
                    <h3>使用了react-router中文网站：https://react-guide.github.io/react-router-cn/index.html</h3>
                </div>
            </div>
        );
    }
}