import styles from './Navbar.module.css';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className='bg-primary'>
      <nav className={`container navbar navbar-expand ${styles.barra_navegacao}`}>
        <div>
            <span className='navbar-brand'>Nome Usuario</span>
        </div>
        <ul className='navbar-nav mx-auto'>
            <li className='nav-item'>
                <Link className= 'nav-link'  to='/'>Inicio</Link>
            </li>
        </ul>
        <ul>
            <li className='nav-item'>
                <Link className= 'nav-link' to='/login'>Login</Link>
            </li>
        </ul>
        <ul>
            <li className='nav-item'>
                <Link className= 'nav-link'  to='/gestao_aulas'>Gestão Aulas</Link>
            </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar
