import Container from './components/Container/';
import Profile from './components/Profile/';
import Statistics from './components/Statistics/';
import FriendList from './components/FriendLIst/';
import TransactionHistory from './components/TransactionHistory/';

import user from './components/Profile/user.json';
import data from './components/Statistics/data.json';
import friends from './components/FriendLIst/friends.json';
import transactions from './components/TransactionHistory/transactions.json';

function App() {
  return (
    <Container>
      <Profile user={user} />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
}

export default App;
