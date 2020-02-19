import React, { Component } from 'react';
import * as RecordAPI from '../utils/RecordsAPI';

class RecordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      title:'',
      amount:''
    }
  }

  textChange(event) {
    let obj,name;
    name = event.target.name;
    this.setState(
      (
        obj = {},
        obj[""+ name] = event.target.value,
        obj
      )
    );
  }
  vaild() {
    return this.state.date && this.state.title && this.state.amount;
  }

  handSubmit(event) {
    event.preventDefault();
    const data = {
      date: this.state.date,
      title:this.state.title,
      amount: Number(this.state.amount)
    }
    RecordAPI.createData(data).then(
      res => {
        this.props.addData(res.data)
        this.setState({
          date: '',
          title:'',
          amount:''
        });
      }
    )
    .catch(
      error => {
        console.log(error.message);
      })
  }
  render() {
    return (
      <form className="form-inline mb-3" onSubmit={this.handSubmit.bind(this)}>
        <div className="form-group mr-1">
          <input type="text" className="form-control" placeholder="Date" onChange={(e)=> { this.textChange(e)}} name="date" value={this.state.date}/>
        </div>
        <div className="form-group mr-1">
          <input type="text" className="form-control" placeholder="Title"  onChange={this.textChange.bind(this)} name="title" value={this.state.title}/>
        </div>
        <div className="form-group mr-1">
          <input type="text" className="form-control" placeholder="Amount"  onChange={(e)=> { this.textChange(e)}} name="amount" value={this.state.amount}/>
        </div>
        <button type="submit" className="btn btn-primary" disabled={!this.vaild()}>create record</button>
      </form>
    );
  }
}

export default RecordForm;