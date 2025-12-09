import { Navigate } from "react-router-dom";
import { useAuthZustand } from "@/useAuthZustand";
export default function ProtectedRoute({ children }) {
    const isAuth = useAuthZustand((state) => state.isAuth);
    if (!isAuth) {
        return <Navigate to="/login" replace />;
    }
    return children;
}