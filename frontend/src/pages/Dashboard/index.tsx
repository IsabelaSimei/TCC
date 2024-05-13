import React from 'react';
import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.png';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
} from './styles';

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Ajudando Pessoas" />

          <Profile>
            <div>
              <span>Bem-vindo(a),</span>
              <Link to="/profile">
                <strong>{user.name}</strong>
              </Link>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <a href="http://localhost:3001">
          <Button>Chat</Button>
        </a>
      </Content>
    </Container>
  );
};

export default Dashboard;
