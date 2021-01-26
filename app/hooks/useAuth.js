import jwtDecode from "jwt-decode";
import { useContext } from "react";
import AuthContext from "../auth/context";
import storage from "../auth/storage";

export default useAuth = () => {
    const { user, setUser } = useContext(AuthContext);

    const logOut = () => {
        setUser(null);
        storage.removeToken();
    }

    const logIn = (authToken) => {
        const user = jwtDecode(authToken);
        setUser(user);
        storage.storeToken(authToken);
    }

    return { user, logIn, logOut, setUser};
};

