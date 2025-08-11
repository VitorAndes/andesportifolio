import { ProjectsData } from "../data/projectsData";

class ProjectsComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.addNavbarEvents();
  }

  render() {
    this.shadowRoot!.innerHTML = `
    <style>
      * {
        margin:0;
        padding:0;
        box-sizing:border-box;
        text-decoration:none;
      }
      #container {
        display:flex;
        flex-direction:column;
        gap:15px;
      }
      .container {
        display:flex;
        overflow-x:hidden;
        height:795px;
        scroll-behavior: smooth;
        background: var(--color-tertiary);
        border-radius: 8px;
        backdrop-filter: blur(5px);
        box-shadow: 0px 0px 4px 0px var(--color-secondary);
        animation: fade 1s forwards;
        animation-fill-mode: backwards;
        animation-delay:1.5s;
      }

      .content {
        flex: 0 0 100%;
        display: flex;
        flex-direction: column;
        padding:8px;
      }
      .content .imgLink img {
        width:100%;
        border-radius:4px;
        margin-bottom:20px;
        transition:all .5s ease-in-out;
      }

      img:hover{
        transform:scale(1.01);
        animation:pulse 2s linear infinite;
      }

      @keyframes pulse {
        from{
          opacity:0;
        }
        to{
          opacity:1;
          tranform:scale(1.1);
        }
      }


      .content_infos { 
            .title {
                display:inline-flex;
                position:relative;
                align-items:baseline;
                gap:10px;
                transition:all .3s ease-in-out;
                color:var(--color-primary);
                
                h2 {
                    font-family:var(--font-title);
                    margin-bottom:10px;        
                }
            };

            .title:after{
                content:"";
                pointer-events:none;
                bottom: 10px;
                left:50%;
                position:absolute;
                width:0%;
                height:2px;
                background-color:var(--color-secondary);
                transition-timing-function:cubic-bezier(0.25,0.8, 0.25, 1);
                transition-duration:400ms;
                transition-property:width,left;
            };

            .title:focus,.title:hover{
                color:var(--color-secondary);
            };

            .title:focus:after,.title:hover:after{
                width:100%;
                left:0%;
            };

            p{
                color:var(--color-text);
                margin-bottom:20px;
            }
        }   

        .content_techs{
            display:flex;
            justify-self: end;
            gap:5px;

            .badge{
                font-family:var(--font-title);
                border: 1px solid var(--color-background);
                border-radius: 8px;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                padding: 6px 8px;
                background: var(--color-secondary);
                backdrop-filter: blur(5px);
                transition:all .3s ease-in-out;
            }

            .badge:hover{
                border:1px solid var(--color-secondary);
                background-color:var(--color-tertiary);
            }
        }

      .navbar {
        display:flex;
        gap:10px;
        padding: 12px;
        background: var(--color-tertiary);
        border-radius: 8px;
        backdrop-filter: blur(5px);
        box-shadow: 0px 0px 4px 0px var(--color-secondary);
        animation: fade 1s forwards;
        animation-fill-mode: backwards;
        animation-delay:.5s;
      }

      .nav-btn {
        cursor: pointer;
        padding: 6px 12px;
        border:none;
        background:transparent;
        font-family: var(--font-title);
        color:var(--color-secondary);
        transition: all 0.3s ease;
      }
      .nav-btn:hover {
        color: var(--color-primary);
      }

      .active{
        color: var(--color-primary);
      }

      @keyframes fade {
        0% {
          opacity: 0;
          transform: scale(1.1) ;
        }
        100% {
          opacity: 1;
          transform: scale(1) ;
        }
      }
    </style>

    <div id="container">
      <div class="navbar">
        ${ProjectsData.map(
          (project, i) => `
          <button class="nav-btn" data-index="${i}">
            <h3>${project.title}</h3>
          </button>
        `
        ).join("")}
      </div>
      <div class="container">
        ${ProjectsData.map(
          (project) => `
          <div class="content">
            <a class="imgLink" href=${
              project.link
            } target="_blank" rel="noopener noreferrer">
              <img src="${project.image}" />
            </a>
            <div class="content_infos">
              <a class="title" target="_blank" rel="noopener noreferrer" href="${
                project.github
              }">
                <h2>${project.title}</h2>
                <img src="/src/assets/svg/link.svg" alt="" />
              </a>
              <p>${project.description}</p>
            </div>
            <div class="content_techs">
              ${project.techs
                .map(
                  (tech) => `
                <span class="badge"><p>${tech}</p></span>
              `
                )
                .join("")}
            </div>
          </div>  
        `
        ).join("")}
      </div>
    </div>
    `;
  }

  addNavbarEvents() {
    const buttons =
      this.shadowRoot!.querySelectorAll<HTMLButtonElement>(".nav-btn");
    const container =
      this.shadowRoot!.querySelector<HTMLDivElement>(".container");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((button) => button.classList.remove("active"));

        btn.classList.toggle("active");

        const index = Number(btn.dataset.index);
        container!.scrollTo({
          left: index * container!.clientWidth,
          behavior: "smooth",
        });
      });
    });
  }
}

customElements.define("app-projects", ProjectsComponent);
