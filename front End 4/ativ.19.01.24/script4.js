// Complete a função customerInfo() para que seu retorno seja: 'Olá, Maria Silva, entrega para: João Almeida, Telefone: 11-98763-1416, Rua Alameda dos Anjos, Número: 658, AP: 235.'.
// De olho na dica: Note que o parâmetro da função já está sendo passado na chamada da função.

// Complete a função orderModifier() para que seu retorno seja: 'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.'.
// Modifique o nome da pessoa compradora para Luiz Silva


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
  const customerInfo = (fullOrder) => {
    return 'Olá Maria Silva, entrega para João Almeida'
  }
  
  console.log(customerInfo(order));
  
  const orderModifier = (fullOrder) => {
    // Adicione abaixo as informações necessárias.
  }
  
  console.log(orderModifier(order));