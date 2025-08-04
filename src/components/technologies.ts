class TechnologiesComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot!.innerHTML = `
        
        <style>
            div {
             display: flex;
             gap: 30px;
             padding:5px;
             animation: carrousel 30s linear infinite;
            }


            @keyframes carrousel {
              0% {
                transform: translateX(0);
              }
              50% {
                transform: translateX(-50%); 
              }
              100%{
                transform:translateX(0);
              }
            }
        </style>
        <slot>
            <div>
                <img src="/src/assets/svg/technologies/html.svg" alt="logo do html" />
                <img src="/src/assets/svg/technologies/css.svg" alt="logo do css" />
                <img src="/src/assets/svg/technologies/javascript.svg" alt="logo do javascript" />
                <img src="/src/assets/svg/technologies/typescript.svg" alt="logo do typescript" />
                <img src="/src/assets/svg/technologies/tailwind.svg" alt="logo do tailwindCss" />
                <img src="/src/assets/svg/technologies/less.svg" alt="logo do less" />
                <img src="/src/assets/svg/technologies/react.svg" alt="logo do react" />
                <img src="/src/assets/svg/technologies/vue.svg" alt="logo do vue" />
                <img src="/src/assets/svg/technologies/node.svg" alt="logo do node" />
                <img src="/src/assets/svg/technologies/sql.svg" alt="logo do sql" />
                <img src="/src/assets/svg/technologies/prisma.svg" alt="logo do prisma" />
                <img src="/src/assets/svg/technologies/vscode.svg" alt="logo do vscode" />
                <img src="/src/assets/svg/technologies/figma.svg" alt="logo do figma" />
                <img src="/src/assets/svg/technologies/git.svg" alt="logo do git" />
                <img src="/src/assets/svg/technologies/vite.svg" alt="logo do vite" />
                <img src="/src/assets/svg/technologies/html.svg" alt="logo do html" />
                <img src="/src/assets/svg/technologies/css.svg" alt="logo do css" />
                <img src="/src/assets/svg/technologies/javascript.svg" alt="logo do javascript" />
                <img src="/src/assets/svg/technologies/typescript.svg" alt="logo do typescript" />
                <img src="/src/assets/svg/technologies/tailwind.svg" alt="logo do tailwindCss" />
                <img src="/src/assets/svg/technologies/less.svg" alt="logo do less" />
                <img src="/src/assets/svg/technologies/react.svg" alt="logo do react" />
                <img src="/src/assets/svg/technologies/vue.svg" alt="logo do vue" />
                <img src="/src/assets/svg/technologies/node.svg" alt="logo do node" />
                <img src="/src/assets/svg/technologies/sql.svg" alt="logo do sql" />
                <img src="/src/assets/svg/technologies/prisma.svg" alt="logo do prisma" />
                <img src="/src/assets/svg/technologies/vscode.svg" alt="logo do vscode" />
                <img src="/src/assets/svg/technologies/figma.svg" alt="logo do figma" />
                <img src="/src/assets/svg/technologies/git.svg" alt="logo do git" />
                <img src="/src/assets/svg/technologies/vite.svg" alt="logo do vite" />
            </div>
        </slot>
        `;
  }
}

customElements.define("app-technologies", TechnologiesComponent);
