import React, { Component } from 'react';
import KittyCard from "./components/KittyCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import kitties from "./kitties.json";
import './App.css';

class App extends Component {

  //set default state
  state = {
    kitties: kitties,
    clicked: [],
    score: 0,
    topScore: 0,
    message: ""
  };

  random = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    console.log(this.state.kitties);
  }

  handleClick = (name, id) => {
    const guess = this.state.clicked.indexOf(name);
    if (guess === -1) {
      this.setState({
        kitties: kitties,
        clicked: this.state.clicked.concat(name),
        score: this.state.score + 1,
        topScore: (this.state.topScore > this.state.score) ? this.state.topScore : this.state.topScore + 1,
        message: 'Mee-oww - you clicked ' + name + ' -  do not click her again - she will scratch the crap out of you!!!!!!!'
      })
    }
    else {
      this.setState({
        kitties: kitties,
        clicked: [],
        score: 0,
        topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore,
        message: 'What did ' + name + ' tell you about clicking on them again - SCRATCHY TIME!'
      })
    }
    this.random(kitties);
    console.log(this.state.clicked);
  }


  render() {
    return (
      <div className="container">
        <Title
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <Wrapper>
          {this.state.kitties.map(kitties => (
            // <a key={friends.name} onClick={this.handleClick}>
            <KittyCard
              // id={friends.id}
              key={kitties.name}
              name={kitties.name}
              image={kitties.image}
              handleClick={() => this.handleClick(kitties.name, kitties.id)}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;