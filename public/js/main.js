class Destino {
    constructor(id, nome, descricao, imagem) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.imagem = imagem;
    }
}

class Atrativo {
    constructor(id, destinoId, nome, tipo, descricao, dicas) {
        this.id = id;
        this.destinoId = destinoId;
        this.nome = nome;
        this.tipo = tipo;
        this.descricao = descricao;
        this.dicas = dicas;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const destinos = [
        new Destino(1, 'São Luís', 'Capital do Maranhão...', 'img/saoluis.jpg'),
        new Destino(2, 'Lençóis Maranhenses', 'Paisagem única...', 'img/lencois.jpg'),
        new Destino(3, 'Alcântara', 'História e cultura...', 'img/alcantara.jpg')
    ];

    const container = document.getElementById('destinos');

    destinos.forEach(destino => {
        const destinoElement = document.createElement('div');
        destinoElement.className = 'destino';
        destinoElement.innerHTML = `
            <img src="assets/images/${destino.imagem}" alt="${destino.nome}">
            <h2>${destino.nome}</h2>
            <p>${destino.descricao}</p>
        `;
        container.appendChild(destinoElement);
    });

    document.getElementById('search').addEventListener('input', (e) => {
        const searchQuery = e.target.value.toLowerCase();
        const filteredDestinos = destinos.filter(destino => 
            destino.nome.toLowerCase().includes(searchQuery)
        );
        container.innerHTML = '';
        filteredDestinos.forEach(destino => {
            const destinoElement = document.createElement('div');
            destinoElement.className = 'destino';
            destinoElement.innerHTML = `
                <img src="assets/images/${destino.imagem}" alt="${destino.nome}">
                <h2>${destino.nome}</h2>
                <p>${destino.descricao}</p>
            `;
            container.appendChild(destinoElement);
        });
    });
});
