import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-audio',
  templateUrl: './radio-audio.component.html',
  styleUrls: ['./radio-audio.component.sass']
})
export class RadioAudioComponent implements OnInit, OnDestroy {
  radioData: any;

  constructor(private http: HttpClient) {
    if(this.radioData) {
      this.http.get("https://api.mocki.io/v1/9d1dd4d2")
    .subscribe((data: any)=> {
      this.radioData = data;
      console.log(data);
    });
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    localStorage.removeItem('logSession');
  }
}
