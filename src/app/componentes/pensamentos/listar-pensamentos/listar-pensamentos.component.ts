import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Estudando Anglar',
      autoria: 'Yuri',
      modelo: 'modelo2'
    },
    {
      conteudo: 'aprimorando novas stacks',
      autoria: 'Yu',
      modelo: 'modelo3'
    },

    {
      conteudo: ' O Angular 14 traz melhorias significativas para desenvolvedores, incluindo componentes autônomos, que permitem uma estrutura mais modular e independente, além de aprimoramentos em formulários reativos, suporte a tipagem estrita no router, melhorias de desempenho e atualizações na compatibilidade com o TypeScript',
      autoria: 'Lero lero',
      modelo: 'modelo1'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
