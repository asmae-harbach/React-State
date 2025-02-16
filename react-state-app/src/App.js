import React, { Component } from "react";

class App extends Component {
  state = { 
    name: 'Asmaâ Harbach',
    email: 'asmaharbach@gmail.com', 
    img: '/logo512.png', 
    montre: true
  };

  change = ()=>{
    this.setState({ montre: !this.state.montre });
  };

  render() {
    {if(this.state.montre){
      return (
        <>
          <p>{this.state.name}</p>
          <p>{this.state.email}</p>
          <img src={this.state.img} alt="Person" />
          <button onClick={this.change}>Change</button>
        </>
      )
    }}
    return(
      <button onClick={this.change}>Change</button>

    )
  }
  
}

export default App;
