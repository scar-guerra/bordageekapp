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

    img: 'https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/SHLWP7FOUNBJ5LOE26CMC3YEFQ.gif',

    description: "Tamaño: 23 cms",

    price: 10000 
},
{
    id: '3',

    name: "BB-8",

    category: 'starwars',

    img: "https://i.ebayimg.com/images/g/KWQAAOSwzhRj01WE/s-l500.jpg",

    description: "Tamaño: 14 cms",

    price: 3500
},
{
    id: '4',

    name: "Snoopy",

    category: 'series',

    img: "https://upload.wikimedia.org/wikipedia/en/5/53/Snoopy_Peanuts.png",

    description: "Tamaño: 10 cms",

    price: 2000
},
{
    id: '5',

    name: "Absol",

    category: 'pokemon',

    img: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/7d/latest/20201009233510/Absol.png/400px-Absol.png',

    description: "Tamaño: 15 cms",

    price: 5500
},
{
    
        id: '6',
    
        name: "Pato",
    
        category: 'series',
    
        img: 'https://www.seekpng.com/png/detail/42-424797_report-abuse-imagenes-de-pato-gravity-falls.png',
    
        description: "Tamaño: 13 cms",
    
        price: 6600
    
},
{
    
    id: '7',

    name: "Togepi",

    category: 'pokemon',

    img: 'https://images.wikidexcdn.net/mwuploads/wikidex/f/ff/latest/20201109211603/Togepi.png?20201109211603',

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