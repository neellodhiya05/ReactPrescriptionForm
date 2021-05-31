import React from 'react';

export class InterNearAddLeft extends React.Component {
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
       
        {id: '--', name: '--'},
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
        <option key={i} value={item.id}>{item.name}</option>
      )
    }, this);

    return (
      <div>
        <select onChange={this.handleChange} name="InterLeftNearAdd">
          {valuesList}
        </select>
        
      </div>
    );
  }
}

