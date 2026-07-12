# MD Wing Chun - Landing Page Institucional

**Acesse o projeto online:** [mdwingchun.com.br](https://mdwingchun.vercel.app/) 

Este projeto é uma landing page desenvolvida para uma academia de Kung Fu em Curitiba. O objetivo principal da aplicação é estabelecer a presença digital do negócio, melhorar o posicionamento em buscas locais (SEO) e otimizar a conversão de visitantes em alunos através do agendamento de aulas experimentais.
Este projeto é uma landing page desenvolvida para uma academia de Kung Fu em Curitiba. O objetivo principal da aplicação é estabelecer a presença digital do negócio, melhorar o posicionamento em buscas locais (SEO) e otimizar a conversão de visitantes em alunos através do agendamento de aulas experimentais.

Decisões de Arquitetura
O requisito principal era criar um site extremamente rápido, seguro e de fácil manutenção para o cliente.

Ao analisar as necessidades reais do negócio (uma página institucional focada em apresentação e conversão para o WhatsApp, sem a necessidade de painéis dinâmicos ou banco de dados), optei por construir uma aplicação com arquitetura 100% estática (HTML puro, Tailwind CSS e Vanilla JavaScript).

Essa decisão estratégica trouxe três grandes benefícios para o projeto:

Performance e Segurança: Sem processamento em backend ou conexão com banco de dados, o site fica blindado contra as vulnerabilidades web mais comuns e o tempo de carregamento cai para a casa dos milissegundos.

Custo-eficiência: Possibilitou o deploy do projeto diretamente na Vercel, garantindo CDN global e certificado SSL (HTTPS) automáticos, o que reduz os custos mensais de infraestrutura do cliente a zero.

Escalabilidade: O código final é limpo e desacoplado, o que facilita atualizações futuras e a inclusão de novas seções sem complexidade técnica.

Principais Funcionalidades
Design Responsivo e Mobile-First: A interface se adapta a qualquer tamanho de tela. No mobile, a barra de navegação superior adota um comportamento de rolagem horizontal nativa (overflow) para evitar quebra de layout.

Navegação em Âncora (Smooth Scroll): Menu sticky (fixo no topo centralizado) com rolagem suave para as seções da página, otimizado com padding superior dinâmico para não sobrepor os títulos das seções.

Galeria de Imagens Interativa (Lightbox): Modal construído com JavaScript puro para visualização ampliada das fotos do espaço e dos treinos, com navegação por botões e suporte a fechamento intuitivo.

Métricas e Rastreamento: Integração com a tag do Google Analytics 4 (GA4) para monitoramento de tráfego e métricas de acesso.

Integração com Mapa: Estrutura otimizada para redirecionamento e interação direta com a rota na ficha do Google Meu Negócio (Maps).

## Tecnologias Utilizadas

Front-end: HTML5, CSS3

Estilização: Tailwind CSS (via CDN)

Interatividade: JavaScript (Vanilla)

Hospedagem e Deploy: Vercel

Analytics: Google Analytics 4

## Como rodar o projeto localmente

Por ser uma aplicação totalmente estática, o projeto não exige a instalação de pacotes ou dependências.

1. Clone este repositório em sua máquina:
   `git clone https://github.com/ThaysChiafitela/mdwingchun.git`
2. Abra a pasta do projeto no seu editor de código (ex: VS Code).
3. Utilize a extensão **Live Server** para emular um servidor local ou abra o arquivo `index.html` diretamente em seu navegador.