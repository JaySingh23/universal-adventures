import '../sass/Container.scss'
import image6 from "../assets/image6.png"
import Card from './Card'

export default function Container() {

  const data1 = {title: 'Scuba Diving in Grande Island, Goa', time: '8 hour', image: '../src/assets/image4.png', price: '1799', tags: ['Long tail boat ride', 'Underwater Photo and Video']}

  const data2 = {title: 'Bungee Jumping in Goa', time: '30 min', image: '../src/assets/image7.png', price: '2800', tags: ['61 meter height', 'Jump Photo & Video', 'Certificate']}

  return (
    <div className="container">
        <div className="left-content">
            <img src={image6} className='left-image'/>
             <h2 className='left-text'>Adventures you must try before turn 30!</h2>
        </div>
        <div className="right-content">
            <Card data = {data1} />
            <Card data = {data2} />
        </div>
    </div>
  )
}
