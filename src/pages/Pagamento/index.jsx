import './style.css'
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { useNavigate } from 'react-router-dom';


function Pagamento() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/presentes');
    };

    return (
            <div className="container">
                <div className="pag">
                    <p className='titulo'>Faz o pix ae!</p>
                    <figure><img src="/pix.png" alt="pix" /></figure>
                    <p className='titulo'>Escaneie o QRcode acima ou copie e cole o código abaixo</p>
                    <p>00020126360014BR.GOV.BCB.PIX0114+55119753972495204000053039865802BR5925Joao Victor Zanatta Nasci6009SAO PAULO621405103nsLCNHmHK63049608</p>
                    <button onClick={handleClick}>Voltar</button>
                </div>
            </div>
    )
}

export default Pagamento
