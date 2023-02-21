import { createContext, useContext, useState } from "react"

const StateContext = createContext({
    user: null,
    token: null,
    role: null,
    // setUser: () => { },
    setUserFunc: () => { },
    setToken: () => { },
    setRole: () => { }
});

export const ContextProvider = ({ children }) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [role, setRole] = useState({});
    const [tenantIssues, setTenantIssues] = useState({});
    const [success, setSuccess] = useState(false);
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

    const setToken = (token) => {
        _setToken(token)

        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN', token);
        }
    }

    const setUserFunc = (user) => {
        setUser(user)

        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem('user', user);
        }
    }


    return (
        <StateContext.Provider value={{
            user,
            token,
            role,
            success,
            setSuccess,
            setToken,
            setUserFunc,
            setRole,
            tenantIssues,
            setTenantIssues, setUser
        }}>
            {children}

        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)