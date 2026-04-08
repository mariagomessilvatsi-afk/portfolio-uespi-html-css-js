const formulario = document.querySelector('#meu-formulario');

function validarFormulario(event) {
    event.preventDefault();

    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const msg = document.querySelector('#msg').value;

    if (nome === "" || email === "" || msg === "") {
        alert("Por favor, preencha todos os campos antes de enviar.");
    } else {
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        formulario.reset();
    }
}

formulario.addEventListener('submit', validarFormulario);

const btnTema = document.querySelector('#btn-tema');
const body = document.body;

function alternarTema() {
    body.classList.toggle('dark-theme');

    // Altera o texto do botao conforme o tema.
    if (body.classList.contains('dark-theme')) {
        btnTema.innerText = "Claro";
    } else {
        btnTema.innerText = "Escuro";
    }
}

btnTema.addEventListener('click', alternarTema);

const meusProjetos = [
    {
        titulo: "Projeto 01 - Portfolio em HTML, CSS e JS",
        descricao: "Meu portfolio de apresentacao feito com tecnologias modernas.",
        links: [
            { label: "Ver no GitHub Pages", url: "https://mariagomessilvatsi-afk.github.io/portfolio-uespi-html-css-js/" },
            { label: "Ver repositorio no GitHub", url: "https://github.com/mariagomessilvatsi-afk/portfolio-uespi-html-css-js" }
        ]
    },
    {
        titulo: "Projeto 02 - Portfolio com React",
        descricao: "Meu portfolio de apresentacao feito com React, uma biblioteca JavaScript para construcao de interfaces de usuario.",
        links: [
            { label: "Ver deploy na Vercel", url: "https://meu-portfolio-react-gold.vercel.app/" },
            { label: "Ver repositorio no GitHub", url: "https://github.com/mariagomessilvatsi-afk/meu-portfolio-react" }
        ]
    }
];

function renderizarProjetos() {
    const container = document.querySelector('.projetos-container');

    container.innerHTML = "";

    meusProjetos.forEach(projeto => {
        let linksHTML = "";
        if (projeto.links) {
            linksHTML = projeto.links.map(l => `<a href="${l.url}" target="_blank">${l.label}</a>`).join("<br>");
        } else if (projeto.link) {
            linksHTML = `<a href="${projeto.link}" target="_blank">Ver no GitHub</a>`;
        }
        const cardHTML = `
            <article class="card-projeto">
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
                ${linksHTML}
            </article>
        `;
        container.innerHTML += cardHTML;
    });
}

renderizarProjetos();
