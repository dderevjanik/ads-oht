import React from 'react';
import Hashtable from './../utils/hashtable'

class HashView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hashTable: props.hashTable,
      key: '',
      value: '',
      updateIndex: -1,
      found: false
    };
  }

  changeKey(key) {
    const [found, index] = this.state.hashTable.find(key);
    this.setState({
      key: key,
      updateIndex: index,
      found: found
    });
  }

  changeValue(value) {
    this.setState({
      value: value
    });
  }

  deleteKey() {
    this.state.hashTable.del(this.state.key);
    this.setState({
      updateIndex: -1
    });
  }

  addKey() {
    this.state.hashTable.set(this.state.key, this.state.value);
    this.state.found = true;
    this.changeKey(this.state.key);
    this.forceUpdate();
  }

  render() {
    const capacityState = (this.state.hashTable._num > this.state.hashTable._table.length*0.5-1)
      ? "danger"
      : "default";
    return (
      <div className="hashtable-view" style={{marginBottom: 50}}>
        <table className="table table-inverse hashtable">
          <thead>
            <tr>
                <th>index</th>
                {this.state.hashTable._table.map((item, index) =>
                  <th key={index}>
                    {(index === this.state.updateIndex)
                      ? (this.state.found)
                        ? (<span className="label label-warning">{index}</span>)
                        : (this.state.hashTable._num > this.state.hashTable._table.length * 0.5)
                          ? (<span className="label label-danger">{index}</span>)
                          : (<span className="label label-success">{index}</span>)
                      : index}
                  </th>
                )}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>key</td>
              {this.state.hashTable._table.map((item, index) => {
                return (<td key={index}>{((item === null) || (item === 'AVAL')) ? '' : item[0]}</td>)
              })}
            </tr>
            <tr>
              <td>value</td>
              {this.state.hashTable._table.map((item, index) => {
                return (<td key={index}>{((item === null) || (item === 'AVAL')) ? '' : item[1]}</td>)
              })}
            </tr>
          </tbody>
        </table>
        <div className="controls">
          <span className={`label label-${capacityState}`}> Capacity: {this.state.hashTable._num}</span>
          <input type="text" placeholder="key" onChange={(event) => this.changeKey(event.target.value)} value={this.state.key}/>
          <input type="text" placeholder="value" onChange={(event) => this.changeValue(event.target.value)} value={this.state.value}/>
          <button className="btn btn-success" onClick={() => this.addKey()}> add key</button>
          <button className="btn btn-danger" onClick={() => this.deleteKey()}>delete key</button>
        </div>
      </div>
    );
  }

};

export default HashView;
