import { useAuthZustand } from "./useAuthZustand";


export default function Login() {
    const login = useAuthZustand((state) => state.login);
    const handleLoginOtiw = () => {
        login("1007");
    }
    return (
        <div>
            <p>Login</p>
            <button className="cursor-pointer" onClick={handleLoginOtiw}>Login otiw</button>
        </div>
    )
}