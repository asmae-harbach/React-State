import React, { Component, useState } from "react";



class App extends Component {
  state = { 
    name: 'Asmaâ Harbach',
    email: 'asmaharbach@gmail.com', 
    img: '/logo512.png', 
    montre: true,
    temp : 0
  };

  affichage = ()=>{
    this.setState({ montre: !this.state.montre });
    clearInterval(this.setState(() => ({ temp: 0})));
  };

  componentDidMount(){
    this.interval = setInterval(() => {
      this.setState(() => ({ temp: this.state.temp + 1 }));
    }, 1000);
  }
  
  
  render() {
    {if(this.state.montre){
      return (
        <>
          <h1>{this.state.temp}</h1>
          <p>{this.state.name}</p>
          <p>{this.state.email}</p>
          <img style={{width:'200px'}} src={this.state.img} alt="Person" />
          <button onClick={this.affichage}>Change</button>
        </>
      )
    }}
    return(
      <>
        <h1>{this.state.temp}</h1>
        <button onClick={this.affichage}>Change</button>
      </>

    )
  }
  
}

export default App