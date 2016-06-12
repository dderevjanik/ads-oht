import React from 'react';
import Hashtable from './../utils/hashtable'
import HashView from './HashView';

class HashTables extends React.Component {

  constructor() {
    super();
    this.state = {
      hashTables: [new Hashtable(6)],
      capacity: 6
    };
  }

  changeCapacity(capacity) {
    const numb = parseInt(capacity);
    this.setState({
      capacity: isNaN(numb) ? 0 : numb
    });
  }

  addTable() {
    this.state.hashTables.push(new Hashtable(this.state.capacity));
    this.forceUpdate();
  }

  render() {
    return (
      <div className="hashtables">
        <div className="hashtables-container">
          {this.state.hashTables.map((table, index) => {
            return (<HashView key={index} hashTable={table}/>);
          })}
        </div>
        <div className="controls" style={{float: 'right', marginRight: 50}}>
          <button type="button" onClick={() => this.addTable()} className="btn btn-primary">Add Hashtable</button>
          <input type="text" onChange={(event) => this.changeCapacity(event.target.value)} value={this.state.capacity}/>
        </div>
      </div>
    );
  }

};

export default HashTables;