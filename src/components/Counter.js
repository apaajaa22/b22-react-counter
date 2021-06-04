import React, {Component} from "react"
import "../components/Counter"
export default class Counter extends Component {
    state = {
        counter: 0,
    }
    onCount = (type) => {
        if (type === "plus") {
            if (this.state.counter < 10) {
                this.setState({counter: this.state.counter + 1})
            } else {
                window.alert("number cannot be more than 10")
            }
        }
        if (type === "minus") {
            if (this.state.counter > 0) {
                this.setState({counter: this.state.counter - 1})
            } else {
                window.alert("number cannot be less than 0")
            }
        }
    }
    render() {
        return (
            <div className="containerApp">
                <h1>Selamat Datang di aplikasi {this.props.name}</h1>
                <div className="container">
                    <button onClick={() => this.onCount("minus")}>-</button>
                    <p className="text">{this.state.counter}</p>
                    <button onClick={() => this.onCount("plus")}>+</button>
                </div>
            </div>
        )
    }
}
