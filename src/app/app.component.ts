import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `<code *ngFor="let log of logs">{{ log | json }}</code>`,
  styles: ['code { display: block; }']
})
export class AppComponent implements OnInit {
  constructor( private http :HttpClient ) {}
  public readonly logs: any[] = [];

  ngOnInit() {
    const request = new HttpRequest('GET', 'http://localhost:8000', {
      reportProgress: true,
      responseType: 'text'
    });

    this.http.request(request).subscribe( this.logs.push.bind(this.logs) );
  }
}
