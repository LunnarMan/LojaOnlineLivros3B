document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o carrinho a partir do localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout');
    const clearCartButton = document.getElementById('clear-cart');
    const themeToggle = document.getElementById('theme-toggle');

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

    // Adicionar livro ao carrinho (apenas em index.html)
    if (document.querySelector('.add-to-cart')) {
        const buttons = document.querySelectorAll('.add-to-cart');
        console.log(`Botões encontrados: ${buttons.length}`); // Depuração
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const title = button.getAttribute('data-title');
                const price = parseFloat(button.getAttribute('data-price'));
                console.log(`Adicionando: ${title} - R$ ${price}`); // Depuração
                cart.push({ title, price });
                updateCart();
            });
        });
    }

    // Finalizar compra (apenas em cart.html)
    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('O carrinho está vazio!');
            } else {
                alert('Compra finalizada com sucesso! Total: R$ ' + cart.reduce((sum, item) => sum + item.price, 0).toFixed(2));
                cart.length = 0;
                updateCart();
            }
        });
    }

    // Limpar carrinho (apenas em cart.html)
    if (clearCartButton) {
        clearCartButton.addEventListener('click', () => {
            cart.length = 0;
            updateCart();
        });
    }

    // Alternar modo escuro/claro
    if (themeToggle) {
        // Carrega a preferência salva
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggle.textContent = 'Modo Claro';
        } else {
            document.body.classList.remove('dark-mode');
            themeToggle.textContent = 'Modo Escuro';
        }

        // Evento de clique no botão de toggle
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