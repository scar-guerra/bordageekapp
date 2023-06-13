const bordados = [ 
    {
    id: '1',

    name: "Vulpix",

    category: 'pokemon',

    img: 'https://i.ibb.co/56RcHMr/vulpix.jpg',

    description: "Tamaño: 18 cms",

    price: 5500
},
{
    id: '2',

    name: 'Coraje',

    category: 'series',

    img: 'https://i.ibb.co/2WWrrkC/coraje.jpg',

    description: "Tamaño: 23 cms",

    price: 10000 
},
{
    id: '3',

    name: "BB-8",

    category: 'starwars',

    img: "https://i.ibb.co/VVTzgW6/star-wars.jpg",

    description: "Tamaño: 14 cms",

    price: 3500
},
{
    id: '4',

    name: "Snoopy",

    category: 'series',

    img: "https://i.ibb.co/FsSTMT6/snoopy.jpg",

    description: "Tamaño: 10 cms",

    price: 2000
},
{
    id: '5',

    name: "Absol",

    category: 'pokemon',

    img: 'https://i.ibb.co/RzBxNDR/absol.jpg',

    description: "Tamaño: 15 cms",

    price: 5500
},
{
    
        id: '6',
    
        name: "Pato",
    
        category: 'series',
    
        img: 'https://i.ibb.co/PGvNshJ/pato.jpg',
    
        description: "Tamaño: 13 cms",
    
        price: 6600
    
},
{
    
    id: '7',

    name: "Togepi",

    category: 'pokemon',

    img: 'https://i.ibb.co/D7c3Lpg/togepi.jpg',

    description: "Tamaño: 9 cms",

    price: 6600 },
]



export const getProducts = () =>{
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve(bordados)
        },400)
    })
}

export const getProductsById = (productId) => {
    return new Promise ((resolve) =>{
        setTimeout(() =>{
            resolve(bordados.find(prod => prod.id === productId))
        }, 100)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise ((resolve) =>{
        setTimeout(() =>{
            resolve(bordados.filter(prod => prod.category === productCategory))
        }, 200)
    })
}