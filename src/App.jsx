import { useState } from 'react';
import './App.css';
import app from './firebase/firebase.init';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup, signOut } from 'firebase/auth'

function App() {
  const [users, setUsers] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  console.log(users)
  
  // Google & Github Signin
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

  // Email pass sign up
  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password)
  }

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handlePassChange = e => {
    setPassword(e.target.value)
  }

  // creating email-password auth
  createUserWithEmailAndPassword(auth, email, password)
  .then(result=>{
    console.log(result)
  })
  .catch(error=>{
    console.log(error)
  });

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
      <form onSubmit={handleSubmit}>
        <input onChange={handleEmailChange} type="email" name="email" id="email" />
        <input onChange={handlePassChange} type="password" name="password" id="password" />
        <button>Sign Up</button>
      </form>
    </>
  );
}


export default App
