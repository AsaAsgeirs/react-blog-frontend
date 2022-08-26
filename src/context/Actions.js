//afhverju les hann ekki userCredentials?

//Youtube commentið: Hi guy, I forgot to demonstrate 
//usage of the Action file. In the video, we directly dispatched them using 'type' and 'payload' like:
//-> dispatch({ type: "LOGIN_SUCCESS", payload: res.data }); 
//But you can use actions.-> dispatch(LoginSuccess(res.data))

//terminal: ERROR in Failed to load plugin 'jest' declared in 'package.json » eslint-config-react-app/jest': Cannot read property 'meta' of undefined

//næ ekki að skrá nýjan user.. 

export const LoginStart = () => ({
    type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE"
});

export const Logout = () => ({
    type: "LOGOUT"
});

export const UpdateStart = (userCredentials) => ({
    type: "UPDATE_START",
});

export const UpdateSuccess = (user) => ({
    type: "UPDATE_SUCCESS",
    payload: user,
});

export const UpdateFailure = () => ({
    type: "UPDATE_FAILURE"
});