const initalState = {
    user: null,
    isCreated: false,
    errMsg: "",
    loginerr: "",
    logout: false,
}
export const AuthenticationReducer = (state = initalState, action) => {
    switch (action.type) {
        case "SIGNUP_SUC":
            return {
                ...state,
                isCreated: true,
                logout: false
            }
        case "SIGNUP_REJ":
            return {
                ...state,
                errMsg: action.payload
            }
        case "SIGNIN_REJ":
            return {
                ...state,
                loginerr: action.payload
            }
        case "SIGNIN_SUC":
            return {
                ...state,
                isCreated: false,
                user: action.payload,
                logout: false
            }
        case "LOGOUT_SUC":
            return {
                ...state,
                user: null,
                logout: true
            }
        default:
            return state;
    }
}