import './style.css'
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { useNavigate } from 'react-router-dom';


function Confirmado() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/presenca');
    };

    return (
        <div className="container">
            <div className="conf">
                <p>Sua presença foi confirmada</p>
                <button onClick={handleClick}>Voltar</button>
            </div>
        </div>
    )
}

export default Confirmado
