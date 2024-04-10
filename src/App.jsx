import { HomeText } from '../components/HomeText'
import { ItemsSelector } from '../components/ItemsSelector'
import calculator from '/icon-calculator.svg'
import karma from '/icon-karma.svg'
import supervisor from '/icon-supervisor.svg'
import teamBuilder from '/icon-team-builder.svg'

import './App.css'

function App() {
  const items1 = [
    {
        icono: supervisor,
        titulo: 'Supervisor',
        id: 'supervisor',
        contenido: 'Monitors activity to identify project roadblocks',
        color: '#52b4b4'
    }
  ];
  const items2 = [
    {
        icono: teamBuilder,
        titulo: 'Team Builder',
        id: 'teambuilder',
        contenido: 'Scans our talent network to create the optimal team for your project',
        color: '#b1595b'
    },
    {
        icono: karma,
        titulo: 'Karma',
        id: 'karma',
        contenido: 'Regularly evaluates our talent to ensure quality',
        color: '#e5ab56'
    }
  ];
  const items3 = [
    {
        icono: calculator,
        titulo: 'Calculator',
        id: 'calculator',
        contenido: 'Uses data from past projects to provide better delivery estimates',
        color: '#4984b7'
    }
  ];
  return (
    <>
      <div className="MainContainer">
        <div className="Container">
          <HomeText />
          <div className="ElementsContainer">
            <ItemsSelector items={items1} />
            <ItemsSelector items={items2} />
            <ItemsSelector items={items3} />
          </div>
        </div>
      </div>

    </>
  )
}

export default App
