// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links (if needed)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Additional JavaScript functionality can be added here
    // Example: Log message to the console
    console.log('JavaScript is loaded and running!');
});



    function showDetails(filme, elenco, duracao, personagens, vilao) {
        alert(
            'Filme: ' + filme + '\n' +
            'Elenco: ' + elenco + '\n' +
            'Duração: ' + duracao + '\n' +
            'Personagens: ' + personagens + '\n' +
            'Vilão: ' + vilao
        );
    }

    
    // Dados dos eventos da timeline
    const timelineData = [
        {
            year: "1943",
            title: "Capitão América: O Primeiro Vingador",
            elenco: "Chris Evans, Hayley Atwell, Sebastian Stan",
            duracao: "124 minutos",
            personagens: "Capitão América, Peggy Carter, Bucky Barnes",
            resumo: "Capitão América, Peggy Carter, Bucky Barnes",
            vilao: "Johann Schmidt / Caveira Vermelho",
            position: "left"
        },
        {
            year: "1995",
            title: "Capitã Marvel",
            elenco: "Brie Larson, Samuel L. Jackson, Jude Law",
            duracao: "123 minutos",
            personagens: "Capitã Marvel, Nick Fury, Talos",
            resumo: "Carol Danvers se torna a poderosa Capitã Marvel e ajuda a salvar a Terra durante uma guerra galáctica.",
            vilao: "Yon-Rogg",
            position: "right"
        },
        // Adicione outros eventos conforme necessário
    ];

    // Função para criar os elementos HTML da timeline
    function createTimelineItem(event) {
        const item = document.createElement('div');
        item.classList.add('timeline-item', event.position);

        item.innerHTML = `
            <div class="timeline-content">
                <h2>${event.year} - ${event.title}</h2>
                <button type="button" class="btn btn-outline-danger">Elenco
                    <span class="hover-text">${event.elenco}</span>
                </button>
                <button type="button" class="btn btn-outline-danger">Duração
                    <span class="hover-text">${event.duracao}</span>
                </button>
                <button type="button" class="btn btn-outline-danger">Personagens
                    <span class="hover-text">${event.personagens}</span>
                </button>
                <button type="button" class="btn btn-outline-danger">Resumo
                    <span class="hover-text">${event.resumo}</span>
                </button>
                <button type="button" class="btn btn-outline-danger">Vilões
                    <span class="hover-text">${event.vilao}</span>
                </button>
            </div>
        `;
        return item;
    }

    // Função para preencher a timeline
    function populateTimeline() {
        const timeline = document.getElementById('timeline');
        timelineData.forEach(event => {
            const timelineItem = createTimelineItem(event);
            timeline.appendChild(timelineItem);
        });
    }

    // Chama a função para preencher a timeline
    populateTimeline();