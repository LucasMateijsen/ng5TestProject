import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  constructor(private auth: AuthService, private modalService: ModalService) { }

  ngOnInit() {
    //this.getHeroes();
    if (!this.auth.isAuthenticated()) {
      this.auth.login();
    }
  }

  showModal() {
    this.modalService.open("dashboardModal");
  }
}
