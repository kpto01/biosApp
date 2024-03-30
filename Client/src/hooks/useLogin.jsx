
import { useState } from 'react';
import { message } from 'antd';
import { useAuth } from '../contexts/AuthContext.jsx';

const useLogin = () => {
    const { login } = useAuth(); // Accede a la función login desde el contexto de autenticación
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const loginUser = async (values) => {
        try {
            setError(null);
            setLoading(true);
            const res = await fetch('http://localhost:4000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            const data = await res.json();
            console.log(data);
            if (res.status === 200) {
                message.success(data.message);
                login(data.token, data.user); 
            } else if (res.status === 401) {
                setError(data.message);
            } else {
                message.error('Ingreso fallido');
            }
        } catch (error) {
            message.error('Ingreso fallido');
        } finally {
            setLoading(false);
        }
    };

    return { loginUser, error, loading };
};

export default useLogin;
