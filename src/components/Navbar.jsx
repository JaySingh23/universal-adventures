import "../sass/Navbar.scss"
import navbarImage from "../assets/image5.png"

export default function Navbar() {
  return (
    <div className="navbar">
        <h1 className="navbar-text">Universal Adventures</h1>
        <img src = {navbarImage} className = 'navbar-image'/>
    </div>
  )
}
