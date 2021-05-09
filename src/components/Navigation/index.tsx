import { ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';

export default function Navigation(): ReactElement {
  const location = useLocation();

  return location.pathname === '/' ? (
    <Link className='Navigation' to='/records'>
      &#x231e; Records &#x231d;
    </Link>
  ) : (
    <Link className='Navigation' to='/'>
      &#x231e; Ir a Jugar &#x231d;
    </Link>
  );
}
