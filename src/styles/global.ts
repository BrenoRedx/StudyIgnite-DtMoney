import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        //Fundo da tela
        --background: #f0f2f5;
        --green: #33cc95;
        --red: #e52e4d;
        --blue: #5429cc;

        --blue-light: #6933ff;
        
        //Títulos
        --text-title: #363f5f;
        //Textos
        --text-body: #969cb9;
        //Shapes: espaçamentos na tela
        --shape: #FFFFFF
    }
    
    //Deixando por padrão os elemntos com a margem e o padding 0
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    //Tornando os textos da tela responsivo / Configuração do Rem que será usado como medida relativa
    html{
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-widt: 720px) {
            font-size: 87.5%
        }
    }
    // Configurando o body da minha aplicação
    body {
        background: var(--background);
        -webkit-font-smoothing: antialised;
    }
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1,h2,h3,h4,h5,h5,strong {
        font-weight: 500;
    }
        // Tornando todas as tags button com o cursor pointer de click
    button {
        cursor: pointer;
    }
    // Os campos que estão desabilitados terão uma opacidade maior e um cursor de bloqueio. Será mais utilizado para campos desabilitados de um formulário
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    .react-modal-overlay{
        background: rgb(0,0,0,0.5);
        position: fixed;
        top: 0;
        bottom:0;
        left:0;
        right:0;
        align-items: center;
        justify-content: center;
        display:flex;
    }
    .react-modal-content {
        width:100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius:0.25rem;
    }
    .button-close-modal{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    
}
`