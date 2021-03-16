import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../Service/home.service';
import {HomeModel} from '../../model/home-model'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  //providers:[HomeService]
})
export class HomeComponent implements OnInit {

  constructor(private homeSvc:HomeService) { }

  title="This i my test application.";
  homeModel:Observable<HomeModel[]>;
  
  ngOnInit(): void {
 
    this.homeModel=this.homeSvc.getHomeData();
    this.homeModel.forEach(x=>{console.log(x.forEach(y=>{console.log(y.ID+'EmployeID:'+y.Title)}))});
   
  }

}
