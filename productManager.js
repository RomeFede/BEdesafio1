class ProductManager {
    constructor() {
        this.products = []
    }
    getProducts() {
        return this.products
    }
    addProduct(product) {
        if (!product.title ||
            !product.description ||
            !product.price ||
            !product.thumbnail ||
            !product.code ||
            !product.stock)
             {
            return 'Hay que llenar todos los campos de productos'
        }

        const result = this.products.find(prod => prod.code === product.code)
        if (result) {
            return 'El codigo corresponde a un producto ya utilizado hay que cambiarlo'
        }

        if (this.products.lenght === 0) {
            product.id = 1
            this.products.push( product )

        } else {
            product.id = this.products.length + 1
            this.products.push( product )
        }

        return 'producto agregado al carrito'
    }

    getProductById(pid) {
        const result = this.products.find(prod => prod.id === pid)
        if (!result) {
            return 'el producto no existe'
        }
        return result
    }
}

const products = new ProductManager()
console.log(products.addProduct({ title: 'Pizza Muzzarella', description: 'Muzarella salsa y oregano', price: 6000, thumbnail: 'image', stock: 100, code: 'abc123' }))
console.log(products.addProduct({ title: 'Pizza Cuatroquesos', description: 'Cubierta con 4 deliciosos quesos', price: 7000, thumbnail: 'image', stock: 100, code: 'abc124' }))
console.log(products.addProduct({ title: 'Pizza Fugazzeta', description: 'Con oregano y cebolla', price: 6500, thumbnail: 'image', stock: 100, code: 'abc125' }))
console.log(products.addProduct({ title: 'Pizza Fugazzeta rellena', description: 'Rellena de jamon y queso', price: 8000, thumbnail: 'image', stock: 100, code: 'abc126' }))
console.log(products.getProductById(1))