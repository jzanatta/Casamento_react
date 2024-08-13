import './style.css'
import Footer from "../../components/Footer"
import Header from "../../components/Header"

function Home() {
    return (
        <section className='container'>
            <figure>
                <img className='img-home' src="/Palmeiras2.png" alt="Imagem Home" />
            </figure>
            <div className="assinatura">
                João e Isa
            </div>
            <div className="texto">
                <p>Depois de vinte anos namorando, finalmente vamos celebrar nossa união, e você está convidado para compartilhar esse momento especial conosco.</p>
                <p>Estamos muito felizes e contamos com a presença de todos no nosso grande dia!</p>
                <p>Ah, é importante confirmar sua presença pelo site, para isso, contamos com sua ajuda clicando no menu <span>"</span>Confirme sua Presença<span>"</span> e preenchendo os dados necessários.</p>
                <p>Para nos presentear, escolha qualquer item da <span>"</span>Lista de presentes<span>"</span>, fiquem à vontade!</p>
                <p>Aguardamos vocês no nosso grande dia!</p>
            </div>
        </section>
    )
}

export default Home