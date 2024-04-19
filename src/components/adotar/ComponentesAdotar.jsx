import { BotaoEnviar, CampoAdotar, EstiloDoTextoDeEntrada, ImagemLoad, LabelInput, Titulo } from '../../styles/styles'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Email, Nome, Sobrenome, Celular, Descricao } from '../masks/Masks';
import loadingGif from '../../assets/loading.gif'

const ComponentesAdotar = () => {
    const [envioEmAndamento, setEnvioEmAndamento] = useState(false);
    const navigate = useNavigate();

    const [dadosFormulario, setDadosFormulario] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        celular: '',
        descricao: '',
    });

    const enviarFormulario = async () => {
        try {
            setEnvioEmAndamento(true);

            const rota = 'http://localhost:3000/formulario';
            const resp = await axios.post(rota, {
                nome: dadosFormulario.nome,
                sobrenome: dadosFormulario.sobrenome,
                email: dadosFormulario.email,
                celular: dadosFormulario.celular,
                descricao: dadosFormulario.descricao,
            });
            console.log(resp.data.mensagem);

            navigate('/sucesso');
        } catch (error) {
            console.error('Erro ao enviar o formulário', error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDadosFormulario({
            ...dadosFormulario,
            [name]: value,
        });
    };


    return (
        <>
            <Titulo>Preencha o formulário para adotar</Titulo>
            <CampoAdotar>
                <Nome value={dadosFormulario.nome} onChange={handleChange} />
                <LabelInput>Nome</LabelInput>
            </CampoAdotar>
            <CampoAdotar>
                <Sobrenome value={dadosFormulario.sobrenome} onChange={handleChange} />
                <LabelInput>Sobrenome</LabelInput>
            </CampoAdotar>
            <CampoAdotar>
                <Email value={dadosFormulario.email} onChange={handleChange} />
                <LabelInput>Email</LabelInput>
            </CampoAdotar>
            <CampoAdotar>
                <Celular value={dadosFormulario.celular} onChange={handleChange} />
                <LabelInput>Celular</LabelInput>
            </CampoAdotar>
            <CampoAdotar>
                <Descricao value={dadosFormulario.descricao} onChange={handleChange} />
                <LabelInput>Descrição</LabelInput>
            </CampoAdotar>
            <EstiloDoTextoDeEntrada>
                Tudo que você escrever nos campos acima não ficará armazenado em local nenhum. No campo descrição, descreva o porque você quer adotar um cãozinho.
            </EstiloDoTextoDeEntrada>
            <EstiloDoTextoDeEntrada>Caso o e-mail não esteja aparecendo em sua caixa de entrada, verifique o spam</EstiloDoTextoDeEntrada>
            <BotaoEnviar type='button' onClick={enviarFormulario} disabled={envioEmAndamento}>Enviar</BotaoEnviar>
            {envioEmAndamento && (
                <ImagemLoad src={loadingGif} alt="Carregando..." />
            )}
        </>
    )
}

export default ComponentesAdotar