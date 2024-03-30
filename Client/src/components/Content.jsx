import  ContentHeder  from "./ContentHeder.jsx"
import Card from './Card.jsx'
import TurnosLists from "./TurnosLists.jsx"
import '../styles/content.css'

const content = () => {
  return (
    <div className="content">
        <ContentHeder/>	
        <Card/>
        <TurnosLists/>
    </div>
  )
}

export default content