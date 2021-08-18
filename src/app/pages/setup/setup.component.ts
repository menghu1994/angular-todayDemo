import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'app/services/local-storage/local-storage.service';
import { USERNAME, INIT_FLAG, START_USING_DATE } from 'app/services/local-storage/local-storage.namespace';
import { getTodayTime } from '../../../utils/time';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
  username: string = '';
  value?: string;
  constructor(
    private store: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  completeSetup(): void {
    this.store.set(INIT_FLAG, true);
    this.store.set(START_USING_DATE, getTodayTime());
    this.store.set(USERNAME, this.username);
    // this.router.navigate("/main");
  }
}
