import React from 'react'
import ReactDOM from 'react-dom/client'
import Counter from './components/Counter'
import Header from './components/Header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Counter />
  </React.StrictMode>,
)
