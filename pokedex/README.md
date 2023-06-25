Projeto React e API's
O Projeto React e APIs é um site de pokémons que possui três páginas: Home, Pokedex e Detalhes. O projeto está subdivido em temas de acordo com os conteúdos que estudado durante o Módulo 2 - Frontend.

Este projeto terá como fonte de dados para a sua criação a Poke Api, uma Api pública, muito usada para aplicações focadas em aprendizado de programação e também usada em cases de processos seletivos.

Os conteúdos principais a serem estudados são:

Integração de APIs
React Router
Design Systems
Estado Global
Enunciado
É objetivo deste projeto criar um site com três páginas usando a Poke Api com as seguintes ferramentas:

React
React Router
Styled-components
React Context
Axios
Requisitos
Gerais:
 O site deve ter 3 páginas: Home, Pokedex e Detalhes;
 Projeto deve seguir o design proposto;
 O fluxo de trocas de páginas devem ser semelhante ao fluxograma;
Página Home:
 Mostrar uma lista de Pokemons, contendo ao menos 20 Pokemons;
 Cada Pokemon será representado por um Card;
 Em cada card de Pokemon tem um botão para adicioná-lo à Pokedex e um outro botão para acessar os detalhes do Pokemon;
 Header dessa página terá um botão para acessar a página da Pokedex
Página Pokédex
 Renderizar a lista de pokémons adicionados na pokedex;
 Em cada card de Pokemon deve ter um botão para removê-lo da Pokedex e um outro botão para acessar os detalhes do Pokemon.
 Header deve ter um botão para voltar para a Home
 Não deve ser possível adicionar o mesmo Pokemon duas vezes na Pokedex
Página de Detalhes
 Mostrar os detalhes do Pokemon selecionado, com informações descritas
 Header deve ter um botão para adicionar ou remover da Pokedex e outro para voltar a página home.
 Criar um readme para o projeto;
Instruções para preparar o seu repositório
Faça o fork desse repositório e realize o clone da sua cópia seu-nome-de-usuario/projeto-lista-intro-javascript.
Quer uma dica?
Crie os arquivos do projeto dentro deste repo;
Lembre-se de abrir os PRs para seu próprio repositório.
Para isso, você precisará fazer o projeto utilizando branches. Não faça as alterações direto na branch main!

DESENVOLVIMENTO TERMINAL:
npm i
npx create-react-app pokedex
cd pokedex
npm run start
npm install styled-components@5.3.10 
npm install react-router-dom
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

