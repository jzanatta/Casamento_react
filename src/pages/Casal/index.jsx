import './style.css'
import Footer from "../../components/Footer"
import Header from "../../components/Header"

function Casal() {
    return (
        <section className='containerCasal'>
            <div className="fotos">
                <figure><img src="/img1.png" alt="img1" /></figure>
                <figure><img src="/img2.png" alt="img2" /></figure>
                <figure><img src="/img3.png" alt="img3" /></figure>
                <figure><img src="/img4.png" alt="img4" /></figure>
                <figure><img src="/img5.png" alt="img5" /></figure>
                <figure><img src="/img6.png" alt="img6" /></figure>
                <figure><img src="/img7.png" alt="img7" /></figure>
                <figure><img src="/img8.png" alt="img8" /></figure>
                <figure><img src="/img9.png" alt="img9" /></figure>
                <figure><img src="/img10.png" alt="img10" /></figure>
                <figure><img src="/img11.png" alt="img11" /></figure>
                <figure><img src="/img12.png" alt="img12" /></figure>
                <figure><img src="/img13.png" alt="img13" /></figure>
                <figure><img src="/img14.png" alt="img14" /></figure>
            </div>
            <div className="texto">
                <p>Se conheceram na escola, onde muitos acreditam que o primeiro amor não dura, mas provam a todo momento o contrário.</p>
                <p>O que começou como uma amizade inocente, em que ela fazia todos os deveres dele, se transformou em algo muito maior, uma conexão única.</p>
                <p>Juntos, eles viveram e vivem todas as pequenas vitórias: a compra do primeiro carro, a aprovação na faculdade, o primeiro emprego, sempre como parceiros.</p>
                <p>O primeiro amor, pode sim dar certo! Para <span>João</span> e <span>Isabella</span>, a escola foi o início de uma linda e duradoura história de amor, que continua a se fortalecer a cada dia.</p>
            </div>
        </section>
    )
}

export default Casal
