//images
import ImageComp from "../../components/ImageComp";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";
// Icons
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
//apply css
import '../login/LoginPage.css'
import { Get } from "../../components/http.service";

const LoginPage = () =>{
  const Navigate = useNavigate()
    const userInput = useRef()
    const passInput = useRef()

    const [user, setuser] = useState([])
    useState(()=>{
      Get(`http://localhost:8888/logindata`)
      .then((res)=>{
        console.log(res.data)
        setuser(res.data)
      })
      .catch((error)=>{
        console.log(error)
      })
    })

    const submitData =(event)=>{
      event.preventDefault()

      const userId = userInput.current.value
      const userPass = passInput.current.value

      console.log("userName:", userId)
      console.log("Pass:" , userPass)
      const currentData = user.find((val)=>
        val.uname === userId && val.pass === userPass
      )
      if(currentData){
        alert("Login Successfully..!")
        sessionStorage.setItem("isLogin","true")
        Navigate("/online-sports-store")
      }else{
        alert("Inalid credential")
        userInput.current.value = ""
        passInput.current.value = ""

      }
    }
    return(
        <div className="Login-container">
           <div className="LoginImg">
             {/* Add image in login page */}
             <img src={ImageComp.LoginFootball} alt="Login" className="LoginImg-style"/>
           </div>
           {/* Login form */}
           <div className="LoginForm">
              <form onSubmit={(event)=>submitData(event)}>
              <h2>Login</h2>
              <div className="Input">
              <input type="name" name="uname" placeholder="USERNAME" ref={userInput}  className="LoginInput" required/> 
              <PersonIcon className="LoginInput-icon" />
              </div>
              <div className="Input">
              <input type="password" name="pass" placeholder="PASSWORD" ref={passInput}  className="LoginInput" required/>
              <LockIcon className="LoginInput-icon"/>
              </div>
                <input type="submit" value={"Login"} className="login-btn"/>

                <p>Don't have an Account
                  {" "}
                  <Link to={"register"}>Register</Link>
                </p>
              </form>
           </div>
        </div>
    )
}
export default LoginPage;