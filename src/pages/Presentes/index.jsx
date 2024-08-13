import './style.css'
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { useNavigate } from 'react-router-dom';

function Presentes() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/pagamento');
    };

    return (
            <section className='containerCasal'>
                <div className="store">
                    <div className="item">
                        <figure><img src="/celta.jpg" alt="celtinha" /></figure>
                        <p className='preco'>R$ 10.000,00</p>
                        <p className='nitem'>O Céu ta preto</p>
                        <button onClick={handleClick}>Presentear</button>
                    </div>
                    <div className="item">
                        <figure><img src="/iphone.png" alt="iphone " /></figure>
                        <p className='preco'>R$ 5.000,00</p>
                        <p className='nitem'>Iphone</p>
                        <button onClick={handleClick}>Presentear</button>
                    </div>
                    <div className="item">
                        <figure><img src="/corsa.jpg" alt="conserto" /></figure>
                        <p className='preco'>R$ 2.000,00</p>
                        <p className='nitem'>Consertar o Corsinha</p>
                        <button onClick={handleClick}>Presentear</button>
                    </div>
                    <div className="item">
                        <figure><img src="/milho.png" alt="milao" /></figure>
                        <p className='preco'>R$ 1.000,00</p>
                        <p className='nitem'>Milão</p>
                        <button onClick={handleClick}>Presentear</button>
                    </div>
                    <div className="item">
                        <figure><img src="/qqr.jpg" alt="seila" /></figure>
                        <p className='preco'>R$ 500,00</p>
                        <p className='nitem'>Qualquer coisa</p>
                        <button onClick={handleClick}>Presentear</button>
                    </div>
                    <div className="item">
                        <figure><img src="/nsei.jpg" alt="nsei" /></figure>
                        <p className='preco'>R$ 400,00</p>
                        <p className='nitem'>Não sei</p>
                        <button onClick={handleClick}> Presentear</button>
                    </div>
                    <div className="item">
                        <figure><img src="/wisky.jpg" alt="wisky" /></figure>
                        <p className='preco'>R$ 300,00</p>
                        <p className='nitem'>Wisky</p>
                        <button onClick={handleClick}>Presentear</button>
                    </div>
                    <div className="item">
                        <figure><img src="/massagem.jpg" alt="massagem" /></figure>
                        <p className='preco'>R$ 200,00</p>
                        <p className='nitem'>Sessão de massagem</p>
                        <button onClick={handleClick}>Presentear</button>
                    </div>
                    <div className="item">
                        <figure><img src="/heiniken.jpg" alt="choppinho" /></figure>
                        <p className='preco'>R$ 100,00</p>
                        <p className='nitem'>Uma choppinho</p>
                        <button onClick={handleClick}>Presentear</button>
                    </div>
                </div>
            </section>
    )
}

export default Presentes
