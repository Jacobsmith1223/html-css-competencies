import React, { Component } from 'react'

import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='main-page'>
        <header className='header'>
          <h1>Jakes Competency Page</h1>
          <p>Lorem Ipsum </p>
        </header>
        <section className='big-section'>
          <article id='article'>
            This is an article proving that I can section my HTML in the correct way. please pass this off 
          </article>
        </section>
        <footer className='feet'>
          <h1>LOOK! my webpage has feet</h1>
        </footer>
      </div>
    )
  }
}
