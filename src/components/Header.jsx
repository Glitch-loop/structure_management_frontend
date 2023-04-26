import React from 'react';

const Header = ({name, pic}) => {
    return (
        <div className="w-5/6 h-20 mx-auto mb-12 rounded-b-xl bg-pink flex justify-between">
            <div className="w-1/3 h-full flex items-center">
                <p className="w-full h-5/6 mx-5 font-Montserrat font-thin">
                    Bienvenido {name}
                </p>
            </div>
            <div className="w-1/3 h-full">
                <img alt="Imagen de Perfil"/>
            </div>
        </div>
    );
}

export default Header;