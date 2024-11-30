import react from 'react'
import './UserProfileCard.css'

const UserProfileCard = ({ name, desc, image, age, Email, Contact }) => {
    return (
        <div className='upc'>
            <div className="gradiant"></div>
            <div className="profile-down">
                <img src={image} style={{height: 150, padding: 5}} alt="" />
                <div className="profile-title"><span>Name: </span> {name}</div>
                <div className="profile-discription"><span> About:</span> {desc}</div>
                <div className='age'><span>Age:</span> {age} </div>  
                <div className='email'><span>Email:</span> {Email}</div>
                <div className='Contact'><span>Contact me:</span> {Contact}</div>
            </div>
        </div>
    )
}

export default UserProfileCard