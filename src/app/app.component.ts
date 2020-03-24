import { Component, NgModule } from '@angular/core';
import { TabelaService } from './tabela.service';
import { Tabela } from './tabela.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/*@NgModule({
  providers: [
    TabelaService
  ]
})*/


export class AppComponent {
  
  
  constructor(private tabelaService: TabelaService){
    
  }
  
  Tabelas: Tabela[];

  ngOnInit(){

  this.tabelaService.getTabela().subscribe(tabelas => console.log(tabelas));
  this.tabelaService.getTabela().subscribe(tabelas => this.Tabelas = tabelas);
  console.log(this.Tabelas)
  }
}
