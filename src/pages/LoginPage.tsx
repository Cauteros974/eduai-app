import { LoginForm } from "../features/Auth/LoginForm";

const pageStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
};

export const LoginPage = () => {
    return(
        <div style={pageStyle}>
            <LoginForm />
        </div>
    );
};