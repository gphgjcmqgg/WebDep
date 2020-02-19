import React, { Component } from 'react';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.age,
            state: 0,
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

    onParentGetAge() {
        this.props.greeting(this.state.age);
    }

    onModifyTitle(event) {
        this.props.changeTitle(event.target.value);
    }
    render() {
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
                    <input type="text" defaultValue={this.props.title} onChange={(e)=> {this.onModifyTitle(e)}}></input>
                    <br />
                    <button onClick={() => { this.onParentGetAge(); }} className="btn btn-primary">Parent Get Age</button>
                    
                </div>
            </div>
        );

    }

}