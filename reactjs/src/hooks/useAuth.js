import {useState, createContext, useContext} from "react";
import axios from "axios";

const UserContext = createContext({
    user: null,
    login: (identifier, password)=>undefined,
    signup: (username, email, password)=>undefined,
    error: null,
    loading: false,
    logout: (id)=>undefined,
})


export const UserProvider=({children})=>{
    const [user, setUser] = useState(null)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const login=(identifier, password)=>{
        setLoading(true)
        axios.post('/api/auth/local',{
            identifier,
            password
          }).then(({data})=>{
            setUser(data.user)
            //navigate('/home')
          }).catch(error=>{
            setError(error.message)
            setUser(null)
          
          }).finally(()=>{
              setLoading(false)
          })
    }
    const signup = (username, email, password)=>{
            axios.post('/api/auth/local/register',{
                username,
                password,
                email
            }).then(({data})=>{
                setUser(data.user)
                //navigate('/home')
            }).catch(error=>{
                setError(error.message)
                setUser(null)
            
            }).finally(()=>{
                setLoading(false)
            })
}
return(
<UserContext.Provider value = {{
    user,
    login,
    signup,
    error,
    loading
}}>
    {children}
</UserContext.Provider>

)
}   
const useAuth=()=>{
    return useContext(UserContext)
}

export default useAuth