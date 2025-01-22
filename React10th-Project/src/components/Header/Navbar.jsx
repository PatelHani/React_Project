import React, {useContext} from 'react'
import { Link } from "react-router-dom"
import { auth } from '../../Config/Firebase';
import { signOut } from "firebase/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthenticatedContext } from '../../Redux/AuthenticatedContext';
function Navbar() {
    const {isAuthenticated, setIsAuthenticated,setCountAccount,setCountTransaction}= useContext(AuthenticatedContext);
    const handleClick = () => {
        

        signOut(auth).then(() => {
            toast.success('User has been logged Out!', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
             });
            setIsAuthenticated(false)
        }).catch((error) => {
            toast.error(error.message, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        });
    }
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark " style={{ zIndex: '1000' }} >
                <div class="container">
                    <Link class="navbar-brand h1 " to="/">ICICI BANK</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        
                        {!isAuthenticated
                        ?<Link type="button" class="btn btn-light ms-auto " to="/login">Login</Link>
                        :<div className='ms-auto'>
                        <Link type="button" class="btn btn-light me-2" to="/dashboard">HOME</Link>
                        <button type="button" class="btn btn-danger text-white" onClick={handleClick}>Logout</button>   
                        </div>
                        }
                    </div>
                    
                </div>
            </nav>
        </header>
    )
}

export default Navbar