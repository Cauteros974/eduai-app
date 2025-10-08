import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/userStore";
import type React from "react";

const headerStyle: React.CSSProperties = {
    height: 'var(--header-height)',
    background: 'var(--card-background)',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 40px',
};

const logoStyle: React.CSSProperties = {
    fontWeight: 'bold',
    fontSize: '24px',
    color: 'var(--primary-color)',
};

const navStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
};

export const Header = () => {
    const { user, logout } = useUserStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };
}