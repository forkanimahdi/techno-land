import "./signup.sass"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export const AuthentificatingComponent = (props) => {

    let [switcher, setSwitcher] = useState(false)

    let [singupUsername, setSingupUsername] = useState('')
    let [singupEmail, setSingupEmail] = useState('')
    let [singupPassword, setSingupPassword] = useState('')
    let [signupConfirm, setConfirmPassword] = useState('')
    let [error, setError] = useState("")
    let [users, setUsers] = useState([])
    let [loginEmail, setLoginEmail] = useState('')
    let [loginPassword, setLoginPassword] = useState('')
    const navigate = useNavigate()



    // const SingupLogin = (active, desactive) => {
    //     active(true)
    //     desactive(false)
    // }
    class Users {
        constructor(username, email, password) {
            this.username = username
            this.email = email
            this.password = password
        }
    }
    useEffect(() => {
        let testUser = new Users('admin', 'admin', 'admin')
        users.push(testUser)
    }, )


    const Registring = () => {
        if (singupUsername !== '' && singupEmail !== "" && singupPassword !== "" && singupPassword === signupConfirm) {
            if (singupEmail.includes("@")) {
                if (singupPassword.length >= 8) {
                    let user = new Users(singupUsername, singupEmail, singupPassword)
                    setUsers([...users, user])
                    console.table(users)
                    setError("Account created successfuly")
                    setSingupUsername("")
                    setSingupEmail('')
                    setSingupPassword("")
                    setConfirmPassword("")
                    setTimeout(() => {
                        setSwitcher(true)
                        setError("")
                    }, 2000);

                } else {
                    setError("Password must include 8 character ")
                    setTimeout(() => {
                        setError("")
                    }, 2000);
                }

            } else {
                setError("Invalid Email")
                setTimeout(() => {
                    setError("")
                }, 2000);
            }


        } else {
            setError("No input can be empty")
            setTimeout(() => {
                setError("")
            }, 3000);
        }


    }
    const logingin = () => {
        for (let index = 0; index < users.length; index++) {
            const element = users[index];
            if (loginEmail === element.email) {
                if (loginPassword === element.password) {
                    let newUseronline = {
                        username: element.username,
                        userEmail: element.email,
                        userPassword: element.password
                    }
                    props.setOnlineUser(newUseronline)
                    props.setOnline(true)
                    setLoginEmail("")
                    setLoginPassword("")
                    navigate('/techno-land')
                } else {
                    setError("Password Incorrect ")
                    setTimeout(() => {
                        setError("")
                    }, 2000);
                }
            } else {
                setError("Email Incorrect ")
                setTimeout(() => {
                    setError("")
                }, 2000);
            }

        }
    }




    return (
        <>
            <div className="AuthentificatingDiv flex-row-reverse border d-flex position-relative ">
                <div className={switcher === false ? "switcher-signup w-50 h-100 position-absolute end-0" : "switcher-login w-50 h-100 position-absolute end-0"}></div>
                <div className="login w-50 h-100 d-flex flex-column align-items-center justify-content-around">
                    <h4 className="text-white">Login {error}</h4>
                    {/* <div className="loginform h-50 bg-danger d-flex flex-column align-items-center justify-content-around w-100"> */}
                        <input className="rounded-pill bg-transparent border border-indigo text-center text-white" value={loginEmail} placeholder="Email adress" type="email" onChange={(event) => {
                            setLoginEmail(event.target.value)
                        }} />
                        <input className="rounded-pill bg-transparent border border-indigo text-center text-white" value={loginPassword} placeholder="password" type="password" onChange={(event) => {
                            setLoginPassword(event.target.value)
                        }} />

                    {/* </div> */}
                    <button onClick={logingin} className="btn btn-indigo w-50 text-white rounded-pill">Login</button>
                    <p className="text-gray">You dont have an account ? <span onClick={() => {setSwitcher(false)}} className="text-indigo">Signup</span></p>
                </div>


                <div className="signup w-50 h-100 d-flex flex-column align-items-center justify-content-around ">
                    <h4 className="text-white">Signup {error}</h4>
                    <input className="rounded-pill bg-transparent border border-indigo text-center text-white" value={singupUsername} placeholder="Username" type="text" onChange={(event) => {
                        setSingupUsername(event.target.value)
                    }} />
                    <input className="rounded-pill bg-transparent border border-indigo text-center text-white" value={singupEmail} placeholder="Email" type="email" onChange={(event) => {
                        setSingupEmail(event.target.value)
                    }} />
                    <input className="rounded-pill bg-transparent border border-indigo text-center text-white" value={singupPassword} placeholder="Password" type="password" onChange={(event) => {
                        setSingupPassword(event.target.value)
                    }} />
                    <input className="rounded-pill bg-transparent border border-indigo text-center text-white" value={signupConfirm} placeholder="Confirm password" type="password" onChange={(event) => {
                        setConfirmPassword(event.target.value)
                    }} />
                    <button className="btn btn-indigo w-50 rounded-pill text-white" onClick={Registring}>Signup</button>
                    <p className="text-gray">Already have an account ?<span onClick={() => {setSwitcher(true)}} className="text-indigo ms-1">Login</span></p>
                </div>
            </div>

        </>


    )
}