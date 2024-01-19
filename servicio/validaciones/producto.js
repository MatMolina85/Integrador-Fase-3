import Joi from 'joi';

const validar = producto => {
    const productoSchema = Joi.object({
        nombre: Joi.string().min(2).max(30).trim().allow('').required(),
        precio: Joi.number().required(),
        stock: Joi.number().required(),
        marca: Joi.string().min(2).max(30).trim().allow('').required(),
        categoria: Joi.string().min(2).max(30).trim().allow('').required(),
        detalles: Joi.string().min(2).max(50).trim().allow('').required(),
        foto: Joi.string().required(), // Ajusta según el tipo de dato que esperas para la foto
        envio: Joi.required()
    });

    const { error } = productoSchema.validate(producto);
    return error;
};

export default validar;
