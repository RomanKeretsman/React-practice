import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';

import user from './components/Profile/user.json';
import data from './components/Statistics/data.json';

function App() {
  return (
    <Container>
      <Profile user={user} />
      <Statistics title="Upload stats" data={data} />
    </Container>
  );
}

export default App;
