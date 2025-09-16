class TechnologiesComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot!.innerHTML = `
        
        <style>
            div {
              user-select: none;
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
                <img draggable="false" src="/svg/technologies/html.svg" alt="logo do html" />
                <img draggable="false" src="/svg/technologies/css.svg" alt="logo do css" />
                <img draggable="false" src="/svg/technologies/javascript.svg" alt="logo do javascript" />
                <img draggable="false" src="/svg/technologies/typescript.svg" alt="logo do typescript" />
                <img draggable="false" src="/svg/technologies/tailwind.svg" alt="logo do tailwindCss" />
                <img draggable="false" src="/svg/technologies/less.svg" alt="logo do less" />
                <img draggable="false" src="/svg/technologies/react.svg" alt="logo do react" />
                <img draggable="false" src="/svg/technologies/vue.svg" alt="logo do vue" />
                <img draggable="false" src="/svg/technologies/node.svg" alt="logo do node" />
                <img draggable="false" src="/svg/technologies/sql.svg" alt="logo do sql" />
                <img draggable="false" src="/svg/technologies/prisma.svg" alt="logo do prisma" />
                <img draggable="false" src="/svg/technologies/vscode.svg" alt="logo do vscode" />
                <img draggable="false" src="/svg/technologies/figma.svg" alt="logo do figma" />
                <img draggable="false" src="/svg/technologies/git.svg" alt="logo do git" />
                <img draggable="false" src="/svg/technologies/vite.svg" alt="logo do vite" />
                <img draggable="false" src="/svg/technologies/html.svg" alt="logo do html" />
                <img draggable="false" src="/svg/technologies/css.svg" alt="logo do css" />
                <img draggable="false" src="/svg/technologies/javascript.svg" alt="logo do javascript" />
                <img draggable="false" src="/svg/technologies/typescript.svg" alt="logo do typescript" />
                <img draggable="false" src="/svg/technologies/tailwind.svg" alt="logo do tailwindCss" />
                <img draggable="false" src="/svg/technologies/less.svg" alt="logo do less" />
                <img draggable="false" src="/svg/technologies/react.svg" alt="logo do react" />
                <img draggable="false" src="/svg/technologies/vue.svg" alt="logo do vue" />
                <img draggable="false" src="/svg/technologies/node.svg" alt="logo do node" />
                <img draggable="false" src="/svg/technologies/sql.svg" alt="logo do sql" />
                <img draggable="false" src="/svg/technologies/prisma.svg" alt="logo do prisma" />
                <img draggable="false" src="/svg/technologies/vscode.svg" alt="logo do vscode" />
                <img draggable="false" src="/svg/technologies/figma.svg" alt="logo do figma" />
                <img draggable="false" src="/svg/technologies/git.svg" alt="logo do git" />
                <img draggable="false" src="/svg/technologies/vite.svg" alt="logo do vite" />
            </div>
        </slot>
        `;
  }
}

customElements.define("app-technologies", TechnologiesComponent);
