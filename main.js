class ProductManager{
    constructor (){
        this.products = [];
    }
    idGenerator = () => {
        const count = this.products.length
        if (count === 0){
            return 1
        } else {
            return(this.products[count - 1].id) + 1
        }
    }
    
    addProducts=(title, description, price, thumbnail, code, stock) => {
        const id = this.idGenerator ()
        if(this.products.find(element => element.code === code)) {
            console.log("Este producto ya existe")
        }
        
        this.products.push({
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        })
    }

    getProductById = () => {
        const askid =parseInt(prompt('Escriba el id'))
        if(this.products.find(element => element.id === askid)){
           console.log("El producto ha sido encontrado") 
        } else {
            console.log("Not found")
        }

    }

    getProducts = () => {
        return this.products
    }

    
}

const productManager = new ProductManager();
productManager.addProducts('shampoo sólido', 'El mejor shampoo', '$150.00', 'img1', 'shamp1', '500 unidades');
productManager.addProducts('Acondicionador sólido', 'Para cabello seco', '$140.00', 'img2', 'aco1', '700 unidades');
productManager.addProducts('shampoo sólido 2', 'El mejor shampoo 2', '$150.00', 'img1', 'shamp1', '500 unidades');
console.log(productManager.getProducts());
productManager.getProductById();
