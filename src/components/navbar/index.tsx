import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { VscAccount, VscSignOut, VscHome, VscMenu } from 'react-icons/vsc';
import { PiUserSquareDuotone } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";

import './style.css';
import { GlobalStyle } from '../../style';
import { Button } from '../button';

function Navbar() {
  const [openCollapse, SetOpenCollapse] = useState<boolean>(false);

  const [step, SetStep] = useState<number>(0);

  const location = useLocation();
  const navigateTo = useNavigate();

  console.log('path ', location.pathname);

  const checkLogin = () => {
    const login = sessionStorage.getItem('login');
    return login;
  };

  const Logout = () => {
    console.log('clean');
    sessionStorage.clear();
    navigateTo('/');
    window.location.reload();
  };

  useEffect(() => {
    const aux = checkLogin();
    aux ? SetStep(1) : SetStep(0);
  }, []);

  return (
    <div className="navbar">
      <GlobalStyle path={location.pathname} />
      <ul className="web-navbar">
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">Quem Somos</Link>
        </li>
        <li>
          <Link to="/modality">Modalidades</Link>
        </li>
        <li>
          <Link to="/schedule">Horários</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
        <li>
          <Link to="/login">
            <PiUserSquareDuotone size={42} />
          </Link>
        </li>
        {step === 1 && (
          <li>
            <Link to="/" onClick={Logout}>
              <CiLogout size={33} color="white" />
            </Link>
          </li>
        )}
      </ul>
      <ul className="mobile-navbar">
        <Button
          icon={<VscMenu size={32} />}
          handle={() => SetOpenCollapse(!openCollapse)}
          bg="#222727"
          color="#c9c7c7"
          size="fit-content"
          display="flex"
          justify="flex-end"
          align="center"
        />
        <div>
          <li>
            <Link to="/login">
              <PiUserSquareDuotone size={32} />
            </Link>
          </li>
          {step === 1 && (
            <li>
              <Link to="/" onClick={Logout}>
                <CiLogout size={32} color="white" />
              </Link>
            </li>
          )}
        </div>
      </ul>
      <ul className={`collapse-${openCollapse}`}>
        <li onClick={() => SetOpenCollapse(!openCollapse)}>
          <Link to="/">
            Home
          </Link>
        </li>
        <li onClick={() => SetOpenCollapse(!openCollapse)}>
          <Link to="/about">Quem Somos</Link>
        </li>
        <li onClick={() => SetOpenCollapse(!openCollapse)}>
          <Link to="/modality">Modalidades</Link>
        </li>
        <li onClick={() => SetOpenCollapse(!openCollapse)}>
          <Link to="/schedule">Horários</Link>
        </li>
        <li onClick={() => SetOpenCollapse(!openCollapse)}>
          <Link to="/contact">Contato</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
