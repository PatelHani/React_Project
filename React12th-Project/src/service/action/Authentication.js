import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../../config/firebase"
// import { data } from "react-router"
import { data } from "react-router"

export const signupSuc = () => {
    return {
        type: "SIGNUP_SUC"
    }
}
export const signuprej = (data) => {
    return {
        type: "SIGNUP_REJ",
        payload: data
    }
}
export const siginrej = (data) => {
    return {
        type: "SIGNIN_REJ",
        payload: data
    }
}
export const signinSuc = (data) => {
    return {
        type: "SIGNIN_SUC",
        payload: data
    }
}
export const signoutSucc = () => {
    return {
        type: "LOGOUT_SUC"
    }
}
export const signUpAsync = (data) => {
    return async (dispatch) => {
        try {
            createUserWithEmailAndPassword(auth, data.Email, data.Password)
                .then((res) => {
                    dispatch(signupSuc())
                })
                .catch(err => {
                    dispatch(signuprej(err.message))
                });
        } catch (err) {
            dispatch(signuprej(err.message))
        }
    }
}
export const signInAsync = (data) => {
    return async (dispatch) => {
        try {
            signInWithEmailAndPassword(auth, data.Email, data.Password)
                .then((res) => {
                    dispatch(signinSuc(res.user))
                })
                .catch(err => {
                    dispatch(siginrej(err.message))
                });
        } catch (err) {
            dispatch(signuprej(err.message))
        }
    }
}
export const signOutAync = () => {
    return async dispatch => {
        try {
            signOut(auth).then(() => {
                dispatch(signoutSucc())
            }).catch((err) => {
                dispatch(signuprej(err.message))
            })
        } catch (err) {
            console.log(err);
            dispatch(signuprej(err.message))
        }
    }
}