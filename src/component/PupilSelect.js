import React, { Component } from 'react';

export class PupilSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     values: [],
      colours: {},
      selectValues: ""
    };
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }
  handleDropdownChange(e){
    this.setState({ selectValues: e.target.value });
}
  componentDidMount() {
    this.setState({
     values: [
       
        {id: '63', name: '63 (Average/ Dont know)'},
        {id: '55 ', name: ' 55'},
        {id: ' 56', name: ' 56'},
        {id: ' 57', name: '57 '},
        {id: '58 ', name: ' 58'},
        {id: '59 ', name: '59 '},
        {id: '60 ', name: '60 '},
        {id: ' 61', name: ' 61'},
        {id: ' 62', name: '62 '},
        {id: ' 64', name: ' 64'},
        {id: '65 ', name: '65 '},
        {id: ' 66', name: ' 66'},
        {id: ' 67', name: '67 '},
        {id: '68 ', name: '68 '},
        {id: '69 ', name: ' 69'},
        {id: ' 70', name: ' 70'},
        {id: ' 71', name: '71 '},
        {id: ' 72', name: ' 72'},
        {id: ' 73', name: ' 73'},
        {id: ' 74', name: ' 74'},
        {id: ' 75', name: ' 75'},

        
        
      ]
    });
  }


  render () {
    const { values } = this.state;

    let valuesList = values.length > 0
    	&& values.map((item, i) => {
      return (
        <option key={i} value={item.id}>{item.name} </option>
      )
    }, this);

    return (
      <div>
        <select onChange={this.handleDropdownChange}>
          {valuesList}
        </select>
        <div>
            Selected value is : {this.state.selectValues}
        </div>
      </div>
    );
  }
}

