import React, { Component } from 'react';
import * as RecordAPI from '../utils/RecordsAPI';

class Record extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    }
  }
  handleDelete(event) {
    event.preventDefault();
    RecordAPI.deleteData(this.props.record.id).then(
      res => {
        this.props.deleteData(res.data);
      }
    )
    .catch(
      error => {
        console.log(error.message);
      })
  }

  handleUpdate(event) {
    event.preventDefault();
    const updateData = {
      date: this.refs.date.value,
      title: this.refs.title.value,
      amount: Number(this.refs.amount.value)
    }
    RecordAPI.updateData(this.props.record.id, updateData).then(
      res => {
        this.setState({ edit: false })
        this.props.updateData(res.data);
        
      }
    )
    .catch(
      error => {
        console.log(error.message);
      })
  }

  toggleEdit() {
    this.setState({
      edit: !this.state.edit
    });
  }

  render() {
    if (this.state.edit) {
      return (
        <tr>
          <td><input type="text" className="form-control" defaultValue={this.props.record.date} ref="date"></input></td>
          <td><input type="text" className="form-control" defaultValue={this.props.record.title} ref="title"></input></td>
          <td><input type="text" className="form-control" defaultValue={this.props.record.amount} ref="amount"></input></td>
          <td>
            <button type="submit" className="btn btn-info mr-1" onClick={this.handleUpdate.bind(this)}>update</button>
            <button type="submit" className="btn btn-danger" onClick={this.toggleEdit.bind(this)}>canel</button>
          </td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td>{this.props.record.date}</td>
          <td>{this.props.record.title}</td>
          <td>{this.props.record.amount}</td>
          <td>
            <button type="submit" className="btn btn-info mr-1" onClick={this.toggleEdit.bind(this)}>edit</button>
            <button type="submit" className="btn btn-danger" onClick={this.handleDelete.bind(this)}>delete</button>
          </td>
        </tr>
      );
    }
    
  }
}

export default Record;