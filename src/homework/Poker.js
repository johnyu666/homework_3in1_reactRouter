import React from 'react'
import './assets/Poker.css'

export default class Poker extends React.Component {
    constructor(props) {
        super(props)
        this.state = { nums: [],title:'start',clz:'start'}
        this.fd=null
    }
    _start = () => {
        if(this.fd===null){
            this.setState({title:'stop',clz:'stop'})
            this.fd= setInterval(() => {
                let as = []
                for (let i = 0; i < 4; i++) {
                    let x = Math.floor(Math.random() * 7 + 1)
                    as[i] = x
                }
                this.setState({ nums: as })
            }, 1000)
        }
        else{
            this.setState({title:'start',clz:'start'})
            clearInterval(this.fd)
            this.fd=null
        }
    }
    render() {
        return (
            <div>
                <button className={this.state.clz} onClick={this._start}>{this.state.title}</button>
                <div id="show">
                    {this.state.nums.map((num, index) => <span className='pk' key={index}>
                        <img alt="poker" src={require('./assets/R' + num + '.png')}></img>
                    </span>)}
                </div>
            </div>
        )
    }
}