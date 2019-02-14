import { Component, OnInit } from '@angular/core';
import { Entry } from '../model/Entry';
import { WeightEntriesService } from '../weight-entries.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hm-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.css']
})
export class EntryDetailsComponent implements OnInit {
    entry: Entry;

  constructor(public entriesSvc: WeightEntriesService,
    private currentRoute: ActivatedRoute) { }

  ngOnInit() {

    let id = Number(this.currentRoute.snapshot.params.id);
    this.entriesSvc.getEntries().subscribe(entries => {
      this.entry = entries.find(e => {
        return e.id === id;
      });
    });

  }

}
