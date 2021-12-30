import { Component } from '@angular/core';
import { ApiCallService } from './api-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  constructor(private service:ApiCallService) { }

  ngOnInit(): void {
    
    this.myCall();

    
    
  }

  myCall(){
    this.service.CallApi().subscribe(
      (responseList) =>{
        for(let i=0;i<responseList.length; i++){
          console.log(responseList[i]);
        }
      }
    )
    
  }


}
