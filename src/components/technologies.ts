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
                <img src="/svg/technologies/html.svg" alt="logo do html" />
                <img src="/svg/technologies/css.svg" alt="logo do css" />
                <img src="/svg/technologies/javascript.svg" alt="logo do javascript" />
                <img src="/svg/technologies/typescript.svg" alt="logo do typescript" />
                <img src="/svg/technologies/tailwind.svg" alt="logo do tailwindCss" />
                <img src="/svg/technologies/less.svg" alt="logo do less" />
                <img src="/svg/technologies/react.svg" alt="logo do react" />
                <img src="/svg/technologies/vue.svg" alt="logo do vue" />
                <img src="/svg/technologies/node.svg" alt="logo do node" />
                <img src="/svg/technologies/sql.svg" alt="logo do sql" />
                <img src="/svg/technologies/prisma.svg" alt="logo do prisma" />
                <img src="/svg/technologies/vscode.svg" alt="logo do vscode" />
                <img src="/svg/technologies/figma.svg" alt="logo do figma" />
                <img src="/svg/technologies/git.svg" alt="logo do git" />
                <img src="/svg/technologies/vite.svg" alt="logo do vite" />
                <img src="/svg/technologies/html.svg" alt="logo do html" />
                <img src="/svg/technologies/css.svg" alt="logo do css" />
                <img src="/svg/technologies/javascript.svg" alt="logo do javascript" />
                <img src="/svg/technologies/typescript.svg" alt="logo do typescript" />
                <img src="/svg/technologies/tailwind.svg" alt="logo do tailwindCss" />
                <img src="/svg/technologies/less.svg" alt="logo do less" />
                <img src="/svg/technologies/react.svg" alt="logo do react" />
                <img src="/svg/technologies/vue.svg" alt="logo do vue" />
                <img src="/svg/technologies/node.svg" alt="logo do node" />
                <img src="/svg/technologies/sql.svg" alt="logo do sql" />
                <img src="/svg/technologies/prisma.svg" alt="logo do prisma" />
                <img src="/svg/technologies/vscode.svg" alt="logo do vscode" />
                <img src="/svg/technologies/figma.svg" alt="logo do figma" />
                <img src="/svg/technologies/git.svg" alt="logo do git" />
                <img src="/svg/technologies/vite.svg" alt="logo do vite" />
            </div>
        </slot>
        `;
  }
}

customElements.define("app-technologies", TechnologiesComponent);
