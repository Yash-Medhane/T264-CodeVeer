import React from 'react'

const App = () => {
  const name = import.meta.env.VITE_NAME;
  return (
    <div>
      <h1>frontend</h1>
      <h1>Hii from, {name}</h1>
    </div>
  )
}

export default App
