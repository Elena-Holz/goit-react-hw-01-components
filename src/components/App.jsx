import { Profile } from 'components/Profile/Profile';
// import user from 'components/data/user.json';
// import user from 'path/to/user.json;

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      
       <Profile />
    </div>
  );
};


  //  <Profile
  //       username={user.username}
  //       tag={user.tag}
  //       location={user.location}
  //       avatar={user.avatar}
  //       stats={user.stats}
  //     />