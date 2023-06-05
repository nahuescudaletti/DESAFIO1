class ProductManager {
   constructor() {
      this.products = [];
      this.productsId = 0;
   }

   addProduct = (title, description, price, image, code, stock) => {
      // Validar que todos los campos sean obligatorios
      if (!title || !description || !price || !image || !code || !stock) {
         console.log("Todos los campos son obligatorios.");
         return;
      }

      // Validar que el campo code no se repita
      const codeExists = this.products.some(product => product.code === code);
      if (codeExists) {
         console.log("El código ya existe.");
         return;
      }

      const product = {
         id: ++this.productsId,
         title,
         description,
         price,
         image,
         code,
         stock,
         product: [this.productsId]
      };
      this.products.push(product);
   };

   getProducts = () => {
      return this.products;
   };

   getProductById = (idProduct) => {
      const productSearch = this.products.findIndex(product => product.id === idProduct);
      if (productSearch === -1) {
         console.log("No encontrado.");
         return;
      }
      const product = this.products[productSearch];
      if (!product.product.includes(product.id)) {
         product.product.push(product.id);
         console.log('El producto se agregó correctamente.');
      }
   };
}

const productManager = new ProductManager();

productManager.addProduct("remera", "azul", 80, 'sin imagen', 'ABC123', 10); // Agregar un producto válido
productManager.addProduct("pantalon", "", 20, 'sin imagen', 'ABC124', 15); // Faltar campo obligatorio (description)
productManager.addProduct("zapatillas", "azul", 50, 'sin imagen', 'ABC123', 20); // Código repetido

console.log(productManager.getProducts());