class ModelMem {

    constructor() {
        this.productos = [
            
        ];
    }

    obtenerProductos = async () => this.productos;

    obtenerProducto = async id => this.productos.find(p => p.id == id) || {};

    guardarProducto = async producto => {
        producto.id = String(parseInt(this.productos[this.productos.length-1]?.id || 0) + 1);
        if(producto.precio) producto.precio = Number(producto.precio);
        if(producto.stock) producto.stock = parseInt(producto.stock);
        this.productos.push(producto);
        return producto;
    };

    actualizarProducto = async (id, producto) => {
        producto.id = id;

        const index = this.productos.findIndex(p => p.id == id);

        if(index != -1) {
            const productoAnt = this.productos[index];
            
            const productoNuevo = { ...productoAnt, ...producto };
            this.productos.splice(index, 1, productoNuevo);
            return productoNuevo;
        }
        else {
            return {};
        }    
    };

    borrarProducto = async id => {
        let producto = {};

        const index = this.productos.findIndex(p => p.id == id);
        if(index != -1) {
            producto = this.productos.splice(index, 1)[0];
        }
        return producto;    
    };
}

export default ModelMem;
