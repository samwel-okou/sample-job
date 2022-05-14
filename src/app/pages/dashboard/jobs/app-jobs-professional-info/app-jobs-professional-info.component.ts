import { Component, Input, OnInit } from '@angular/core';
import { UserInfo } from '../jobs.model';

@Component({
  selector: 'app-app-jobs-professional-info',
  templateUrl: './app-jobs-professional-info.component.html',
  styleUrls: ['./app-jobs-professional-info.component.scss']
})
export class AppJobsProfessionalInfoComponent implements OnInit {

  @Input() user?: UserInfo = {};

  constructor () { }

  ngOnInit(): void {
  }

}

