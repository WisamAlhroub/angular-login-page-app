import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-audio',
  templateUrl: './radio-audio.component.html',
  styleUrls: ['./radio-audio.component.sass']
})
export class RadioAudioComponent implements OnInit {
  radioData: any;

  constructor(private http: HttpClient) {
    this.http.get("https://api.mocki.io/v1/9d1dd4d2")
    .subscribe((data: any)=> {
      this.radioData = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
  }
}
