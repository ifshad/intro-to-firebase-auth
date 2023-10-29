import { useState } from 'react';
import './App.css';
import app from './firebase/firebase.init';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth'

function App() {
  const [users, setUsers] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  console.log(users)
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const userDetails = result.user;
        setUsers(userDetails);
        // console.log(userDetails)
      })
      .catch(error => {
        console.log(error)
      })
  };
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const userDetails = result.user;
        setUsers(userDetails);
      })
      .catch(error => {
        console.log(error)
      })
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(result => {
        setUsers(null)
      })
      .catch(error => {
        console.log(error)
      })
  }


  return (
    <>
      <h1>Firebase Authentication</h1>
      {
        users ?
          <div>
            <button onClick={handleSignOut}>Sign Out</button>
          </div> :
          <div>
            <button onClick={handleGoogleSignIn}>Google Signin</button>
            <button onClick={handleGithubSignIn}>Github Signin</button>
          </div>
      }
      {
        users &&
        <div>
          <h2>User: {users.displayName}</h2>
          <h3>Email: {users.email}</h3>
          <img src={users.photoURL} alt="photo" />
          {users.phoneNumber &&
            <h3>Phone: {users.phoneNumber}</h3>}
        </div>
      }
    </>
  );
};


export default App
