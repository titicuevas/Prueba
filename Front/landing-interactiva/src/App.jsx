import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Contact from './components/Contact'
import InteractiveList from './components/InteractiveList'
import Footer from './components/Footer'
import ScrollOptimizer from './components/ScrollOptimizer'

function App() {
  return (
    <div className="app">
      <ScrollOptimizer />
      <Navigation />
      <main>
        <Hero />
        <Contact />
        <InteractiveList />
      </main>
      <Footer />
    </div>
  )
}

export default App
