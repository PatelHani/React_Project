import { useEffect, useState } from "react";
import generateUniqueId from 'generate-unique-id'
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { addDataAsync } from "../service/action/userAction";
import { useNavigate } from "react-router";
const Add = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isCreated, errMSG } = useSelector(state => state.userReducer)
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
        console.log(input)
        dispatch(addDataAsync(input))
    }

    useEffect(() => {
        if (isCreated) {
            navigate('/');
        }
    }, [isCreated])

    return (
        <>
            <div className="containers">
                {errMSG ? <>
                    <div className="alert alert-danger" role="alert">
                        {errMSG}
                    </div>
                </>
                    : ""}
                <form onSubmit={handleSubmit}>
                    <h1>Recipes</h1>
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
                        <label >Ingredients ::</label>
                        <input type="text" id="ingredients" placeholder="Ingredients" value={input.ingredients} name="ingredients" onChange={handleChange} required />
                    </div>
                    <button type="submit">Add</button>
                </form>
            </div>
        </>
    )
}
export default Add