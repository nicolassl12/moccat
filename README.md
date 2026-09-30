# Moccat ☕🐾

> Café quentinho, muitos ronrons e, quem sabe, um novo amor pra levar pra casa.

O **Moccat** é um site que simula uma cafeteria com um espaço interativo de gatos e um programa de adoção. Enquanto toma um café, o cliente pode conhecer os gatinhos que moram no espaço, descobrir a personalidade de cada um e, se rolar aquela conexão, adotar. O cardápio também entra no clima, com comidas deliciosas e temáticas, como o latte com arte de patinha e o cookie de patinha.

A inspiração surgiu de uma das cafeterias que eu frequentei, que une café, gatos e adoção responsável num lugar só.

Este projeto foi feito como atividade de **HTML e CSS**, com o objetivo de criar duas páginas sobre um tema livre.

---

## 📄 Páginas

### Página inicial (`PAGINA_1`)
- **Navbar** com o logo do Moccat à esquerda e o menu (Cardápio, Doação, Contatos e Adote) à direita.
- **Barra interativa com 3 blocos**: uma foto de café com latte art, o cantinho dos gatos e a última adoção. Quando o mouse passa por cima, o bloco cresce e ganha destaque, enquanto os outros diminuem.
- **Nossos gatinhos**: 8 cards, um para cada gato disponível para adoção, com foto, nome, cor/pelagem, idade, sexo, FIV, FELV e um pequeno texto sobre o comportamento dele.
- **Faixa de doação** para quem quer ajudar sem adotar.
- **Rodapé** com redes sociais (@moccat), endereço, horário de funcionamento e contato.

### Cardápio (`PAGINA_2`)
- A mesma navbar e o mesmo rodapé da página inicial.
- **3 blocos interativos** no topo, com fotos do croissant, do latte art de gatinho e da torta de limão.
- **Cardápio** em um único bloco branco, no estilo de um cardápio de papel, dividido por categorias: Cafés, Bebidas geladas e Comidinhas. Entre o nome do item e o preço há uma linha pontilhada, como nos cardápios da vida real.

---

## 🎨 Paleta de cores

| Cor | Código | Onde aparece |
|-----|--------|--------------|
| Verde principal | `#6a7d58` | Navbar, nomes dos gatos e faixa de doação |
| Verde-oliva escuro | `#3e3b09` | Textos, títulos e rodapé |
| Verde claro | `#c4ce74` | Bordas dos cards e títulos do rodapé |
| Verde das seções | `#9bbc76` | Fundo das seções |
| Branco | `#fff` | Cards, cardápio e textos sobre fundo escuro |

---

## 📱 Responsividade

O site se adapta a três tamanhos de tela:

| Tela | Largura | Comportamento |
|------|---------|---------------|
| Computador | acima de 1024px | 4 gatinhos por linha e os 3 blocos lado a lado |
| Tablet | até 1024px | 2 gatinhos por linha |
| Celular | até 700px | 1 gatinho por linha, os 3 blocos um embaixo do outro e o rodapé centralizado |

---

## 🛠️ Tecnologias

- **HTML5**
- **CSS3**

---

## 🚀 Como abrir

1. Baixe ou clone esta pasta.
2. Abra o arquivo `PAGINA_1/index.html` no navegador.
3. Use o menu para navegar até o Cardápio.

Os ícones das redes sociais são carregados pela internet, então precisam de conexão para aparecer.

---

## 🤖 Desenvolvimento e uso de IA

Boa parte do site foi construída em cima de uma estrutura pronta de outras páginas que eu tinha feito anteriormente em um curso de HTML e CSS. A partir dela, adaptei o conteúdo, as cores e o layout para o tema do Moccat.

Nesta atividade o uso de IA foi liberado, então usei o **Claude** como apoio para criar coisas novas que eu ainda não sabia fazer, como a **barra interativa de 3 blocos**, e para me ajudar a montar os **blocos dos gatos**, já que tenho dificuldade com o posicionamento dos elementos. Depois de cada resposta, eu revisava o código, fazia minhas próprias alterações (cores, textos, fotos reais) e pedia novos ajustes.

### Principais prompts utilizados

**1. Estrutura inicial e blocos dos gatos**
> Vou fazer uma atividade de HTML e CSS, preciso fazer 2 páginas. Quero fazer um site chamado Moccat. Quero 8 blocos (4 por linha) com a foto de cada gatinho, uma lista com cor/pelagem, idade, sexo, FIV e FELV, e um pequeno texto sobre o comportamento dele.

**2. Barra interativa de 3 blocos**
> No lugar desse main-banner, que é apenas um bloco retangular com texto, queria uma aba com 3 blocos lado a lado, igual à imagem de referência, que ganhem prioridade quando o mouse passar por cima. Quero texto em um, uma imagem de cafeteria no do meio e, no último, a foto de um gatinho com a legenda "Última adoção" e uma frase carinhosa.

**5. Novo cardápio**
> Para o cardápio quero um único bloco branco grande, igual a um cardápio da vida real, com uma divisão simples por texto entre as categorias.

---

## 👩‍💻 Autora

Feito por **Nicolas**. 🐈
