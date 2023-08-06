import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faReddit } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <FontAwesomeIcon icon={faReddit} color='#ff4500' />
            </Link>
            <h1>Hi hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</h1>
        </div>
    )
}

export default NavBar