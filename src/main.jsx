import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './componentes/Card.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Card
    name = "Notes App"
    description="La mejor app para recordar tus tareas" 
    />

    <Card
    name="Colectivos application"
    description="Por si te olvidas  como manejarte por la ciudad, la solucion esta aqui!!!"
    />

    <Card
    name="Ancora Proyectos"
    description="Especialmente diseñada para una empresa constructora de la ciudad de santa fe!"
    />

  </React.StrictMode>,
)