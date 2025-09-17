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
        height:743px;
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
      .content_infos { 
              h2 {
                color:var(--color-primary);
                  font-family:var(--font-title);
                  font-size:var(--clamp-h2);
                  margin-bottom:10px;
                  margin-top:25px;        
              }

            

            p{
                font-size:var(--clamp-p);
                color:var(--color-text);
                margin-bottom:20px;
                max-width:700px; 
            }
        }


        
        
        .info_project{
          display:flex;
          justify-content:space-between;
          align-items:baseline;
          flex-wrap:wrap;

          >div{
            display:flex;
            gap:15px;
            margin-bottom:20px;
          }
          .project_link {
            
            
            font-size:var(--clamp-p);
            color:var(--color-text);
                display:inline-flex;
                position:relative;
                align-items:center;
                gap:10px;
                
                transition:all .3s ease-in-out;

                >img{
                  width:24px;
                }
                
              };
              

            .project_link:after{
                content:"";
                pointer-events:none;
                bottom: -10px;
                left:50%;
                position:absolute;
                width:0%;
                height:2px;
                background-color:var(--color-secondary);
                transition-timing-function:cubic-bezier(0.25,0.8, 0.25, 1);
                transition-duration:400ms;
                transition-property:width,left;
            };

            .project_link:focus,.project_link:hover{
                color:var(--color-secondary);
            };

            .project_link:focus:after,.project_link:hover:after{
                width:100%;
                left:0%;
            };
        }

        .content_techs{
            display:flex;
            gap:5px;

            .badge{
                font-family:var(--font-title);
                border: 1px solid var(--color-background);
                border-radius: 8px;
                
                display: flex;
                flex-direction: column;
                padding: 6px 8px;
                background: var(--color-secondary);
                backdrop-filter: blur(5px);
                transition:all .3s ease-in-out;
                font-size:var(--clamp-p);
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
        font-size:var(--clamp-p);
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


      @media (max-width:1280px){
        .container{
          height:fit-content;
        }

        .navbar{
          flex-direction:column;
        }
      }
    </style>

    <div id="container">
      <div class="navbar">
        ${ProjectsData.map(
          (project, i) => `
          <button class="nav-btn" data-index="${i}">
            <p>${project.title}</p>
          </button>
        `
        ).join("")}
      </div>
      <div class="container">
        ${ProjectsData.map(
          (project) => `
          <div class="content">
            <image-loading src="${
              project.image
            }" alt="imagem do projeto"></image-loading>
            <div class="content_infos">
              <div class="info_project">
                
                <h2>${project.title}</h2>
                

              <div>
                <a class="project_link " target="_blank" rel="noopener noreferrer" href=${
                  project.github
                }>github <img src="svg/github.svg"/></a>
                <a class="project_link " target="_blank" rel="noopener noreferrer" href=${
                  project.link
                }>projeto <img src="svg/link.svg"/></a>
              </div>
              </div>
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
