## PRODUCT CARD COMPONENT

### Import to html:
    `<script src='./product_card_component.js'></script>`

### HTML Element Tag: 
    `<product-card></product-card>`

### Inner HTML: 
    Inner html is displayed as button text.

### Attributes:

    1. img: path of product image file
    2. main: main text display. (exp. product name)
    3. sub-one: first sub text.(exp. product price)
    4. button-color: sets background color of button.
    5. button-text-color: sets color of button text.
    6. id: unique id for each card created. passes id to event listener detail.

### Event Listener:
    listen for "product-card-clicked" to respond to button on click.
### Example:
```html
    <body>
    
        <product-card
            img='./img.jpg'
            main='Product Name'
            sub-one='$12.00'
            button-color='orange'
            button-text-color='black'
            id='_12234' >
        </product-card>
        
        <script src='./product_card_component.js'></script>
     </body>
```
