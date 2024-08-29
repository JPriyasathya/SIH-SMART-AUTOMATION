import React from 'react';

function Register() {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Register</h1>
            <form action="/register" method="post">
                <label style={styles.label} htmlFor="firstname">First Name:</label>
                <input style={styles.input} type="text" id="firstname" name="firstname" required />
                <label style={styles.label} htmlFor="lastname">Last Name:</label>
                <input style={styles.input} type="text" id="lastname" name="lastname" required />
                <label style={styles.label} htmlFor="email">Email:</label>
                <input style={styles.input} type="email" id="email" name="email" required />
                <label style={styles.label} htmlFor="password">Password:</label>
                <input style={styles.input} type="password" id="password" name="password" required />
                <label style={styles.label} htmlFor="confirmpassword">Confirm Password:</label>
                <input style={styles.input} type="password" id="confirmpassword" name="confirmpassword" required />
                <label style={styles.label} htmlFor="phone">Phone Number:</label>
                <input style={styles.input} type="tel" id="phone" name="phone" required />
                <button style={styles.button} type="submit">Submit</button>
            </form>
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
};

export default Register;
