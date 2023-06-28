import { getAuth } from 'firebase/auth'

import { firebaseApp } from './config/firebase'

const auth = getAuth(firebaseApp)
auth
  .signOut()
  .then(() => {
    localStorage.removeItem('token')
    setTimeout(() => {
      window.location.href = 'login.html'
    }, 1200);
    
  })
  .catch((error) => console.log(error))
