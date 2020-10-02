
class ProductCardComponent extends HTMLElement{
    constructor(){
        super()
        this.template = document.createElement('template');

        this.main = this.getAttribute('main');
        this.img = this.getAttribute('img');
        this.subOne =this.getAttribute('sub-one'); 
        this.subTwo =this.getAttribute('sub-two'); 
        this.buttonColor =this.getAttribute('button-color');
        this.buttonTextColor =this.getAttribute('button-text-color');
        this.buttonText =this.getAttribute('button-text');

        this.template.innerHTML =  `
        <style>
            p{
                margin: 0;
            }
            button{
                min-width: 7rem;
                height: 1.8rem;
                display: none;
                transition: 200ms;
                border-radius: .5rem;
                border: none;
                background-color: ${this.buttonColor} ;
                font-weight: bold;
                font-size: .7rem;
                color: ${this.buttonTextColor};
            }
            img{
                width: 100%;
                min-height: 100%;
            }
            .card-cont{
                font-family: Segoe UI, sans-serif;
                font-size: .98rem;
                position: relative;
                background-color: none;
                width: 16rem;
                height: 16rem;
                transition: 500ms;
                color: white;
            }
            .img-cont{
                background-color: grey;
                width: 15rem;
                height: 15rem;
                transition: 500ms;
                overflow: hidden;
            }
            .info-cont{
                position: absolute;
                background-color: black;
                width: 13.5rem;
                height: 1.2rem;
                top: 13.75rem;
                left: 2.5rem;
                border-radius: .6rem;
                transition: height 500ms;
                padding: .5rem 1rem;
                box-shadow: 0px 0px 8px rgba(1,1,1,.3);
            }
            .top-info-cont{
                display: flex;
                justify-content: center;
                
                min-height: 50%;
                width: 100%;
            }
            .bottom-button-cont{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 50%;
                width: 100%;
            }
            .main-cont{
                font-weight: 700;
                text-align: left;
                width: 50%;
               
            }
            .sub1-cont{
                font-size: .8rem;
                text-align: right;
                width: 50%;
                
            }
            .card-cont:hover{
                transform: scale(1.15,1.15);
            }
            .card-cont:hover > .img-cont{
                border-radius: 1rem;
            }
            .card-cont:hover > .info-cont{
                height: 5.5rem;
                box-shadow: 30px 30px 50px rgba(1,1,1,.3);
            }
            .card-cont:hover top-info-cont{
                height: 50%;
            }
            .card-cont:hover button{
                display: block;
            }
            button:active{
                transform: scale(1.1,1.1);
            }
        </style>
         <div class='card-cont'>
            <div class='img-cont'>
            <img src='${this.img}' alt='${this.main} Image'/>
            </div>
            <div class='info-cont'>
                <div class='top-info-cont'>
                    <div class='main-cont'><p>${this.main}<p></div>
                    <div class='sub1-cont'><p>${this.subOne}<p></div>
                </div>
                <div class='bottom-button-cont'>
                    <button>${this.buttonText}</button>
                </div>
            </div>
         </div>
        `;

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }
}

window.customElements.define('product-card', ProductCardComponent);