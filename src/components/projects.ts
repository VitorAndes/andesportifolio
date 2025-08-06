import { ProjectsData } from "../data/projectsData";

class projects extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot!.innerHTML = `
    <style>
        *{
            margin:0;
            padding:0;
            box-sizing:border-box;
            text-decoration:none;
        }


        .container{
            display:grid;
            gap:20px;
            grid-template-columns:1fr 1fr;
        }

        .content {
            height:410px;
            picture > img {
                width:100%;
                border-radius:8px;
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

                img {
                    color:red;
                    fill:red;
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
    
    </style>
    
    <div class="container">
        ${ProjectsData.map((project, i) => {
          return `
        <div class="content">
            <picture>
                <img src="${project.image}" />
            </picture>
            <div class="content_infos">
                <a class="title" target="_blank" rel="noopener noreferrer" href="${
                  project.link
                }">
                    <h2>${project.title}</h2>
                    <img src="/src/assets/svg/link.svg" alt="" />
                </a>
                <p>${project.description}</p>
            </div>
            <div class="content_techs">
                ${project.techs
                  .map((tech) => {
                    return `
                        <span class="badge">
                            <p>${tech}</p>
                        </span>
                    `;
                  })
                  .join(" ")}
            </div>            
        </div>  
        `;
        }).join("")}
    </div>
    `;
  }
}

customElements.define("app-projects", projects);
