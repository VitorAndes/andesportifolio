class SocialMediaComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot!.innerHTML = `
    <style>
      div {
        display:flex;
        gap:15px;

        a:hover{
          transition:all .3s ease-in-out;
          transform:scale(1.1);
        }
      }
    </style>
        
        <slot>
            <h4>Contatos</h4>
            <div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/VitorAndes">
                    <img src="/src/assets/svg/github.svg" alt="ícone do github"/>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/vitor-andes-dos-santos/">
                    <img src="/src/assets/svg/linkedin.svg" alt="ícone do linkedin" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/vtr_andes/">
                <img src="/src/assets/svg/instagram.svg" alt="ícone do instagram" />
                </a>
            </div>
        </slot>
        `;
  }
}

customElements.define("app-social", SocialMediaComponent);
