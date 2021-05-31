import React from 'react';

export class LeftSphereSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     values: [],
  
      
    };
   
  }
handleChange = e => {
  this.setState({ [e.target.name]: e.target.value }, () => {
    if (this.props.onChange) {
      this.props.onChange(this.state);
    }
  })
};
  

  componentDidMount() {
    this.setState({
     values: [
        {id: '+/-', name: '+/-'},
        {id: '-8.00', name: '-8.00'},
        {id: '-7.75', name: '-7.75'},
        {id: '-7.50', name: '-7.50'},
        {id: '-7.25', name: '-7.25'},
        {id: '-7.00', name: '-6.00'},
        {id: '-6.75', name: '-6.75'},
        {id: '-6.50', name: '-6.50'},
        {id: '-6.25', name: '-6.25'},
        {id: '-6.00', name: '-6.00'},
        {id: '-5.75', name: '-5.75'},
        {id: '-5.50', name: '-5.50'},
        {id: '-5.25', name: '-5.25'},
        {id: '-5.00', name: '-5.00'},
        {id: '-4.75', name: '-4.75'},
        {id: '-4.50', name: '-4.50'},
        {id: '-4.25', name: '-4.25'},
        {id: '-4.00', name: '-4.00'},
        {id: '-3.75', name: '-3.75'},
        {id: '-3.50', name: '-3.50'},
        {id: '-3.25', name: '-3.25'},
        {id: '-3.00', name: '-3.00'},
        {id: '-2.75', name: '-2.75'},
        {id: '-2.50', name: '-2.50'},
        {id: '-2.25', name: '-2.25'},
        {id: '-2.00', name: '-2.00'},
        {id: '-1.75', name: '-1.75'},
        {id: '-1.50', name: '-1.50'},
        {id: '-1.25', name: '-1.25'},
        {id: '-1.00', name: '-1.00'},
        {id: '-0.75', name: '-0.75'},
        {id: '-0.50', name: '-0.50'},
        {id: '-0.25', name: '-0.25'},
        {id: '0.00', name: '0.00'},
        {id: 'infinity', name: '∞'},
        {id: 'plano', name: 'plano'},
        {id: 'balance', name: 'balance'},
        {id: '+0.25', name: '+0.25'},
        {id: '+0.50', name: '+0.50'},
        {id: '+0.75', name: '+0.75'},
        {id: '+1.00', name: '+1.00'},
        {id: '+1.25', name: '+1.25'},
        {id: '+1.50', name: '+1.50'},
        {id: '+1.75', name: '+1.75'},
        {id: '+2.00', name: '+2.00'},
        {id: '+2.25', name: '+2.25'},
        {id: '+2.50', name: '+2.50'},
        {id: '+2.75', name: '+2.75'},
        {id: '+3.00', name: '+3.00'},
      ]
    });
  }


  render () {
    const { values } = this.state;
  
    let valuesList = values.length > 0
    	&& values.map((item, i) => {
      return (
        <option key={i}   value={item.id}>{item.name}</option>
      )
    }, this);
        
    return (
      <div>
        <select name="leftEyeSphere" onChange={this.handleChange}>
          {valuesList}
        </select>
    
           
        
      </div>
    );

  }
}

