import { Injectable } from '@angular/core';
import { Cake } from '../models/cake.interface';
import { Review } from '../models/review.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CakeService {

  constructor(private http: HttpClient) { }

  getAllCakes() {
    return this.http.get<Cake[]>('/api/cakes');
  }

  getOneCake(id: string) {
    return this.http.get<Cake>(`/api/cakes/${id}`);
  }

  createCake(cake: Cake) {
    return this.http.post<Cake>('/api/cakes/new', cake);
  }

  addReviewToCake(review: Review) {
    return this.http.put<Cake>(`/api/cakes/update/${review.CakeID}`, review)
  }
  
  deleteCake(id: string) {
    return this.http.delete(`/api/cakes/remove/${id}`);
  }

  createReview(review: Review) {
    return this.http.post<Review>('/api/reviews/new', review);
  }

  getAllReviewsForCake(id: string) {
    return this.http.get<Review[]>(`/api/reviews/${id}`);
  }

}
