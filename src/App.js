import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';

function App() {
  return (
    <Container>
      <Profile user={user} />
    </Container>
  );
}

export default App;
