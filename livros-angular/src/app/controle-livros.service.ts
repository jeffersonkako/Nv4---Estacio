import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  livros: Livro[];

  constructor() {
    this.livros = [
      {
        codigo: 1,
        codEditora: 1,
        titulo: 'Eloquent Javascript',
        resumo:
          'O JavaScript está no centro de quase todos os aplicativos da Web modernos, desde aplicativos sociais como o Twitter até estruturas de jogos baseados em navegador, como Phaser e Babylon. Embora simples para os iniciantes aprenderem e brincarem, o JavaScript é uma linguagem flexível e complexa que você pode usar para criar aplicativos em grande escala.',
        autores: ['Marijn Haverbeke'],
      },
      {
        codigo: 2,
        codEditora: 2,
        titulo: 'Arquitetura Limpa',
        resumo:
          "As regras universais de arquitetura de software aumentam dramaticamente a produtividade dos desenvolvedores ao longo da vida dos sistemas de software. Agora, aproveitando o sucesso dos seus best-sellers 'Código Limpo' e 'O Codificador Limpo', o lendário artesão de software Robert C. Martin (“Uncle Bob”) vai revelar essas regras e ajudar o leitor a aplicá-las.A 'Arquitetura Limpa' de Martin não é só mais um catálogo de opções. Com base em meio século de experiência nos mais variados ambientes de software, Martin indica as escolhas que você deve fazer e explica por que elas são cruciais para o seu sucesso. Como já era esperado do Uncle Bob, este livro está cheio de soluções simples e diretas para os desafios reais que você enfrentará - aqueles que irão influenciar diretamente o sucesso ou fracasso dos seus projetos.",
        autores: ['Robert C. Martin'],
      },
      {
        codigo: 3,
        codEditora: 3,
        titulo: 'React - Aprenda Praticando',
        resumo:
          'React é uma biblioteca para a criação de sites, interfaces gráficas e aplicações web, criada pelo Facebook, e seu uso tem crescido muito, sendo usada por grandes empresas, como Netflix, Walmart e The New York Times. Neste livro, eminentemente prático, Maujor, com sua reconhecida didática, fornece ao leitor uma visão detalhada dos conceitos básicos e recursos da biblioteca React. Você aprenderá a desenvolver aplicativos React completos, passo a passo, desde o zero até a hospedagem em um servidor remoto. Cada capítulo apresenta um novo recurso do React, com exercícios práticos para consolidar os conceitos estudados. Destina-se a desenvolvedores com conhecimentos básicos de HTML, CSS3 e JavaScript, interessados na criação de sites tanto na área de design quanto na de desenvolvimento e programação. O livro também poderá ser útil como material de referência do React.',
        autores: ['Maurício Samy Silva'],
      },
    ];
  }

  obterLivros = (): Livro[] => {
    return this.livros;
  };

  incluir = (livro: Livro): void => {
    const codigo =
      this.livros.reduce((max, livro) => Math.max(max, livro.codigo), 0) + 1;
    this.livros.push({ ...livro, codigo });
  };

  excluir = (codigo: number): void => {
    const indiceLivro = this.livros.findIndex(
      (livro) => livro.codigo === codigo
    );
    if (indiceLivro !== -1) {
      this.livros.splice(indiceLivro, 1);
    }
  };
}
