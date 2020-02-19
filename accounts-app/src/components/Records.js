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
              </tr>
            </thead>
            <tbody>
              {records.map((record) => <Record key={record.id} {...record} />)}
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