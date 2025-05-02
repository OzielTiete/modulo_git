const form = document.querySelector('form');
const nomeInput = document.querySelector('input[type="text"]');
const telefoneInput = document.querySelector('input[type="number"]');
const listaBody = document.querySelector('#lista-body');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o formulário de recarregar a página

    const nome = nomeInput.value.trim();
    const telefone = telefoneInput.value.trim();

    // Verifica se ambos os campos não estão vazios
    if (nome && telefone) {
        // Verifica se o nome é válido (somente letras e espaços)
        const nomeValido = /^[A-Za-zÀ-ÿ\s]+$/.test(nome);

        // Verifica se o telefone é válido (somente números com 11 a 12 dígitos)
        const telefoneValido = /^\d+$/.test(telefone) && telefone.length >= 11 && telefone.length <= 12;

        if (nomeValido && telefoneValido) {
            // Cria o container do contato
            const novoContato = document.createElement('div');
            novoContato.classList.add('contato');

            // Cria e adiciona o span do nome
            const nomeSpan = document.createElement('span');
            nomeSpan.textContent = nome;
            novoContato.appendChild(nomeSpan);

            // Cria e adiciona o span do telefone
            const telefoneSpan = document.createElement('span');
            telefoneSpan.textContent = telefone;
            novoContato.appendChild(telefoneSpan);

            // Cria a div de ações
            const acoesDiv = document.createElement('div');
            acoesDiv.classList.add('acoes');

            // Cria o botão de excluir (sinal de menos)
            const btnExcluir = document.createElement('span');
            btnExcluir.innerHTML = '➖'; // ícone de excluir
            btnExcluir.classList.add('excluir');
            acoesDiv.appendChild(btnExcluir);

            // Adiciona a div de ações ao contato
            novoContato.appendChild(acoesDiv);

            // Adiciona classe alternada se o número de contatos for ímpar
            const contatosExistentes = listaBody.querySelectorAll('.contato').length;
            if (contatosExistentes % 2 !== 0) {
                novoContato.classList.add('linha-alternada');
            }

            // Adiciona o novo contato à lista
            listaBody.appendChild(novoContato);

            // Evento de clique para remover o contato
            btnExcluir.addEventListener('click', function() {
                listaBody.removeChild(novoContato);
            });

            // Limpa os campos do formulário
            nomeInput.value = '';
            telefoneInput.value = '';

        } else {
            alert('ERRO!! use apenas letras no primeiro campo e apenas números com 11 a 12 dígitos no segundo.');
        }
    }
});
