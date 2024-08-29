import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    
    const navigateToLogin = () => {
        navigate('/login');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Select Member Type</h1>
            <button style={styles.button} onClick={navigateToLogin}>Local Member</button>
            <button style={styles.button} onClick={navigateToLogin}>Village Member</button>
            <button style={styles.button} onClick={navigateToLogin}>Zone Member</button>
            <button style={styles.button} onClick={navigateToLogin}>District Member</button>
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',  // Align content at the top
        alignItems: 'center',
        height: '100vh',
        marginTop: '10px',  // Add some margin from the top
    },
    heading: {
        marginBottom: '20px',
        color: '#333',
    },
    button: {
        width: '80%',  // Adjust button width to be consistent
        margin: '10px 0',
        padding: '10px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
};

export default Home;
