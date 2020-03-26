import React from 'react';
import logo from '../../assests/logo-purple.svg';
import { Link } from 'react-router-dom';

import { Container,Content,Profile } from './styles';

import Notification from '~/components/Notification';

export default function Header() {
  return (
    <Container>
        <Content>
            <nav>
                <img src={logo} alt="logo"/>
                <Link to="/dashboard">DASHBOARD</Link>
            </nav>
            <aside>
                <Notification />
                <Profile>
                    <div>
                        <strong> Andreazo Silva</strong>
                        <Link to="/profile">Meu perfil</Link>
                    </div>
                    <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="Andreazo Silva"/>
                </Profile>
            </aside>
        </Content>
    </Container>
  );
}
