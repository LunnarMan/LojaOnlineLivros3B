document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout');
    const clearCartButton = document.getElementById('clear-cart');
    const themeToggle = document.getElementById('theme-toggle');
    const bookGrid = document.getElementById('book-grid');

    // Array de livros com 50 entradas
    const books = [
        { title: 'Dom Quixote', author: 'Miguel de Cervantes', price: 49.90, image: 'imagens/dom-quixote.jpg' },
        { title: '1984', author: 'George Orwell', price: 39.90, image: 'imagens/1984.jpg' },
        { title: 'O Pequeno Príncipe', author: 'Antoine de Saint-Exupéry', price: 29.90, image: 'imagens/o-pequeno-principe.jpg' },
        { title: 'Cem Anos de Solidão', author: 'Gabriel García Márquez', price: 59.90, image: 'imagens/cem-anos-de-solidao.jpg' },
        { title: 'Orgulho e Preconceito', author: 'Jane Austen', price: 44.90, image: 'imagens/orgulho-e-preconceito.jpg' },
        { title: 'O Senhor dos Anéis', author: 'J.R.R. Tolkien', price: 79.90, image: 'imagens/o-senhor-dos-aneis.jpg' },
        { title: 'Crime e Castigo', author: 'Fiódor Dostoiévski', price: 54.90, image: 'imagens/crime-e-castigo.jpg' },
        { title: 'Harry Potter e a Pedra Filosofal', author: 'J.K. Rowling', price: 49.90, image: 'imagens/harry-potter-e-a-pedra-filosofal.jpg' },
        { title: 'A Revolução dos Bichos', author: 'George Orwell', price: 34.90, image: 'imagens/a-revolucao-dos-bichos.jpg' },
        { title: 'O Apanhador no Campo de Centeio', author: 'J.D. Salinger', price: 39.90, image: 'imagens/o-apanhador-no-campo-de-centeio.jpg' },
        { title: 'Moby Dick', author: 'Herman Melville', price: 49.90, image: 'imagens/moby-dick.jpg' },
        { title: 'Guerra e Paz', author: 'Liev Tolstói', price: 69.90, image: 'imagens/guerra-e-paz.jpg' },
        { title: 'O Grande Gatsby', author: 'F. Scott Fitzgerald', price: 44.90, image: 'imagens/o-grande-gatsby.jpg' },
        { title: 'Frankenstein', author: 'Mary Shelley', price: 39.90, image: 'imagens/frankenstein.jpg' },
        { title: 'Drácula', author: 'Bram Stoker', price: 44.90, image: 'imagens/dracula.jpg' },
        { title: 'As Crônicas de Nárnia', author: 'C.S. Lewis', price: 59.90, image: 'imagens/as-cronicas-de-narnia.jpg' },
        { title: 'O Hobbit', author: 'J.R.R. Tolkien', price: 49.90, image: 'imagens/o-hobbit.jpg' },
        { title: 'Admirável Mundo Novo', author: 'Aldous Huxley', price: 39.90, image: 'imagens/admiravel-mundo-novo.jpg' },
        { title: 'Memórias Póstumas de Brás Cubas', author: 'Machado de Assis', price: 34.90, image: 'imagens/memorias-postumas-de-bras-cubas.jpg' },
        { title: 'Dom Casmurro', author: 'Machado de Assis', price: 39.90, image: 'imagens/dom-casmurro.jpg' },
        { title: 'A Metamorfose', author: 'Franz Kafka', price: 29.90, image: 'imagens/a-metamorfose.jpg' },
        { title: 'O Processo', author: 'Franz Kafka', price: 39.90, image: 'imagens/o-processo.jpg' },
        { title: 'Vidas Secas', author: 'Graciliano Ramos', price: 34.90, image: 'imagens/vidas-secas.jpg' },
        { title: 'Capitães da Areia', author: 'Jorge Amado', price: 44.90, image: 'imagens/capitães-da-areia.jpg' },
        { title: 'Gabriela, Cravo e Canela', author: 'Jorge Amado', price: 49.90, image: 'imagens/gabriela-cravo-e-canela.jpg' },
        { title: 'Ensaio sobre a Cegueira', author: 'José Saramago', price: 54.90, image: 'imagens/ensaio-sobre-a-cegueira.jpg' },
        { title: 'O Evangelho Segundo Jesus Cristo', author: 'José Saramago', price: 49.90, image: 'imagens/o-evangelho-segundo-jesus-cristo.jpg' },
        { title: 'Sapiens: Uma Breve História da Humanidade', author: 'Yuval Noah Harari', price: 59.90, image: 'imagens/sapiens.jpg' },
        { title: 'Homo Deus', author: 'Yuval Noah Harari', price: 54.90, image: 'imagens/homo-deus.jpg' },
        { title: 'O Poder do Hábito', author: 'Charles Duhigg', price: 49.90, image: 'imagens/o-poder-do-habito.jpg' },
        { title: 'Pensar, Depressa e Devagar', author: 'Daniel Kahneman', price: 59.90, image: 'imagens/pensar-depressa-e-devagar.jpg' },
        { title: 'Factfulness', author: 'Hans Rosling', price: 44.90, image: 'imagens/factfulness.jpg' },
        { title: 'O Sol é para Todos', author: 'Harper Lee', price: 39.90, image: 'imagens/o-sol-e-para-todos.jpg' },
        { title: 'Os Miseráveis', author: 'Victor Hugo', price: 69.90, image: 'imagens/os-miseraveis.jpg' },
        { title: 'O Conde de Monte Cristo', author: 'Alexandre Dumas', price: 59.90, image: 'imagens/o-conde-de-monte-cristo.jpg' },
        { title: 'Anna Kariênina', author: 'Liev Tolstói', price: 64.90, image: 'imagens/anna-karenina.jpg' },
        { title: 'Jogo de Tronos', author: 'George R.R. Martin', price: 79.90, image: 'imagens/jogo-de-tronos.jpg' },
        { title: 'Duna', author: 'Frank Herbert', price: 54.90, image: 'imagens/duna.jpg' },
        { title: 'Neuromancer', author: 'William Gibson', price: 44.90, image: 'imagens/neuromancer.jpg' },
        { title: 'Fahrenheit 451', author: 'Ray Bradbury', price: 39.90, image: 'imagens/fahrenheit-451.jpg' },
        { title: 'O Guia do Mochileiro das Galáxias', author: 'Douglas Adams', price: 44.90, image: 'imagens/o-guia-do-mochileiro-das-galaxias.jpg' },
        { title: 'Eu, Robô', author: 'Isaac Asimov', price: 39.90, image: 'imagens/eu-robo.jpg' },
        { title: 'Fundação', author: 'Isaac Asimov', price: 49.90, image: 'imagens/fundacao.jpg' },
        { title: 'Watchmen', author: 'Alan Moore', price: 59.90, image: 'imagens/watchmen.jpg' },
        { title: 'V de Vingança', author: 'Alan Moore', price: 54.90, image: 'imagens/v-de-vinganca.jpg' },
        { title: 'O Iluminado', author: 'Stephen King', price: 49.90, image: 'imagens/o-iluminado.jpg' },
        { title: 'It: A Coisa', author: 'Stephen King', price: 69.90, image: 'imagens/it-a-coisa.jpg' },
        { title: 'A Culpa é das Estrelas', author: 'John Green', price: 39.90, image: 'imagens/a-culpa-e-das-estrelas.jpg' },
        { title: 'Comer, Rezar, Amar', author: 'Elizabeth Gilbert', price: 44.90, image: 'imagens/comer-rezar-amar.jpg' },
        { title: 'O Alquimista', author: 'Paulo Coelho', price: 34.90, image: 'imagens/o-alquimista.jpg' }
    ];

    // Gera os livros dinamicamente
    if (bookGrid) {
        books.forEach(book => {
            const card = document.createElement('div');
            card.className = 'book-card';
            card.innerHTML = `
                <img src="${book.image}" alt="Capa de ${book.title}">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
                <p class="price">R$ ${book.price.toFixed(2)}</p>
                <button class="add-to-cart" data-title="${book.title}" data-price="${book.price}">Adicionar ao Carrinho</button>
            `;
            bookGrid.appendChild(card);
        });
    }

    // Função para atualizar o carrinho
    function updateCart() {
        if (cartItems) {
            cartItems.innerHTML = '';
            let total = 0;
            cart.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.title} - R$ ${item.price.toFixed(2)}`;
                cartItems.appendChild(li);
                total += item.price;
            });
            cartTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
        }
        if (cartCount) {
            cartCount.textContent = cart.length;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Adicionar livro ao carrinho
    if (document.querySelector('.add-to-cart')) {
        const buttons = document.querySelectorAll('.add-to-cart');
        console.log(`Botões encontrados: ${buttons.length}`);
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const title = button.getAttribute('data-title');
                const price = parseFloat(button.getAttribute('data-price'));
                console.log(`Adicionando: ${title} - R$ ${price}`);
                cart.push({ title, price });
                updateCart();
            });
        });
    }

    // Finalizar compra com mensagem e imagem
    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('O carrinho está vazio!');
            } else {
                const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
                // Cria um elemento de confirmação
                const confirmation = document.createElement('div');
                confirmation.className = 'confirmation-modal';
                confirmation.innerHTML = `
                    <div class="confirmation-content">
                        <img src="imagens/compra-confirmada.jpg" alt="Confirmação de Compra">
                        <p>Compra finalizada com sucesso! Total: R$ ${total}</p>
                        <button id="close-confirmation">Fechar</button>
                    </div>
                `;
                document.body.appendChild(confirmation);

                // Estiliza o modal (adicione ao estilo.css ou aqui temporariamente)
                confirmation.style.position = 'fixed';
                confirmation.style.top = '0';
                confirmation.style.left = '0';
                confirmation.style.width = '100%';
                confirmation.style.height = '100%';
                confirmation.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                confirmation.style.display = 'flex';
                confirmation.style.justifyContent = 'center';
                confirmation.style.alignItems = 'center';
                confirmation.style.zIndex = '1000';

                confirmation.querySelector('.confirmation-content').style.backgroundColor = 'white';
                confirmation.querySelector('.confirmation-content').style.padding = '20px';
                confirmation.querySelector('.confirmation-content').style.borderRadius = '5px';
                confirmation.querySelector('.confirmation-content img').style.width = '100px';
                confirmation.querySelector('.confirmation-content img').style.height = '100px';

                // Fecha o modal
                document.getElementById('close-confirmation').addEventListener('click', () => {
                    document.body.removeChild(confirmation);
                    cart.length = 0;
                    updateCart();
                });
            }
        });
    }

    // Limpar carrinho
    if (clearCartButton) {
        clearCartButton.addEventListener('click', () => {
            cart.length = 0;
            updateCart();
        });
    }

    // Alternar modo escuro/claro
    if (themeToggle) {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggle.textContent = 'Modo Claro';
        } else {
            document.body.classList.remove('dark-mode');
            themeToggle.textContent = 'Modo Escuro';
        }
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                themeToggle.textContent = 'Modo Claro';
                localStorage.setItem('theme', 'dark');
            } else {
                themeToggle.textContent = 'Modo Escuro';
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // Atualiza o carrinho na inicialização
    updateCart();
});

