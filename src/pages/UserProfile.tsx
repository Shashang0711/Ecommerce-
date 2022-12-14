import {useState,useEffect} from 'react'
import Navbar from "../components/Navbar"
import {auth, db } from "../firebaseConfig/firebaseconfig"
import { collection,getDocs,query,where} from 'firebase/firestore'

const UserProfile = () => {
    function GetCurrentUser(){
        const [user,setUser]=useState("");
        //  const userCollectionRef=collection(db,"users" )
     
         useEffect(()=>{
           auth.onAuthStateChanged(userlogged=>{
             if(userlogged){
               const getUsers=async()=>{
                 const q = query(collection(db,"users"),where("uid","==",userlogged.uid))
                 // console.log(q);
                 const data = await getDocs(q)
                //  setUser(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
               }
               getUsers();
             }
             else{
              //  setUser(null)
             }
           })
         },[])
         return user
       }
       const loggeduser = GetCurrentUser
  return (
    <div>
    <Navbar/>
<div className='userprofile-outercontainer'>
{loggeduser ? <div className='user-profile'>
<p>Your Account detail</p>

<div className='data-row'>
<span>Your Name</span>
<span>{loggeduser[0].username}</span>
</div>
<div className='data-row'>
<span>Your email</span>
<span>{loggeduser[0].email}</span>
</div>
<div className='data-row'>
<span>Your phonenumber</span>
<span>{loggeduser[0].phonenumber}</span>
</div>
<div className='data-row'>
<span>Your address</span>
<span>{loggeduser[0].address}</span>
</div>
</div>:<div>
You are logged in

</div>   }
</div>
</div>
  )
}

export default UserProfile