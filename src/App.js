import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Countries from './components/Countries'

function App() {
  return (
    <Router>
      <>
        <Route exact path="/">
          <Countries />
        </Route>
      </>
    </Router>
  )
}

export default App
