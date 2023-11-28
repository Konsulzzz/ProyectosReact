import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../store/storelogin';

function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAutenticated, userName, userRol } = useSelector((state) => state.login);

    useEffect(() => {
        if (!isAutenticated) {
            navigate('/');
        }
    }, [isAutenticated, navigate]);

    const handleLogout = () => {
        // Despacha la acción de logout al store
        dispatch(loginActions.logout());

        // Navega a la página principal
        navigate('/');
    };

    // Mostrar datos en la consola
    useEffect(() => {
        console.log('Datos del usuario:', { isAutenticated, userName, userRol });
    }, [isAutenticated, userName, userRol]);

    return (
        <>
            <h1>Página home de {userName}</h1>
            <h2>{userName && userRol && `${userName}, Rol: ${userRol}`}</h2>
            <button onClick={handleLogout}>Salir</button>
        </>
    );
}

export default Home;
