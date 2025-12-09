import { useAuthZustand } from "./useAuthZustand";
export default function Profile() {
    const logout = useAuthZustand((state) => state.logout);
    const handleLogout = () => {
        logout();
    }
    return (
        <div>
            <p>Profile Page</p>
            <button onClick={handleLogout}>ciqib ketw

            </button>
        </div>
    );
}