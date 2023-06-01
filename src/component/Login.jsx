import React, {useRef} from "react";
import { loginUser } from "../data/user";

function Login(props){
    const fEmail = useRef();
    const fPass = useRef();

    //submit handler

    const submitHandler = async (e) =>{
        e.preventDefault();
        const data = {
            email:fEmail.current.value,
            password:fPass.current.value,
        };

        console.log('login data =', data);
        await loginUser(data);
    }

    return(
        <div>
            <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-dark">Login</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form autoComplete="off" onSubmit={submitHandler}>
                                <div className="form-group mt-2">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" ref={fEmail} className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" ref={fPass}  id="password" className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <input type="submit" value="Register" className="btn btn-outline-success" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Login