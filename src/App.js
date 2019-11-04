import React, { Component } from 'react'

import './App.css'

export default class App extends Component {
  constructor(){
    super()

    this.state={
      toggle:false,
    }
  } 

  toggleInput = () => {
    this.setState({
      toggle:!this.state.toggle,
    })
    const no = document.getElementById('no')
    no.disabled = !no.disabled;
  }
   render() {
    return (
      <div className='main-page'>
        <header className='header'>
          <h1 className='the-title'>Jakes Competency Page</h1>
          <p>Lorem Ipsum </p>
        </header>
        <section className='big-section'>
          <article id='article'>
            This is an article proving that I can section my HTML in the correct way. please pass this off 
          </article>
          {/* Video and Audio HTML 5 */}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/yBeWUYvE-iU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <iframe width="110" height="200" src="https://www.myinstants.com/instant/that-was-easy/embed/" frameborder="0" scrolling="no"></iframe>
         <input type="checkbox" id="no" onChange={this.toggleInput} checked/>
         <input className="red" value="click me, I turn red" />
         <input className="no" type="text" value="cant touch this" />
        </section>
        <div class="wrapper">
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png" class="box 1"></img>
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/272.png" class="box 2"></img>
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/768.png" class="box 3"></img>
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/230.png" class="box 4"></img>
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/342.png" class="box 5"></img>
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/350.png" class="box 6"></img>
        </div>
        <footer className='feet'>
          <h1>LOOK! my webpage has feet</h1>
        </footer>
      </div>
    )
  }
}
