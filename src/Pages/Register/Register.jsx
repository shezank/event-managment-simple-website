import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from "../../Sharde/AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";


const Register = () => {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null)
    const {createUser, googleLogin} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSocialLogin = ()  =>{
        setSuccess('');
        setError('');
        googleLogin()
        .then(result =>{
            console.log(result.user);
            setTimeout(()=>{
                navigate(location?.state ? location.state : "/");
            }, 2000)
            toast.success('Successfully Register Your Account');
        })
        .catch(error=>{
            console.log(error.message);
            setError(error.message)
        })
    }

    const handelRegister = e => {
        e.preventDefault();
        const username = e.target.username.value;
        const photourl = e.target.photourl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        setError('')
        if(password.length < 6){
            return setError("is less than 6 characters")
        }
        else if (password.search(/^(?=.*[A-Z]).*$/)){
            return setError("Don't have a capital letter")

        }
        else if(password.search( /^(?=.*[>!#@$%&?"<]).*$/)){
            return setError("don't have a special character")
        }
        createUser(email, password)
            .then( result =>  {
                updateProfile(result.user,{
                    displayName: username,
                    photoURL: photourl
                })
                console.log(result.user);
                e.target.reset();
                setTimeout(()=>{
                    navigate(location?.state ? location.state : "/");
                }, 2000)
                toast.success('Successfully Register Your Account');
            })
            .catch(error => {
                toast.error(error.message);
            })

    }

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Register Now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" name="username" placeholder="username" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name="photourl" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
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
                            {error && <p className="text-red-700">{error}</p>}
                            {success && <p className="text-green-500">{success}</p>}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p>Already Have A Account Please <Link className="underline" to='/login'>Login</Link></p>
                        </form>
                        <div className="divider">OR</div>
                        <button onClick={handleSocialLogin} className="btn btn-primary rounded-t-none"><FaGoogle></FaGoogle> Google Login</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Register;