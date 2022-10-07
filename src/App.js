import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendLIst/FriendList';

import user from './components/Profile/user.json';
import data from './components/Statistics/data.json';
import friends from './components/FriendLIst/friends.json';

function App() {
  return (
    <Container>
      <Profile user={user} />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />
    </Container>
  );
}

export default App;
