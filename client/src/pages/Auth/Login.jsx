import { useState } from "react";
import  toast from 'react-hot-toast'
import Layout from "../../component/layout/layout";
import { useNavigate ,useLocation} from 'react-router-dom';
import axios from 'axios';
import '../../style/AuthStyle.css'
import { useAuth } from "../../context/Auth";
const Login = () => {
    const navigate = useNavigate();
    const location=useLocation();
    const [auth,setAuth]=useAuth()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/api/v1/auth/login', { email, password });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                setAuth({
                    ...auth,
                    user:res.data.user,
                    token:res.data.token
                })
                localStorage.setItem('auth',JSON.stringify(res.data))
                navigate(location.state||'/');
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("something went wrong");
        }
    };

    return (
        <Layout>
            <div className="form-container">
                <h2>Login Form</h2>
                <form onSubmit={handleSubmit}>
                    
                    <div className="mb-3">
                        <input
                            value={email}
                            placeholder="Enter Your Email"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="inputEmail"
                             required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            value={password}
                            placeholder="Enter Your Password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="inputPassword"
                            required
                        />
                    </div>
                    <div className="mb-3"><button type="button" className="btn btn-primary" onClick={()=>{navigate('/forgot-password')}}>
                        Forgot Password
                    </button></div>
                   <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                   
                </form>
            </div>
        </Layout>
    );
};

export default Login;