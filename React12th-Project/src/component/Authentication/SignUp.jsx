import { Link, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import './Account.css';
import { signUpAsync } from '../../service/action/Authentication';
import { useDispatch, useSelector } from 'react-redux';
const CreateAccount = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isCreated, errMsg } = useSelector(state => state.authReducer)
    const [inputs, setinputs] = useState({
        Email: "",
        Password: "",
        ConfirmPassword: ""
    })
    const hendelChange = (e) => {
        const { name, value } = e.target;
        setinputs({ ...inputs, [name]: value })
    }
    const hendelsubmit = (e) => {
        e.preventDefault();
        if (inputs.Password === inputs.CPassword) {
            console.log(inputs)
            dispatch(signUpAsync(inputs))
        } else {
            alert('Password Not Match')
        }
    }
    useEffect(() => {
        if (isCreated) {
            navigate("/login")
        }
    }, [isCreated])

    return (
        <>
            <div className="mt-5 pt-5"></div>
            <div className="body">
                <div className="container1">
                    <div className="wrapper">
                        {errMsg ? <>
                            <div className="alert alert-danger" role="alert">
                                {errMsg}
                            </div>
                        </>
                            : ""}
                        <form onSubmit={hendelsubmit}>
                            <h1>Register</h1>
                            <div className="input-box">
                                <input type="email" placeholder="Email" onChange={hendelChange} name='Email' value={inputs.Email} required />
                                <i className='bx bxs-user'></i>
                            </div>
                            <div className="input-box">
                                <input type="password" placeholder="Password" onChange={hendelChange} name='Password' value={inputs.Password} required />
                                <i className='bx bxs-lock-alt'></i>
                            </div>
                            <div className="input-box">
                                <input type="password" placeholder="Confirm Password" onChange={hendelChange} name='CPassword' value={inputs.CPassword} required />
                                <i className='bx bxs-lock-alt'></i>
                            </div>
                            <button type="submit" className="btn">Register</button>
                            <div className="register-link">
                                <p>Already have an account? <Link to="/login">Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CreateAccount;