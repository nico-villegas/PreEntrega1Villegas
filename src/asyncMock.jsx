import imagen from '../src/img/ImgProductos'

const products = [
    {
        id: 1,
        nombre: 'Imperial Cincelado',
        precio: 10000,
        descripcion: 'Mate imperial premium',
        stock: 15,
        img: imagen[1],
        alt: 'imagen imperial cincelado',
        category: 'imperial'
    },
    {
        id: 2,
        nombre: 'Imperial Liso',
        precio: 8000,
        descripcion: 'Mate imperial liso de acero inoxidable',
        stock: 10,
        img: imagen[2],
        alt: 'imagen imperial liso',
        category: 'imperial'
    },
    {
        id: 3,
        nombre: 'Imperial cincelado con virola lisa',
        precio: 9000,
        descripcion: 'Mate imperial cincelado con virola lisa',
        stock: 13,
        img: imagen[3],
        alt: 'imagen imperial cincelado virola lisa',
        category: 'imperial'
    },
    {
        id: 4,
        nombre: 'Camionero de alpaca cincelada',
        precio: 5000,
        descripcion: 'Mate camionero de alpaca cincelada',
        stock: 8,
        img: imagen[4],
        alt: 'imagen camionero alpaca cincelada',
        category: 'camionero'
    },
    {
        id: 5,
        nombre: 'Camionero de acero inoxidable cincelado',
        precio: 4500,
        descripcion: 'Mate camionero de acero inoxidable con virola cincelada',
        stock: 20,
        img: imagen[5],
        alt: 'imagen camionero virola cincelada',
        category: 'camionero'
    },
    {
        id: 6,
        nombre: 'Camionero de acero inoxidable',
        precio: 4000,
        descripcion: 'Mate camionero con virola de acero inoxidable',
        stock: 6,
        img: imagen[6],
        alt: 'imagen camionero acero',
        category: 'camionero'
    },
    {
        id: 7,
        nombre: 'Torpedo cincelado',
        precio: 5000,
        descripcion: 'Mate torpedo con virola cincelada',
        stock: 7,
        img: imagen[7],
        alt: 'imagen torpedo cincelado',
        category: 'torpedo'
    },
    {
        id: 8,
        nombre: 'Torpedo de acero inoxidable marrón',
        precio: 3500,
        descripcion: 'Mate torpedo marrón con virola de acero',
        stock: 14,
        img: imagen[8],
        alt: 'imagen torpedo marron',
        category: 'torpedo'
    },
    {
        id: 9,
        nombre: 'Torpedo de acero inoxidable negro',
        precio: 3500,
        descripcion: 'Mate torpedo marrón con virola de acero',
        stock: 25,
        img: imagen[9],
        alt: 'imagen torpedo negro',
        category: 'torpedo'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500);
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productCategory))
        }, 500)
    })
}