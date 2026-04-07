 const pratos = [
    {
      nome: "X-Tudo",
      ingredientes: "Pão, hambúrguer, queijo, presunto, ovo, bacon, alface, tomate, milho e batata palha",
      preco: "R$ 25,00",
      imagem: "./img/gallery_8e735014-c9fa-4da4-849d-857c3a5efc74.jpg"
    },
    {
      nome: "X-Salada",
      ingredientes: "Pão, hambúrguer, queijo, alface, tomate e maionese",
      preco: "R$ 18,00",
      imagem: "./img/360_F_84285488_CaWrmiQ9xWJXFpCPMHD1r2ZYAzcESfkU.jpg"
    },
    {
      nome: "X-Frango",
      ingredientes: "Pão, frango grelhado, queijo, alface e molho especial",
      preco: "R$ 20,00",
      imagem: "./img/istockphoto-155160340-170667a.jpg"
    },
    {
      nome: "Hambúrguer com Cheddar",
      ingredientes: "Pão, hambúrguer artesanal e muito queijo cheddar",
      preco: "R$ 22,00",
      imagem: "./img/istockphoto-589115286-612x612-1.jpg"
    },
    {
      nome: "Cachorro Quente",
      ingredientes: "Pão, salsicha, molho, milho, ervilha, batata palha e maionese",
      preco: "R$ 15,00",
      imagem: "./img/360_F_617805134_6FhhdOpu86TWZJhxugOejQ0QHKRWvUJA.jpg"
    },
    {
      nome: "Pizza Havaiana (Especial)",
      ingredientes: "Molho de tomate, queijo, presunto e abacaxi",
      preco: "R$ 40,00",
      imagem: "./img/depositphotos_79649834-stock-photo-hawaiian-pizza-on-the-old.jpg"
    }
  ];

  let index = 0;

  function mostrarPrato() {
    // Pega o elemento da imagem
    const imagemElemento = document.getElementById("imagem");
    
    // Define o caminho da imagem
    imagemElemento.src = pratos[index].imagem;
    
    // Define a largura e altura da imagem
    imagemElemento.style.width = '500px';  // Defina o tamanho desejado em pixels (exemplo: 300px de largura)
    imagemElemento.style.height = '500px'; // Defina o tamanho desejado em pixels (exemplo: 200px de altura)
    
    document.getElementById("nome").innerText = pratos[index].nome;
    document.getElementById("ingredientes").innerText = pratos[index].ingredientes;
    document.getElementById("preco").innerText = pratos[index].preco;
  }

  function proximo() {
    index = (index + 1) % pratos.length;
    mostrarPrato();
  }

  function anterior() {
    index = (index - 1 + pratos.length) % pratos.length;
    mostrarPrato();
  }

  // Inicializa o primeiro prato
  mostrarPrato();