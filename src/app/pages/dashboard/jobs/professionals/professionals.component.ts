import { Component, Input, OnInit } from '@angular/core';
// import { Project } from 'src/app/apps/projects/shared/projects.model';
import { Project } from 'src/app/apps/projects/shared/projects.model';

@Component({
   selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.scss']
})
export class ProfessionalsComponent implements OnInit {

  @Input() projects: Project[] = [];
  displayCount: number = 3;
  modifiedTeamMembers: any = [];

  constructor () { }

  ngOnInit(): void {
  }

  /**
   * get remaining members to display
   * @param memberList member list
   */
  getDisplayMembersList(memberList: any): any {
    if (memberList.length <= this.displayCount || (memberList.length - this.displayCount) == 1) {
      this.modifiedTeamMembers = memberList;
    }
    else {
      this.modifiedTeamMembers = memberList.filter((m: any, index: number) => index < this.displayCount)
    }
    return this.modifiedTeamMembers;
  }

}

