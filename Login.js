import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const navigateToRegister = () => {
        navigate('/register');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Login</h1>
            <form action="/login" method="post">
                <label style={styles.label} htmlFor="email">Email:</label>
                <input style={styles.input} type="email" id="email" name="email" required />
                <label style={styles.label} htmlFor="password">Password:</label>
                <input style={styles.input} type="password" id="password" name="password" required />
                <button style={styles.button} type="submit">Login</button>
            </form>
            <button style={styles.button} onClick={navigateToRegister}>Register</button>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        backgroundColor: '#ffffff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        width: '300px',
        margin: 'auto',
    },
    heading: {
        marginBottom: '20px',
        color: '#333',
    },
    label: {
        display: 'block',
        width: '100%',
        margin: '10px 0',
    },
    input: {
        padding: '8px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
        width: '100%',
    },
    button: {
        width: '100%',
        marginTop: '20px',
        padding: '10px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
    socialLogin: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
    },
    socialIcon: {
        margin: '0 10px',
        cursor: 'pointer',
        width: '40px',
        height: '40px',
        transition: 'transform 0.2s',
    },
};

export default Login;
