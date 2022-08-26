import apiClient from './general'; 
export const signInReq = async (user)=>{
    let response = await apiClient.post('/signin',{
        email: user.email,
        password: user.password
    })
    console.log(response);
    return 
}