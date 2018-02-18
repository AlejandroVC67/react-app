import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'This is the state',
      count: '0'
    }
  }
  update (event){
    this.setState({txt: event.target.value})
  }
  render (){
    return (
      <div> 
        <input type='text' onChange={this.update.bind(this)} />
        <h1 className="Title">{this.state.txt} - {this.state.count}</h1> 
      </div>
    )
  }
}

export default App