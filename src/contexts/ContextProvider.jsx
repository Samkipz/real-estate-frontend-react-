import { createContext, useContext, useState } from "react"

const StateContext = createContext({
    user: null,
    token: null,
    role: null,
    setUser: () => { },
    setToken: () => { },
    setRole: () => { }
});

export const ContextProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [role, setRole] = useState({});
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

    const setToken = (token) => {
        _setToken(token)

        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN', token);
        }
    }


    return (
        <StateContext.Provider value={{
            user,
            token,
            role,
            setToken,
            setUser,
            setRole
        }}>
            {children}

        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)