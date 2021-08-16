
import React,{useState} from 'react'


const Reactcontact = () => {
    const[user,setUser]=useState({
      name:"",
      email:"",
      address:"",
      phone:"",
      city:""

    })
    let name,value;
  
  const getUserData=(event)=>{
    name=event.target.name
    value=event.target.value
    setUser({...user,[name]: value})

  }
  const postData=async(e)=>{
    e.preventDefault();
    const{name,email,address,phone,city}=user
    const res= await fetch(
    "https://appm-10ad8-default-rtdb.firebaseio.com/appform.json",{
    method:"POST",
    header:{
      "Content-type":"application/json"

    },
    body:JSON.stringify({
      name,
      email,
      address,
      phone,
      city

    })
    }
    );
    if(res){
      setUser({
        name:"",
        email:"",
        address:"",
        phone:"",
        city:""
  
      })
      alert("form is submitted")
    }
    

  }
  return (
    <>
      <h1>Contact form</h1>
  <form className="row g-3" method="POST">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Name</label>
    <input type="text" className="form-control" name="name" value={user.name} onChange={getUserData} id="inputEmail4" required/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">email</label>
    <input type="email" className="form-control" name="email" value={user.email} onChange={getUserData} id="inputPassword4" required/>
  </div>
  <div className="col-md-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" name="address" value={user.address} onChange={getUserData} id="inputAddress" required />
  </div>
  <div className="col-12">
    <label for="inputAddress2" className="form-label">phone</label>
    <input type="tel" className="form-control" name="phone" value={user.phone} onChange={getUserData} id="inputAddress2" required/>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" name="city" value={user.city} onChange={getUserData} id="inputCity" required/>
  </div>
  
  <div className="col-12">
    <button type="submit" className="btn btn-primary" onClick={postData}>Submit</button>
  </div>
</form>

    </>
  )
}

export default Reactcontact