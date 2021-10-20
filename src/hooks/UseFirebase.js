
import intializeAutentication from '../Firebase/FirebaseInitialize';
import { getAuth ,GoogleAuthProvider,signInWithPopup, onAuthStateChanged,signOut,GithubAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import react,{useState,useEffect} from 'react';   

intializeAutentication();

const useFirebase = () => {
const [user,setUser] = useState({});
const [error,setError] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');


 const auth = getAuth();
 const googleProvider = new GoogleAuthProvider();
 const githubProvider= new GithubAuthProvider ();
//   Google sign in 
 const signInUsingGoogle = () => {
    signInWithPopup(auth,googleProvider)
        .then(result =>{
            
            // const {displayName,email,photoURL} = result.user;
            // const loggedUser ={
            //     name:displayName,
            //     email:email,
            //     photo:photoURL,
            // }
            console.log(result.user);
            setUser(result.user);
            // setUser('');
        //   const user = result.user;
        //   console.log(user);
        })
        .catch(error=>{
           setError(error.message);
        })
    }
        //    user logut 

    const logOut =() =>{
        signOut (auth)
        .then(()=>{
            setUser({});
        })

       }

   useEffect( () => {
    onAuthStateChanged (auth, user=>{
        if(user){
            console.log("inside user",user)
            setUser(user);
        }
    })
   }
       ,[])


        // Gihub Sign In 
       const signInUsingGithub=() => {

           signInWithPopup(auth,githubProvider)
           .then(result=>{
               setUser(result.user);
           })
           .catch(error=>{
               setError(error.message);
           })
       }

        //   Register with Firebase
       const handleRegister = e => {
        e.preventDefault();
        // if(email && password ===""){
        //     setError('Pls filup form ');
        //     return;
        // }
        if(password.length<6){
          setError('Password will be at least 6 charector ');
          return;
        }
        if(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{8,20}$/.test(password)){
          setError('password should contain atleast one number and one special character ');
          return;
        }
        console.log(email,password);
      
        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
          const user = result.user;
          setUser(user);
          setError('');
        })
        .catch(error=>{
          setError(error.message);
        })
        
      }

    //   Login with  Farebase 

    const handleLogin= e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth,email,password)
        .then(result =>{
            const user = result.user;
            setUser(user);
            setError('');
          })
          .catch(error=>{
            setError(error.message);
          })

    }

      
    return {
        user,
        error,
        signInUsingGoogle,
        logOut,
        signInUsingGithub,
        handleRegister,
        email,setEmail,
        password,setPassword,
        handleLogin,
    }

 }

export default useFirebase;