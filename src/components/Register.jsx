import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import LinearProgress from '@mui/material/LinearProgress';

export default function Register() {
const [CompanyName,setCompanyName]= useState('');
const [OwnerName,setOwnerName]= useState('');
const [Email,setEmail]= useState('');
const [Phone,setPhone]= useState('');
const [Din,setDin]= useState('');
const [Cost,setCost]= useState('');
const [Address,setAddress]= useState('');
const [tenderId,setTenderId]=useState('Getting Id....');
const [visible, setVisible] = useState("none");

useEffect(()=>{
  axios.get("https://tenderrelease.cyclic.app/getWinner")
  .then((response)=>{
    if(response.data==="Error")
    {
      alert(response.data);
    }
    else{
      setTenderId(response.data.tenderId);
    }
  })

},[tenderId])

function handleSubmit(){
  setVisible("block");
  axios.post("https://tenderrelease.cyclic.app/register",{ownerName:OwnerName,email:Email,phoneNumber:Phone,company:CompanyName,din:Din,bid:Cost,address:Address})
  .then((response)=>{
  
    if(response.data==="Error!"){
      alert('Sorry!! Form has been closed');
      setVisible("none");
    }
    else{
      console.log(response.data);
      alert('Registered Successfully!! Token Id: ' + response.data.tokenId+", Transaction Hash : " + response.data.transactionHash
      )
      setVisible("none");
    }
  })
  .catch((e)=>{
    console.log(e);
  })
}

  return (
   
    <div className="min-h-screen flex flex-col" >
        <div
      className="absolute inset-x-0 top-[calc(100%-10rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-50rem)]"
      aria-hidden="true"
      >
      <div
        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          />
    </div>
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
    
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-1 text-3xl text-center">Register for </h1>
           <h1 className="text-3xl text-center mb-5 font-semibold ">Tender ID - {tenderId}</h1>
        
          
          <input
            type="text"
            onChange={(e)=>setCompanyName(e.target.value)}
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="companyname"
            placeholder="Company Name"
          />
          <input
            type="text"
            onChange={(e)=>setOwnerName(e.target.value)}
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="ownername"
            placeholder="Owner Name"
          />
          <input
            type="text"
            onChange={(e)=>setEmail(e.target.value)}
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />
          <input
            type="text"
            onChange={(e)=>setAddress(e.target.value)}
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="address"
            placeholder="Wallet Address"
          />
          <input
            type="text"
            onChange={(e)=>setPhone(e.target.value)}
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="phone"
            placeholder="Phone Number"
          />
          <input
            type="text"
            onChange={(e)=>setDin(e.target.value)}
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="din   "
            placeholder="DIN Number"
          />{" "}
          <input
            type="text"
            onChange={(e)=>setCost(e.target.value)}
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="cost"
            placeholder="Total Estimated Cost"
          />
          <button
            onClick={handleSubmit}
            className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Register
          </button>
          <LinearProgress style={{ display: visible }} color="success" />
          <div className="text-center text-sm text-grey-dark mt-4">
            By registering, you agree to the
            <Link
              className="no-underline border-b border-grey-dark text-grey-dark"
              to="#"
            >
              &nbsp; Terms of Service
            </Link>{" "}
            &nbsp;and
            <Link
              className="no-underline border-b border-grey-dark text-grey-dark"
              to="#"
            >
              &nbsp;Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
