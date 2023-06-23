# Quest React Avançado

Esta é uma solução para a Quest React Avançado. As quests do curso DevQuest do [@devemdobro](instagram.com/devemdobro), são desafios que nos ajudam a aprimorar e desenvolver nossas habilidades de codificação.

## Índice

- [Visão geral](#visão-geral)
   - [O desafio](#O-desafio)
   - [Links](#links)
- [Construído com](#construído-com)
- [Autor](#autor)

### Visão geral

#### O desafio

A quest consiste em criar uma pokedex do 0 utilizando apenas os dados fornecidos pela api [pokéapi](https://pokeapi.co/). A página deveria contar uma home com uma lista dos 20 pokemons iniciais, com seus respectipos nome e imagen. Além disso, deveria conter também um botão para carregar mais pokemóns 10 pokemons a listagem atual, e exibi-los na tela.
Cada pokemon deveria ser clicável e ao clicar o usuário poderia acessar uma página interna desse pokemon, com informações detalhadas como por exemplo tipo, lista de movimentos e habilidades.
A home também deveria conter um botão para alternar entre tema claro e escuo.

Além disso, alguns requisitos técnicos deveriam ser seguidos, eles eram:
- A aplicação deverá ser Single Page Application (SPA);
- Utilizar React.js para o desenvolvimento da aplicação;
- Utilizar Context API para criação do Theme Toggler (Alternador entre tema claro e escuro);
- Utilizar styled-components para estilização dos componentes;
- Utilizar react-router-dom para a navegação entre as páginas;

Para esse desafio tive liberdade para criar o layout, estilo, estruturar e até adicionar outras funcionalidades como desejasse.

##### Funcionalidades adicionais

Além das funcionalidades exigidas para o desafio, foi adionado também algumas outras como:

##### Filtro de exibição

O filtro foi adicionado selecionar o que seria exibido na tela inicial, para que o usuário tivesse a opção de escolher apenas um determinado tipo de pokemon ou até mesmo pesquisar por nome ou id algum pokemon específico.

##### Aba de informação

A aba de informação do pokémon selecionada possui três abas de informações, para que o usuário possa visualizar entre:
- Informações gerais: Possui informçãoes como id do pokemon, nome, tipo e até XP. 
- Status: Possui informações sobre status de vida, ataque, defesa, abilidade, etc.
- Movimentos: Nessa aba foram adicionados todos os movimentos que o pokemon pode aprender, filtrados pela forma como são aprendidos. Sejam eles atráves do nivel, TM's, movimentos unicos de pokemons nascidos de ovos e até mesmo movimentos aprendidos atráves de tutores.
Cada movimento também possui alguns dados como nome, PP (que seria quantas vezes o pokemon pode usar o golpe antes de se curar/descançar novamente) e o tipo.
Também são clicaveis, exibindo assim uma nova aba contento a categoria do golpe, força e chanse de acerto. Além de contar com a descrição do golpe logo a baixo.

#### Links

- Repositório disponível em: [https://github.com/Jggranito/Quest-React-Avancado](https://github.com/Jggranito/Quest-React-Avancado)
- Site ao vivo: [https://jggranito.github.io/Quest-React-Avancado/](https://jggranito.github.io/Quest-React-Avancado/)

### Construído com

- Marcação HTML5 semântica
- Propriedades personalizadas de CSS
- Validação com JS
- API com JS
- Tratamento de arquivos json
- Single Page Application (SPA)
- **React.js**
- **Context API**
- **Styled-components**
- **React-router-dom**
- Design responsivo

### Autor

- LinkedIn - [João Gabriel Granito](https://www.linkedin.com/in/jo%C3%A3o-gabriel-granito-77666a262/)