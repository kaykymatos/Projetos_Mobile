import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContaapiService {

  constructor(private http: HttpClient) { }

  postConta(nome: string, dataVencimento: string, ValorPagar: string, dataPagamento: string, email: string) {
    let url = 'https://localhost:5000/api/Conta/';

    let data =
    {
      "nome": nome,
      "dataVencimento": dataVencimento,
      "ValorPagar": ValorPagar,
      "dataPagamento": dataPagamento,
      "email": email
    };

    return this.http.post(url, data).toPromise();
  }

  getContatos() {
    let url = 'https://localhost:5000/api/Conta/';
    return this.http.get(url).toPromise();
  }

  getContato(id) {
    let url = 'https://localhost:5000/api/Conta/' + id;
    return this.http.get(url).toPromise();
  }
}