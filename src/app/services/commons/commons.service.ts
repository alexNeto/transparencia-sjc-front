import { Injectable } from '@angular/core';

@Injectable()
export class CommonsService {

  constructor() { }

  public getLogo() {
    return "Sem ideias para nome";
  }

  public getGit() {
    return ["https://github.com/alexNeto/camara-salario-sjc", "/alexNeto"];
  }

}
