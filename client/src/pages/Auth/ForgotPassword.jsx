import { useState } from "react";
import  toast from 'react-hot-toast'
import Layout from "../../component/layout/layout";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../style/AuthStyle.css'
import { useAuth } from "../../context/Auth";
const ForgotPassword = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [answer, setAnswer] = useState('');
   

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/api/v1/auth/forgot-password', { email, newPassword,answer });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                
                
                navigate(location.state||'/login');
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("something went wrong");
        }
    };

    return (
        <Layout title={"forgot Password Ecommerce App"}>
            <div className="form-container">
                <h2>RESET PASSWORD</h2>
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
                            value={answer}
                            placeholder="Enter Your favourite Sport"
                            type="text"
                            onChange={(e) => setAnswer(e.target.value)}
                            className="form-control"
                            id="inputAnswer"
                             required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            value={newPassword}
                            placeholder="Enter Your Password"
                            type="password"
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="form-control"
                            id="inputPassword"
                            required
                        />
                    </div>
                    
                   <button type="submit" className="btn btn-primary">
                        RESET
                    </button>
                   
                </form>
            </div>
        </Layout>
    );
};

export default ForgotPassword;