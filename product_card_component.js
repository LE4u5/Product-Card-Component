const style = `
<style>
    p{
        margin: 0;
    }
    button{
        font-family: 'Roboto', sans-serif;
        min-width: 7rem;
        height: 1.8rem;
        opacity: 0;
        transition: 100ms ease 0s;
        border-radius: .5rem;
        border: none;
        font-weight: 900;
        font-size: .7rem;
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
        width: 16.3rem;
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
        width: 11.8rem;
        max-width: 11.8rem;
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
        display: flex;
        flex-wrap: nowrap;
        font-weight: 700;
        text-align: left;
        width: 70%;
       
    }
    .sub1-cont{
        font-size: .8rem;
        text-align: right;
        width: 30%;
        
    }
    .card-cont:hover{
        transform: scale(1.05,1.05);
        z-index: 100;
    }
    .card-cont:hover > .img-cont{
        border-radius: 1rem;
        box-shadow: 30px 30px 50px rgba(1,1,1,.3);
    }
    .card-cont:hover > .info-cont{
        height: 5.5rem;
        max-height: 5.5rem;
        box-shadow: 30px 30px 50px rgba(1,1,1,.3);
    }
    .card-cont:hover top-info-cont{
        height: 50%;
    }
    .card-cont:hover button{
        opacity: 1;
        transition: 500ms ease-in 0s;
    }
    button:active{
        transform: scale(1.1,1.1);
    }
    .card-cont:focus{
        outline: 1px solid black;
        outline-offset: .5rem;
    }
</style>
 <div class='card-cont' tabindex='0'>
    <div class='img-cont'>
    <img />
    </div>
    <div class='info-cont'>
        <div class='top-info-cont'>
            <div class='main-cont'><p></p></div>
            <div class='sub1-cont'><p></p></div>
        </div>
        <div class='bottom-button-cont'>
            <button ></button>
        </div>
    </div>
 </div>
`;

class ProductCardComponent extends HTMLElement {
    constructor() {
        super()
        this.template = document.createElement('template');
        this.template.innerHTML = style;
        
        this.shadow = this.attachShadow({ mode: 'open' });
    }
    render(){
        if(this.getAttribute('img'))
            this.shadow.querySelector('img').src = this.getAttribute('img');
        if(this.getAttribute('main'))
            this.shadow.querySelector('img').alt = this.getAttribute('main') + 'Image';
        if(this.getAttribute('main'))
            this.shadow.querySelector('.main-cont').querySelector('p').innerHTML = this.getAttribute('main');
        if(this.getAttribute('subOne'))
            this.shadow.querySelector('.sub1-cont').querySelector('p').innerHTML = this.getAttribute('subOne');
        if(this.innerHTML)
            this.shadow.querySelector('button').innerHTML = this.innerHTML;

        if(this.getAttribute('buttonColor')){
            this.buttonColor = this.getAttribute('buttonColor');
            if(this.getAttribute('buttonTextColor')){
                this.buttonTextColor = this.getAttribute('buttonTextColor');
                this.shadow.querySelector('button').style = `background-color: ${this.buttonColor}; color: ${this.buttonTextColor}`;
            }
        }
        
    }

    buttonClicked() {
        const event = new CustomEvent('product-card-clicked', {
            detail: {
                id: this.getAttribute('id')
            }
        });
        document.dispatchEvent(event);
    }

    connectedCallback() {
        this.shadow.appendChild(this.template.content.cloneNode(true));
        this.render();
        this.shadowRoot.querySelector('button').addEventListener('click', () => this.buttonClicked());
    }
    attributeChangedCallback(){
        this.render();
    }
    disconnectedCallback() {
        this.shadowRoot.querySelector('button').removeEventListener('click', () => this.buttonClicked());
    }
}

window.customElements.define('product-card', ProductCardComponent);