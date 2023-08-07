import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faReddit } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/readdit'>
                <FontAwesomeIcon icon={faReddit} color='#ff4500' />
                <h1>Readdit</h1>
            </Link>
            <div className='search-bar' >
                <form>
                    <FontAwesomeIcon icon={faSearch} color='#777' />
                    <input className='search-input' placeholder='Search Here' type='text' />
                </form>
            </div>
        </div>
    )
}

export default NavBar