import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Sharde/AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [error, setError] = useState(null);
    const { login, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSocialLogin = () => {
        setError('');
        googleLogin()
            .then(result => {
                console.log(result.user);
                navigate("/");
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
            })
    }

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        setError('')
        login(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Successfuly Login Your Account")
                e.target.reset();
                navigate('/')
            })
            .catch(error => {
                setError(error.message);
            })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <p className="text-red-700">{error}</p>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>Do Not Have A Account Please <Link className="underline" to='/register'
                        >Register</Link></p>
                    </form>
                    <div className="divider"></div>
                    <button onClick={handleSocialLogin} className="btn btn-primary rounded-t-none"><FaGoogle></FaGoogle> Google Login</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;