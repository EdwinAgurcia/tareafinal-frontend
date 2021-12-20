import { Component, OnInit } from '@angular/core';
import { Vehiculos } from 'src/app/api/models';
import { VehiculosControllerService } from 'src/app/api/services';



@Component({
  selector: 'app-flota-vehicular',
  templateUrl: './flota-vehicular.component.html'
})
export class FlotaVehicularComponent implements OnInit{
  listOfData: Vehiculos[] = []

  constructor(
  private vehiculosService: VehiculosControllerService

  ){}

  ngOnInit(): void {
      this.getData();
      console.log(this.listOfData)
  }
  
  getData():void{
this.vehiculosService.find().subscribe(data=>this.listOfData=data)
  }
  
}




  
