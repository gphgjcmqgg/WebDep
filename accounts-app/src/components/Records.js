import React, { Component } from 'react';
import Record from './Record';
import RecordForm from './RecordForm';
import * as RecordAPI from '../utils/RecordsAPI';


class Records extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      records: []
    }
  }

  componentDidMount() {
    RecordAPI.getData().then(
      res => {
        this.setState({
          records: res.data,
          isLoaded: true
        })
      }
    )
    .catch(
      error => {
        this.setState({
          isLoaded: true,
          error
        })
      })
  }

  handDataAdd(record) {
    this.setState({
      records: [
        ...this.state.records,
        record
      ]
    })
  }

  handDataDelete(record) {
    const newData = this.state.records.filter(item => item.id !== record.id);
    this.setState({
      records: newData
    });
  }

  handDataUpdate(record) {
    const newData = this.state.records.map(item => {
      if(item.id !== record.id) {
        return item;
      }
      return {
        ...item,
        ...record
      }
    });
    
    this.setState({
      records: newData
    });
  }


  render() {
    const { error, isLoaded, records } = this.state;
    let recordsComponent = '';
    if (error) {
      recordsComponent = <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      recordsComponent = <div>Loading...</div>;
    } else {
      recordsComponent = (
        <div>
            <RecordForm addData={this.handDataAdd.bind(this)}/>
            <table className="table table-bordered">
            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => 
                (
                  <Record key={record.id} 
                    record={record}  
                    deleteData={this.handDataDelete.bind(this)}
                    updateData={this.handDataUpdate.bind(this)}/>
                )
              )}
            </tbody>
          </table>
        </div>
      );
    }
    return (
      <div>
          <h2>Records</h2>
          {recordsComponent}
        </div>
    )
  }
}

export default Records;