import { useState } from "react";
import  toast from 'react-hot-toast'
import Layout from "../../component/layout/layout";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../style/AuthStyle.css'
const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/api/v1/auth/register', { name, email, password, phone, address ,answer});
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                navigate('/login');
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
                <h2>Register Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            placeholder="Enter Your Name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control"
                            id="inputName"
                            required
                        />
                    </div>
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
                    <div className="mb-3">
                        <input
                            value={phone}
                            placeholder="Enter Phone no"
                            type="text"
                            onChange={(e) => setPhone(e.target.value)}
                            className="form-control"
                            id="inputPhone"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            value={address}
                            placeholder="Enter Your Address"
                            type="text"
                            onChange={(e) => setAddress(e.target.value)}
                            className="form-control"
                            id="inputAddress"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            value={answer}
                            placeholder="What is your favoruite sport"
                            type="text"
                            onChange={(e) => setAnswer(e.target.value)}
                            className="form-control"
                            id="inputAnswer"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Register
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default Register;