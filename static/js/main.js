document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Efeito Fade-In ao rolar a página
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));


    // 2. Arrasta Carrossel vs Abrir Lightbox
    const modal = document.getElementById('lightbox-modal');
    const imgAtiva = document.getElementById('img-modal-ativa');
    const contador = document.getElementById('contador-modal');
    
    let galeriaAtual = [];
    let indiceAtual = 0;

    const carrosseis = document.querySelectorAll('.carrossel-interativo');

    carrosseis.forEach(slider => {
        let isDown = false;
        let startX;
        let scrollLeft;
        let arrastou = false; 

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            arrastou = false;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => { isDown = false; });
        slider.addEventListener('mouseup', () => { isDown = false; });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            
            // Se o mouse mover mais de 5 pixels, é como "Arraste"
            if (Math.abs(walk) > 5) arrastou = true; 
            slider.scrollLeft = scrollLeft - walk;
        });

        slider.addEventListener('wheel', (evt) => {
            evt.preventDefault();
            slider.scrollLeft += evt.deltaY;
        });

        // Clique nas fotos dentro do carrossel
        const fotos = slider.querySelectorAll('.foto-modal');
        fotos.forEach(foto => {
            foto.addEventListener('click', (e) => {
                // Se o usuário estava arrastando o carrossel, ignora o clique
                if (arrastou) return; 

                // Monta a lista de fotos apenas desta galeria específica
                galeriaAtual = Array.from(fotos).map(f => f.getAttribute('src'));
                indiceAtual = parseInt(foto.getAttribute('data-index'));

                abrirModal();
            });
        });
    });


    // 3. Funções de Controle do Lightbox
    function atualizarImagem() {
        imgAtiva.setAttribute('src', galeriaAtual[indiceAtual]);
        contador.innerText = `${indiceAtual + 1} / ${galeriaAtual.length}`;
    }

    function abrirModal() {
        atualizarImagem();
        modal.classList.remove('hidden');
        // Pequeno atraso para a transição de opacidade do CSS funcionar
        setTimeout(() => modal.classList.add('visivel'), 10);
        document.body.classList.add('modal-aberto');
    }

    function fecharModal() {
        modal.classList.remove('visivel');
        setTimeout(() => modal.classList.add('hidden'), 300);
        document.body.classList.remove('modal-aberto');
    }

    function proximaFoto() {
        indiceAtual = (indiceAtual + 1) % galeriaAtual.length;
        atualizarImagem();
    }

    function fotoAnterior() {
        indiceAtual = (indiceAtual - 1 + galeriaAtual.length) % galeriaAtual.length;
        atualizarImagem();
    }

    // Eventos dos botões do Modal
    document.getElementById('btn-fechar').addEventListener('click', fecharModal);
    document.getElementById('btn-proximo').addEventListener('click', proximaFoto);
    document.getElementById('btn-anterior').addEventListener('click', fotoAnterior);

    // Fechar ao clicar fora da foto (no fundo escuro)
    modal.addEventListener('click', (e) => {
        if (e.target === modal) fecharModal();
    });

    // Controle por Teclado (Setas e Esc)
    document.addEventListener('keydown', (e) => {
        if (modal.classList.contains('hidden')) return;

        if (e.key === 'Escape') fecharModal();
        if (e.key === 'ArrowRight') proximaFoto();
        if (e.key === 'ArrowLeft') fotoAnterior();
    });

    // 4. PROTEÇÃO BÁSICA DE IMAGENS    
    // Bloqueia o botão direito (Menu de contexto) em todas as imagens
    document.addEventListener('contextmenu', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    });

    // Bloqueia o "arrastar e soltar" para salvar na área de trabalho
    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    });

});