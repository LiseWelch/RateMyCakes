import { Component, OnInit, Input } from '@angular/core';
import { Cake } from '../models/cake.interface';
import { Review } from '../models/review.interface';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})

export class ReviewComponent implements OnInit {

  @Input() selectedCake: Cake;
  @Input() averageRating;
  @Input() reviews;

  constructor() { }

  ngOnInit() {
  }

}
