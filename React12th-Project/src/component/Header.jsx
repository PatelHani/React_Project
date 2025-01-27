import { Button, Container } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { useNavigate } from "react-router";
import { GiCook } from "react-icons/gi";
import './style.css'
import { useSelector } from "react-redux";
const Header = () => {
    const { user } = useSelector(state => state.AuthenticationReducer)
    const navigate = useNavigate()
    const handleAdd = () => {
        navigate('/add')
    }
    const handleHome = () => {
        navigate('/')
    }
    const handleLogin = () => {
        if(user){
                // logout action called....
        }else{
            navigate('/login')
        }
    }
    return (
        <>
            <div className="px-3 header">


                <div className="header-data">
                    <div>
                        <h3 className="recipe-book">RECIPE BOOK</h3>
                    </div>
                    <div>
                        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            <li className="me-4">
                                <Button onClick={handleHome}>
                                    < div className="me-2" size={17} > </div>
                                    Home
                                </Button>
                            </li>
                            <li >
                                <Button onClick={handleAdd} disabled={!user}>
                                    <div className="me-2" > </div>
                                    Add Recipe
                                </Button>
                            </li>
                            <li >
                                <Button onClick={handleLogin}>
                                    <div className="me-2" > </div>
                                    {user ? "LogOut" : "Login"}
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Header;