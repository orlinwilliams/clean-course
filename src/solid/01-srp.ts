(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.

    class ProductService {
        getProduct (id:number){
            console.log(id);
        }
        saveProduct(product: Product){
            console.log('Guardando en base de datos', product );
        }
    }
    class Mail{
        sendMail(email:string){
            console.log('Enviando correo a los clientes' + email);
        }
    }
    class ProductBloc {
        public productService: ProductService;
        public mail:Mail;
        
        constructor(){
            this.productService = new ProductService();
            this.mail = new Mail();
        }
    
        loadProduct( id: number ) {
            this.productService.getProduct(id);                        
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct(product);
            
        }
    
        notifyClients() {
            this.mail.sendMail('');
        }
    
        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    
    }
    


    const productBloc = new ProductBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    productBloc.onAddToCart(10);








})();