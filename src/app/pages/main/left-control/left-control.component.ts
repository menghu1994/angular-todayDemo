import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { LocalStorageService } from "../../../services/local-storage/local-storage.service";
import { USERNAME } from "../../../services/local-storage/local-storage.namespace";

@Component({
  selector: 'app-left-control',
  templateUrl: './left-control.component.html',
  styleUrls: ['./left-control.component.css']
})
export class LeftControlComponent implements OnInit {
  @Input() isCollapsed?: boolean;
  username!: string;

  constructor(
    private store: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.username = this.store.get(USERNAME)
  }

}
