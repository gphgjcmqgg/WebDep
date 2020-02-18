import React, { Component } from 'react';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.age,
            state: 0
        }
        setInterval(()=> {
            this.setState({
                state: this.state.state + 1
            })
        },1000)
    }

    onAgeAdd() {
        this.setState({
            age: this.state.age + 3
        });
    }

    render() {
        console.log(this.props.children);
        return (
            <div className="container">
                <div className="row"></div>
                <div className="col-xs-1 col-xs-offset-11">
                    <div>your name is {this.props.name} your age is {this.state.age}</div>
                    <p>Status:{this.state.state}</p>
                    {/* <button onClick={this.onAgeAdd.bind(this)} className="btn btn-primary">Make Your Order</button> */}
                    <button onClick={() => { this.onAgeAdd(); }} className="btn btn-primary">Make Your Order</button>
                    <div>
                        <h4>
                            {this.props.user.hobby.map((item, index) =>
                                <li key={index}>{item}</li>
                            )}
                        </h4>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );

    }

}