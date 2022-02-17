import { Injectable } from '@angular/core';

import { Tarefa } from './';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  /**
   * Lista todas as tarefas existentes.
   * @returns Tarefa[]
   */
  listarTodos(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
      //Se existir tarefas, as retorna no formato JSON. Senão, retorna um array vazio.
  }

  /**
   * Cadastra uma nova tarefa.
   * @param Tarefa tarefaNova
   */
  cadastrar(tarefaNova: Tarefa): void{
    const tarefas = this.listarTodos();
    tarefaNova.id = new Date().getTime();
    tarefas.push(tarefaNova);
    localStorage['tarefas'] = JSON.stringify(tarefas);
      //JSON.stringify() converte as entradas para string.
  }

  buscarPorId(id: number): Tarefa{
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }
}
