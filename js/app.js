const timelineData = [
    {
        id: 1,
        year: "1943",
        title: "Capitão América: O Primeiro Vingador",
        elenco: "Chris Evans, Hayley Atwell, Sebastian Stan",
        duracao: "124 minutos",
        personagens: "Capitão América, Peggy Carter, Bucky Barnes",
        resumo: "Capitão América: O Primeiro Vingador é um filme que conta a história de Steve Rogers, um jovem que se voluntaria para um projeto secreto que o transforma no Capitão América, um super-herói que luta contra o mal: Steve Rogers é um rapaz franzino que sonha em servir aos Estados Unidos na Segunda Guerra Mundial.",
        vilao: "Johann Schmidt / Caveira Vermelho",
        image: "https://wallpapers.com/images/high/1366x768-captain-america-background-kbt9928mfb7p95rb.webp"
    },
    {
        id: 2,
        year: "1995",
        title: "Capitã Marvel",
        elenco: "Brie Larson, Samuel L. Jackson, Jude Law",
        duracao: "123 minutos",
        personagens: "Capitã Marvel, Nick Fury, Talos",
        resumo: "Carol Danvers se torna a poderosa Capitã Marvel e ajuda a salvar a Terra durante uma guerra galáctica.",
        vilao: "Yon-Rogg",
        image: "https://lumiere-a.akamaihd.net/v1/images/eu_cma_ft_m_7866210f.jpeg?region=0,0,750,618"
    },
    {
        id: 3,
        year: "2008",
        title: "Homem de Ferro",
        elenco: "Robert Downey Jr., Gwyneth Paltrow, Jeff Bridges",
        duracao: "126 minutos",
        personagens: "Homem de Ferro, Pepper Potts, Obadiah Stane",
        resumo: "Tony Stark constrói uma armadura poderosa e se torna o super-herói Homem de Ferro.",
        vilao: "Obadiah Stane / Monge de Ferro",
        image: "https://uploads.maisgoias.com.br/2023/05/18a05710-homem-de-ferro-2008.jpg"
    },
    {
        id: 4,
        year: "2010",
        title: "Homem de Ferro 2",
        elenco: "Robert Downey Jr., Gwyneth Paltrow, Mickey Rourke",
        duracao: "124 minutos",
        personagens: "Homem de Ferro, Natasha Romanoff, James Rhodes",
        resumo: "Tony Stark enfrenta novas ameaças com a ajuda de aliados enquanto lida com as consequências de ser o Homem de Ferro.",
        vilao: "Ivan Vanko / Chicote Negro",
        image: "https://i.pinimg.com/1200x/19/17/1e/19171e8d7aa4791bf888c8f07f4f1258.jpg"
    },
    {
        id: 5,
        year: "2011",
        title: "O Incrível Hulk",
        elenco: "Edward Norton, Liv Tyler, Tim Roth",
        duracao: "112 minutos",
        personagens: "Bruce Banner, Betty Ross, Emil Blonsky",
        resumo: "Bruce Banner tenta controlar o Hulk enquanto é caçado pelas forças militares.",
        vilao: "Abominável",
        image: "https://img.odcdn.com.br/wp-content/uploads/2023/06/o-incrivel-hulk-1.png"
    },
    {
        id: 6,
        year: "2011",
        title: "Thor",
        elenco: "Chris Hemsworth, Natalie Portman, Tom Hiddleston",
        duracao: "115 minutos",
        personagens: "Thor, Jane Foster, Loki",
        resumo: "Thor é banido para a Terra e deve provar seu valor para recuperar seus poderes.",
        vilao: "Loki",
        image: "https://i0.wp.com/cinegrandiose.com/wp-content/uploads/Thor-1.png?fit=960%2C540&ssl=1"
    },
    {
        id: 7,
        year: "2012",
        title: "Os Vingadores",
        elenco: "Robert Downey Jr, Chris Evans, Scarlett Johansson",
        duracao: "143 minutos",
        personagens: "Homem de Ferro, Capitão América, Hulk, Gavião Arqueiro, Viúva Negra, Thor",
        resumo: "Os heróis se unem para enfrentar a ameaça de Loki e um exército alienígena.",
        vilao: "Loki",
        image: "https://cloudfront-us-east-1.images.arcpublishing.com/estadao/KGKRV37M4RLVRA5CDD3YUVJLF4.jpg"
    },
    {
        id: 8,
        year: "2013",
        title: "Homem de Ferro 3",
        elenco: "Robert Downey Jr., Gwyneth Paltrow, Guy Pearce",
        duracao: "130 minutos",
        personagens: "Homem de Ferro, Pepper Potts, Aldrich Killian",
        resumo: "Tony Stark enfrenta o Mandarim e seus demônios pessoais após os eventos de Nova York.",
        vilao: "Mandarim / Aldrich Killian",
        image: "https://wallpapercave.com/wp/wp1886659.jpg"
    },
    {
        id: 9,
        year: "2013",
        title: "Thor: O Mundo Sombrio",
        elenco: "Chris Hemsworth, Natalie Portman, Tom Hiddleston",
        duracao: "112 minutos",
        personagens: "Thor, Loki, Malekith",
        resumo: "Thor luta para salvar os Nove Reinos de uma ameaça sombria liderada por Malekith.",
        vilao: "Malekith",
        image: "https://w.wallhaven.cc/full/nz/wallhaven-nzzv5v.jpg"
    },
    {
        id: 10,
        year: "2014",
        title: "Capitão América: O Soldado Invernal",
        elenco: "Chris Evans, Scarlett Johansson, Sebastian Stan",
        duracao: "136 minutos",
        personagens: "Capitão América, Viúva Negra, Soldado Invernal",
        resumo: "Steve Rogers enfrenta uma conspiração dentro da S.H.I.E.L.D. enquanto lida com o retorno do misterioso Soldado Invernal.",
        vilao: "Soldado Invernal, Alexander Pierce",
        image: "https://sm.ign.com/ign_br/screenshot/default/captain-america-the-winter-soldier-23_5yqx.jpg"
    },
    {
        id: 11,
        year: "2014",
        title: "Guardiões da Galáxia",
        elenco: "Chris Pratt, Zoe Saldana, Dave Bautista",
        duracao: "121 minutos",
        personagens: "Peter Quill, Gamora, Drax, Groot, Rocket",
        resumo: "Um grupo de criminosos intergalácticos se une para impedir um guerreiro fanático de destruir o universo.",
        vilao: "Ronan, o Acusador, Yondu",
        image: "https://wallpapercave.com/wp/wp9109473.jpg"
    },
    {
        id: 12,
        year: "2015",
        title: "Guardiões da Galáxia Vol. 2",
        elenco: "Chris Pratt, Zoe Saldana, Dave Bautista",
        duracao: "136 minutos",
        personagens: "Peter Quill, Gamora, Drax, Groot, Nebulosa, Rocket",
        resumo: "Os Guardiões descobrem os segredos da verdadeira paternidade de Peter Quill enquanto enfrentam novas ameaças.",
        vilao: "Ego",
        image: "https://noticiasdatv.uol.com.br/media/_versions/artigos/pom-klementieff-dave-bautista-chris-pratt-kurt-russell-zoe-saldana-guardioes-da-galaxia-vol-2-reproducao-marvel-min_fixed_large.jpg"
    },
    {
        id: 13,
        year: "2015",
        title: "Vingadores: Era de Ultron",
        elenco: "Robert Downey Jr., Chris Evans, Scarlett Johansson e elenco",
        duracao: "141 minutos",
        personagens: "Homem de Ferro, Capitão América, Thor, Hulk, Viúva Negra, Gavião Arqueiro, Visão, Mércurio, Feiticeira Escarlate",
        resumo: "Os Vingadores precisam derrotar Ultron, uma inteligência artificial criada por Tony Stark que ameaça destruir a humanidade.",
        vilao: "Ultron",
        image: "https://images-1.rakuten.tv/storage/snapshot/shot/b6c59ca2-770f-4e4b-a231-5222480565a1-snapshot-1590665210.jpeg"
    },
    {
        id: 14,
        year: "2015",
        title: "Homem-Formiga",
        elenco: "Paul Rudd, Evangeline Lilly, Michael Douglas",
        duracao: "117 minutos",
        personagens: "Scott Lang, Hank Pym, Hope van Dyne",
        resumo: "Scott Lang deve assumir o manto de Homem-Formiga para ajudar seu mentor, Hank Pym, a proteger a tecnologia de encolhimento.",
        vilao: "Darren Cross / Jaqueta Amarela",
        image: "https://www.planocritico.com/wp-content/uploads/2018/04/Homem-Formiga.jpg"
    },
    {
        id: 15,
        year: "2016",
        title: "Capitão América: Guerra Civil",
        elenco: "Chris Evans, Robert Downey Jr., Scarlett Johansson",
        duracao: "147 minutos",
        personagens: "Capitão América, Homem de Ferro, Pantera Negra, Viúva Negra, Feiticeira Escarlate, Soldado Invernal, Falcão, Homem-Aranha...",
        resumo: "Os Vingadores se dividem em duas facções após um desacordo sobre a supervisão governamental das suas ações.",
        vilao: "Helmut Zemo",
        image: "https://cinematologia.com.br/cine/wp-content/uploads/2019/04/696684.jpg"
    },
    {
        id: 16,
        year: "2016",
        title: "Doutor Estranho",
        elenco: "Benedict Cumberbatch, Tilda Swinton, Chiwetel Ejiofor",
        duracao: "115 minutos",
        personagens: "Doutor Estranho, Anciã, Mordo",
        resumo: "Stephen Strange, um neurocirurgião arrogante, aprende as artes místicas para salvar o mundo de forças sombrias.",
        vilao: "Kaecilius",
        image: "https://wallpapercave.com/wp/wp15157717.webp"
    },
    {
        id: 17,
        year: "2017",
        title: "Pantera Negra",
        elenco: "Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o",
        duracao: "134 minutos",
        personagens: "Pantera Negra, Nakia, Killmonger",
        resumo: "Após a morte de seu pai, T'Challa retorna para assumir o trono e se tornar o novo Pantera Negra, o protetor de Wakanda.",
        vilao: "Erik Killmonger (N'Jadaka)",
        image: "https://uploads.metroimg.com/wp-content/uploads/2019/07/04122002/pantera-negra.jpg"
    },
    {
        id: 18,
        year: "2017",
        title: "Thor: Ragnarok",
        elenco: "Chris Hemsworth, Tom Hiddleston, Cate Blanchett",
        duracao: "130 minutos",
        personagens: "Thor, Loki, Hela, Hulk",
        resumo: "Thor precisa impedir o Ragnarok, a destruição iminente de Asgard, enfrentando a poderosa Hela, sua irmã desconhecida.",
        vilao: "Hela",
        image: "https://s2-g1.glbimg.com/KqYzl29KpXiOsRi-5S3PCO0O71k=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/0/V/WqIYjQTqGhVaDLLfprMg/thor-ragnarok-hulk.jpg"
    },
    {
        id: 19,
        year: "2018",
        title: "Vingadores: Guerra Infinita",
        elenco: "Robert Downey Jr., Chris Evans, Josh Brolin",
        duracao: "149 minutos",
        personagens: "Os Vingadores e Guardiões da Galáxia",
        resumo: "Os Vingadores unem forças para impedir que Thanos consiga todas as Joias do Infinito e as use para destruir metade do universo.",
        vilao: "Thanos",
        image: "https://wallpapercave.com/wp/wp3533033.jpg"
    },
    {
        id: 20,
        year: "2018",
        title: "Homem-Formiga e a Vespa",
        elenco: "Paul Rudd, Evangeline Lilly, Michael Peña",
        duracao: "118 minutos",
        personagens: "Homem-Formiga, Vespa, Fantasma",
        resumo: "Scott Lang lida com as consequências de suas escolhas enquanto ajuda Hope e Hank Pym a resgatar Janet van Dyne do reino quântico.",
        vilao: "Fantasma",
        image: "https://ogimg.infoglobo.com.br/in/22845683-088-31f/FT1086A/760/76973580_SC-Homem-Formiga-e-Vespa-Marvel-Studios.jpg"
    },
    {
        id: 21,
        year: "2019",
        title: "Vingadores: Ultimato",
        elenco: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
        duracao: "181 minutos",
        personagens: "Homem de Ferro, Capitão América, Viúva Negra e demais sobreviventes",
        resumo: "Os Vingadores restantes se unem para trazer de volta os amigos que perderam na batalha final contra o Titã Louco.",
        vilao: "Thanos",
        image: "https://legadodamarvel.com.br/wp-content/uploads/2019/05/1nova-imagem-vingadores-ultimato-legadodamarvel.jpg"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const timelineContainer = document.getElementById('timeline-container');
    const movieModalElement = document.getElementById('movieModal');
    
    // Elements of the Modal
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('movieModalLabel');
    const modalYear = document.getElementById('modalYear');
    const modalDuration = document.getElementById('modalDuration');
    const modalCast = document.getElementById('modalCast');
    const modalVillain = document.getElementById('modalVillain');
    const modalSummary = document.getElementById('modalSummary');

    // 1. Render Timeline dynamically
    timelineData.forEach((movie, index) => {
        // Determine position based on odd/even index
        const positionClass = index % 2 === 0 ? 'left' : 'right';

        const item = document.createElement('div');
        item.classList.add('timeline-item', positionClass);
        item.setAttribute('data-id', movie.id);
        item.setAttribute('data-bs-toggle', 'modal');
        item.setAttribute('data-bs-target', '#movieModal');

        item.innerHTML = `
            <div class="timeline-content">
                <img src="${movie.image}" alt="Poster de ${movie.title}" class="timeline-img" loading="lazy" onerror="this.onerror=null; this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png';">
                <div class="timeline-info">
                    <span class="timeline-year">${movie.year}</span>
                    <h3 class="timeline-title">${movie.title}</h3>
                    <div class="timeline-click-hint">
                        <i class="fa-solid fa-circle-info"></i> Clique para detalhes
                    </div>
                </div>
            </div>
        `;
        
        // Popula Modal ao clicar
        item.addEventListener('click', () => {
            modalTitle.textContent = movie.title;
            modalYear.textContent = movie.year;
            modalDuration.textContent = movie.duracao;
            modalCast.textContent = movie.elenco;
            modalVillain.textContent = movie.vilao;
            modalSummary.textContent = movie.resumo;
            modalImage.src = movie.image;
            modalImage.alt = `Poster ${movie.title}`;
            
            // Força a abertura do Modal usando CSS/Vanilla JS para não depender do Bootstrap JS (que é bloqueado localmente)
            const modalEl = document.getElementById('movieModal');
            modalEl.classList.add('show');
            modalEl.style.display = 'block';
            modalEl.removeAttribute('aria-hidden');
            modalEl.setAttribute('aria-modal', 'true');
            
            // Adiciona o fundo escuro (backdrop)
            let backdrop = document.querySelector('.modal-backdrop');
            if (!backdrop) {
                backdrop = document.createElement('div');
                backdrop.classList.add('modal-backdrop', 'fade', 'show');
                document.body.appendChild(backdrop);
            }
            document.body.classList.add('modal-open');
        });

        timelineContainer.appendChild(item);
    });

    // Lógica para fechar o Modal (Botão X)
    document.querySelectorAll('[data-bs-dismiss="modal"]').forEach(btn => {
        btn.addEventListener('click', () => {
            const modalEl = document.getElementById('movieModal');
            modalEl.classList.remove('show');
            modalEl.style.display = 'none';
            modalEl.setAttribute('aria-hidden', 'true');
            modalEl.removeAttribute('aria-modal');
            
            const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) backdrop.remove();
            
            document.body.classList.remove('modal-open');
        });
    });

    // 2. Intersection Observer for Fade-in Animations
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        }, observerOptions);

        document.querySelectorAll('.timeline-item').forEach(item => {
            observer.observe(item);
        });
    } else {
        // Fallback for older browsers (show all items directly)
        document.querySelectorAll('.timeline-item').forEach(item => {
            item.classList.add('in-view');
        });
    }

    // 3. Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});