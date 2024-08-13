import './style.css'
import Footer from "../../components/Footer"
import Header from "../../components/Header"

import React, { useState } from 'react';


function Presenca() {
    const [telefone, setTelefone] = useState('');
    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [email, setEmail] = useState('');
    const [obs, setObs] = useState('');

    const handleTelefoneChange = (event) => {
        let inputTelefone = event.target.value;

        // Remove caracteres não numéricos
        inputTelefone = inputTelefone.replace(/\D/g, '');

        // Formatação do telefone
        let formattedTelefone = '';
        if (inputTelefone.length === 11) {
            formattedTelefone = `(${inputTelefone.substring(0, 2)}) ${inputTelefone.substring(2, 7)}-${inputTelefone.substring(7)}`;
        } else if (inputTelefone.length === 10) {
            formattedTelefone = `(${inputTelefone.substring(0, 2)}) ${inputTelefone.substring(2, 6)}-${inputTelefone.substring(6)}`;
        } else {
            formattedTelefone = inputTelefone;
        }

        // Atualiza o estado do telefone formatado
        setTelefone(formattedTelefone);
    };

    const limparFormulario = () => {
        setNome('');
        setQuantidade('');
        setTelefone('');
        setEmail('');
        setObs('');
    };

    const onSubmit = (e) => { // caso eu quisesse gerar um json ao invez de salvar na planilha
        e.preventDefault();
        const data = {
            nome: e.target.elements.nome.value,
            quantidade: e.target.elements.quantidade.value,
            telefone: e.target.elements.telefone.value,
            email: e.target.elements.email.value,
            obs: e.target.elements.obs.value,
        }
        console.log(data);
        limparFormulario();
    }

    return (
            <div className="container">
                <div className="horaLocal">
                    <p><span>16/11/2030</span> - <span>21:00</span></p>
                    <p>Avenida Francisco Matarazzo, 1705, R. Palestra Itália, 200 - Água Branca - SP</p>
                </div>
                <div className="mapBox">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1265545171404!2d-46.67904019899135!3d-23.52795021543006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57fd1d715d45%3A0x864e5421d6195cb1!2sAllianz%20Parque!5e0!3m2!1sen!2sbr!4v1719498895023!5m2!1sen!2sbr"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="container2">
                    <form
                        // onSubmit={onSubmit} -- caso eu quisesse gerar um json ao invez de salvar na planilha
                        action="https://api.sheetmonkey.io/form/iwJnNVwF48oJKt1cewQgb"
                        method="post">
                        <div className="form">
                            <label htmlFor="nome">Nome Completo: </label>
                            <input type="text" id="nome" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
                        </div>
                        <div className="form">
                            <label htmlFor="quantidade">Quantidade total de pessoas incluindo você:</label>
                            <input type="number" id="quantidade" name="quantidade" min="1" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} required />
                        </div>
                        <div className="form">
                            <label htmlFor="telefone">Número de Telefone:</label>
                            <input type="tel" id="telefone" name="telefone" value={telefone} onChange={handleTelefoneChange} required />
                        </div>
                        <div className="form">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form">
                            <label htmlFor="obs">Observações:</label>
                            <textarea id="obs" name="obs" value={obs} onChange={(e) => setObs(e.target.value)} />
                        </div>
                        <div className="form">
                            <div className="button-container">
                                <button type="submit">Confirmar</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
    )
}

export default Presenca
