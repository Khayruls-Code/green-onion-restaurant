import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";

initializeAuthentication()
const auth = getAuth()

const useFirebase = () => {
  const [user, setUser] = useState({})
  const [error, setError] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [conPass, setConPass] = useState('')
  const [isLoading, setIsLoding] = useState(true)

  ///geting input values
  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleConPass = (e) => {
    setConPass(e.target.value)
  }

  ///here the sing up funcitionality 
  const singUpUsingPassword = (e) => {
    e.preventDefault();
    if (name.length < 3) {
      setError('Name have to be atlest 3 charecter')
      return;
    }
    if (email === '') {
      setError('email must be entered')
      return;
    }
    if (!validateEmail(email)) {
      setError('Invailed Email')
      return;
    }
    if (password === '') {
      setError('password must be filled')
      return;
    }
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
      setError('Password Should be minimum six characters, at least one letter and one number')
      return;
    }
    if (conPass === '') {
      setError('Password Should be confirmed')
      return;
    }
    if (conPass !== password) {
      setError('Passwords are not matching')
      return;
    }
    else {
      setError('')
      createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          setUser(result.user)
          console.log(result.user)
          getName()
        })
        .catch(error => setError(error.message))
    }
  }

  ///email validation

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  //here the singin funationality
  const singInUsingPassword = () => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  //getting name
  const getName = () => {
    updateProfile(auth.currentUser, {
      displayName: name
    })
      .then(() => { })
      .catch(error => setError(error.message))
  }

  ///getting current singin user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
        console.log(user)
      } else {
        setUser({})
      }
      setIsLoding(false)
    })
    return () => unSubscribe;
  }, [])

  //here the singout funstionality
  const singOutUser = () => {
    setIsLoding(true)
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch(error => setError(error.message))
      .finally(setIsLoding(false))
  }

  ///item those have to return
  return {
    user,
    error,
    email,
    password,
    handleName,
    handleEmail,
    handlePassword,
    handleConPass,
    singUpUsingPassword,
    singInUsingPassword,
    singOutUser,
    setUser,
    setError,
    setIsLoding,
    isLoading
  }

}

export default useFirebase;