import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tabela } from './tabela.model'

@Injectable({
  providedIn: 'root'
})
export class TabelaService {

  constructor(private http: HttpClient) { }

  readonly url: string = 'https://localhost:5001/api/tabela' 

  getTabela(): Observable<Tabela[]> {
    return this.http.get<Tabela[]>(`${this.url}`);
  }
}
