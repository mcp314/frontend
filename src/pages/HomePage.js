import React from "react";
import "../styles/components/pages/Homepage.css"

const HomePage = (props) => {
    return(
        <main className="holder">
            <div className="homeimg">
                <img src="images/car1.png" alt="Portada"/>
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente Excelente</span>
                        <span className="autor">Juan Perez - zarasa.com</span>
                    </div>
                </div>
            </div>
        </main>
        
    );
}
export default HomePage;