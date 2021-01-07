import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyRequestCount = 0;

  constructor(private spinnerService: NgxSpinnerService) { }

  busy(){
    this.busyRequestCount++;
    this.spinnerService.show(undefined, {
      type: 'line-scale-party',
      bdColor: 'rgba(43,43,43,.25',
      color: '#909090'
    });
  }

  idle(){
    this.busyRequestCount--;
    if (this.busyRequestCount <= 0){
      this.busyRequestCount = 0;
      this.spinnerService.hide();
    }
  }
}
