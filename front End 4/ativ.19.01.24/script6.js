const order = {
 
    name: 'João Almeida',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua Alameda dos Anjos',
        number: '658',
        apartment: '235',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            },
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
price: 10,
                amount: 1,
            },
        },
        delivery: {
            deliveryPerson: 'Maria Silva',
            price: 5,
        },
    },
    payment: {
        total: 60,
    },
};