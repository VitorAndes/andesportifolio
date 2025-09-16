class AboutComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot!.innerHTML = `
            <style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  color: var(--color-secondary);
  font-family: var(--font-title);
  letter-spacing:-3px;
  margin-bottom: 15px;

  font-size:var(--clamp-h1);

  display:inline-block;
  white-space:nowrap;
  overflow:hidden;
  border-right:0.1em solid var(--color-secondary);
  animation: typingAnimation 4s steps(11) infinite,cursorAnimation 0.5s step-end infinite alternate;
}

h2{
  display:flex;
  align-items:center;
  font-size:var(--clamp-h2);
  gap:5px;
  margin-top:13px;
}

span {
  font-family: var(--font-title);
  color: var(--color-secondary);
}

p {
  font-size:var(--clamp-p);
  color:var(--color-text);
  line-height: -1;
  margin-bottom:25px;
}

.socialMedia {
  display: flex;
  gap: 15px;

  a {
    color: var(--color-primary);
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease-in-out;
  }

  a:hover {
    filter: drop-shadow(0 0 1px var(--color-secondary));
    transform: scale(1.1);
  }
}

@keyframes typingAnimation {
  0%,10%{
    width:0;
  }
  45%,55%{
    width:11em;
  }
  90%,100%{
    width:0;
  }
}

@keyframes cursorAnimation{
  50%{
    border-right-color:transparent;
  }
}

            </style>

            <slot>
            <image-loading src="/images/avatar.avif" alt="foto de vitor andes"></image-loading>
                <div>
                    <h2>Vitor Andes <img src="/svg/check.svg" alt="check icon" /></h2>
                    <h1>Desenvolvedor front-end</h1>
                    <p>Um desenvolvedor especializado em front-end. Com um histórico sólido em <span>React, typescript, Javascript e node js</span>. Meu objetivo é continuar crescendo na área de desenvolvimento web, aplicando minhas habilidades para criar soluções inovadoras.</p>
                </div>
                <div class="socialMedia">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/VitorAndes">
                    <img src="svg/github.svg" alt="ícone do github"/>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/vitor-andes-dos-santos/">
                    <img src="svg/linkedin.svg" alt="ícone do linkedin" />
                  </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/vtr_andes/">
                <img src="svg/instagram.svg" alt="ícone do instagram" />
              </a>
                </div>
            </slot>
        `;
  }
}

customElements.define("app-about", AboutComponent);
