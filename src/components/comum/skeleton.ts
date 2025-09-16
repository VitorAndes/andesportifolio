class ImageWithLoading extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot!.innerHTML = `
          <style>
            :host {
              display: flex;
              justify-content:center;
            }
            #placeholder {
              background:rgba(224, 224, 224, 0.33);
              width: 100%;
              height: 341px;
              animation: pulse 1.25s ease-in-out infinite;
            }
            img {
              display: none;
              width: 100%;
              height: auto;
              border-radius:4px;
            }
            img.loaded {
              display: block;
            }

            @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
            box-shadow: 0 0 0 0 rgba(0,0,0,0.0);
          }
          50% {
            transform: scale(0.995);
            opacity: 0.85;
            box-shadow: 0 6px 18px -6px rgba(0,0,0,0.08);
          }
          100% {
            transform: scale(1);
            opacity: 1;
            box-shadow: 0 0 0 0 rgba(0,0,0,0.0);
          }
        }
          </style>
          <div id="placeholder"></div>
          <img />
        `;
  }

  static get observedAttributes() {
    return ["src", "alt"];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === "src") {
      this.loadImage(newValue);
    } else if (name === "alt") {
      this.shadowRoot
        ?.querySelector("img")
        ?.setAttribute("alt", newValue || "");
    }
  }

  loadImage(src: string) {
    const img = this.shadowRoot!.querySelector("img");
    const placeholder = this.shadowRoot!.getElementById("placeholder");
    if (img && placeholder) {
      img.classList.remove("loaded");
      placeholder.style.display = "flex";

      img.src = src;
      img.onload = () => {
        img.classList.add("loaded");
        placeholder.style.display = "none";
      };
      img.onerror = () => {
        placeholder.textContent = "Erro ao carregar";
      };
    } else {
      console.log(img);
      console.log(placeholder);
    }
  }
}

customElements.define("image-loading", ImageWithLoading);
