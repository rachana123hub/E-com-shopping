import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-http-loader',
  templateUrl: './http-loader.component.html',
  styleUrls: ['./http-loader.component.scss']
})
export class HttpLoaderComponent implements OnInit {
  loading: boolean;

  constructor(private _loaderService: LoaderService) { }
  ngOnInit() {
    this._loaderService.isLoading.subscribe((load) => {
      this.loading = load;
    });
  }

}