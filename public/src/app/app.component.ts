import { Component, OnInit } from '@angular/core';
import { CakeService } from './service/cake.service';
import { Cake } from './models/cake.interface';
import { Review } from './models/review.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'RateMyCakes';
  cakes: Cake[] = [];
  reviews: Review[] = [];
  averageRating: number = 0;
  newCake: Cake = {
    BakerName: '',
    ImageUrl: ''
  };
  newReview: Review = {
    Rating: 5,
    Comment: ''
  };
  selectedCake: Cake;

  constructor(private cakeService: CakeService) {}

  getAllCakes() {
    this.cakeService.getAllCakes().subscribe(data => {
      this.cakes = data;
    });
  }

  ngOnInit() {
    this.cakeService.getAllCakes().subscribe(data => {
      this.cakes = data;
    })
  }

  submitNewCake() {
    this.cakeService.createCake(this.newCake).subscribe(data => {
      this.cakes.push(data);
      this.newCake = {
        BakerName: '',
        ImageUrl: ''
      };
    });
  }

  onSubmitNewReview(id: string) {
    this.newReview.CakeID = id;
    this.cakeService.createReview(this.newReview).subscribe(data => {
      console.log(data);
      this.newReview = {
        Rating: 5,
        Comment: ''
      };
    });
  }

  getOneCake(cake: Cake) {
    this.averageRating = 0;
    this.selectedCake = cake;
    this.cakeService.getAllReviewsForCake(cake._id).subscribe(data => {
      console.log(data);
      this.reviews = data;
      let sum = 0;
      for (let x = 0; x < this.reviews.length; x++) {
          sum += this.reviews[x].Rating;
      }
      this.averageRating = sum/this.reviews.length;
    });
  }


}
