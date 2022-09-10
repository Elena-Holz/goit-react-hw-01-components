import { Profile } from 'components/Profile/Profile';
import user from 'components/data/user.json';
import Statistics from 'components/Statistics/Statistics';
import data from 'components/data/data.json';
import { FriendList } from 'components/FriendList/FriendList';
import friends from 'components/data/friends.json';
import { TransactionHistory } from 'components/Transactions/Transactions';
import transactions from 'components/data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div
        tyle={{
          flexDirection: 'column',
        }}
      >
       <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      </div>
      <TransactionHistory items={transactions} />
    </div>
  );
};

