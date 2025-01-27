import { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { addData, edituser, setdata } from "../service/action/userAction";
import { useNavigate, useParams } from "react-router";
const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const { user, isUpdated } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        img: "",
        name: "",
        price: "",
        description: "",
        ingredients: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setInput({ ...input, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(edituser(input))
        navigate("/")
    }
    useEffect(() => {
        dispatch(setdata(id))
    }, [])

    useEffect(() => {
        if (user)
            setInput(user);
    }, [user])

    useEffect(() => {
        if (isUpdated) {
            navigate("/")
        }
    }, [isUpdated]);


    return (
        <>
            <div className="containers">
                <form onSubmit={handleSubmit}>
                    <h1>Update The Recipe</h1>
                    <div className="form-group">
                        <label >Recipe Image :</label>
                        <input type="text" id="img" placeholder="Image" value={input.img} name="img" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label >Dish Name:</label>
                        <input type="text" id="recipename" placeholder="Name" value={input.name} name="name" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label >Price :</label>
                        <input type="number" id="price" placeholder="Amount" value={input.price} name="price" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label >Description :</label>
                        <input type="text" placeholder="Description" value={input.description} name="description" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label >Ingredients :</label>
                        <input type="text" id="ingredients" placeholder="Ingredients" value={input.ingredients} name="ingredients" onChange={handleChange} required />
                    </div>
                    <button type="submit">Update</button>
                </form>
            </div>
        </>
    )
}
export default Edit