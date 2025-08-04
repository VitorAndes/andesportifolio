class AboutComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot!.innerHTML = `
            <style>
                

                    img {                        
                        border-radius:4px;
                        width:100%;
                    }

            </style>

            <slot>
                <img src="/src/assets/images/avatar.avif" alt=""/>
                <div>
                    <h1>Olá! Sou Vitor Andes</h1>
                    <h4>Desenvolvedor front-end</h4>
                    <p>Um desenvolvedor especializado em front-end. Com um histórico sólido em <strong>React, typescript, Javascript e node js</strong>. Meu objetivo é continuar crescendo na área de desenvolvimento web, aplicando minhas habilidades para criar soluções inovadoras.</p>
                </div>
            </slot>
        `;
  }
}

customElements.define("app-about", AboutComponent);
