import React from 'react'

export default class Validator extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: '', email: '', errInfo: {} }
        this.passed = true
    }
    _add = event => {
        let emailReg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        event.preventDefault()
        let errInfo = {}

        this.passed=true
        if (this.state.name.length === 0) {
            this.passed = false
            errInfo.name = "名字不能为空"
        }
        if (!emailReg.test(this.state.email)) {
            this.passed = false
            errInfo.email = "email不能为空"
        }
        this.setState({ errInfo: errInfo },()=>{
            if (this.passed) {
                alert("将要提交表单123")
            }
        })
    }
    render() {
        return (
            <div>
                <h1>校验测试</h1>
                <form onSubmit={event => this._add(event)} action="">
                    <input type="text" value={this.state.name} onChange={event => this.setState({ name: event.target.value })} />
                    <span>{this.state.errInfo.name}</span>
                    <br />
                    <input type="text" value={this.state.email} onChange={event => this.setState({ email: event.target.value })} />
                    <span>{this.state.errInfo.email}</span>
                    <br />
                    <button>添加</button>
                </form>
                <h3>{this.state.name}</h3>
            </div>
        )
    }
}