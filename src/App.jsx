import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  let [user, setUser] = useState();
  useEffect(() => {
    let users = async () => {
      let data = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUser(data.data);
    }
    users();
  }, [])

let [inputData, setInputData] = useState({
  firstname: "",
  lastname: "",
  email: ""
})

let handleInput = (e) =>{
  let {name, value} = e.target;
  setInputData({...inputData,[name]:value})
  console.log(inputData);
}

let handleSubmit = () =>{
  console.log(inputData);
}

  return (
    <>
      <div className='container'>
       {user && user.length > 0 ?
         user.map((item,index)=>(
          <div key={index} className='item'>
            <h1>Name: {item.name}</h1>
            <h2>Username: {item.username}</h2>
            <h2>Email: {item.email}</h2>
            <h2>Phone: {item.phone}</h2>
          </div>
          ))
          : <h1>Loading...</h1>
       }
      </div>
      <div>
        <input name='firstname' placeholder='Firstname' onChange={handleInput} />
        <input name='lastname' placeholder='lastname' onChange={handleInput} />
        <input name='email' placeholder='email' onChange={handleInput} />
        <button onClick={handleSubmit}>Save</button>
      </div>
    </>
  )
}

export default App
