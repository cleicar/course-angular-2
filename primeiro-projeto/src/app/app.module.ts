import { BrowserModule } from '@angular/platform-browser'; //prepara a aplicação para ser executada por um browser.
import { NgModule } from '@angular/core'; // decorations comuns do Angular
import { FormsModule } from '@angular/forms'; // permite fazer data-bindins com a diretiva ng-model
import { HttpModule } from '@angular/http'; // permite fazer requisições ajax

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent} from './meu-primeiro/meu-primeiro.component';
import { MeuSegundoComponent } from './meu-segundo/meu-segundo.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [ // Todos componentes, diretivas e pipes do projeto.
    AppComponent,
    MeuPrimeiroComponent,
    MeuSegundoComponent
  ],
  imports: [ // Outros modulos que serão usados neste modulo ou nos componentes usados pelo modulo.
    BrowserModule,
    FormsModule,
    HttpModule,
    CursosModule
  ],
  providers: [], // Todos os serviços que ficarão disponíveis nos componentes do projeto.
  bootstrap: [AppComponent] // Qual componente será instanciado quando a aplicação executar. 
                            // Ele serve como container, é o view-port do projeto. Esta apenas no modulo raiz.
})

export class AppModule { }
