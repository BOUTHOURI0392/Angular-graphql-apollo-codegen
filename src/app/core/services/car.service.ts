import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Car } from '../entities/car.entity';
import { HttpHeaders } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import { DeleteOneDocument, FindCarsDocument, AddInputDocument, UpdatecarDocument, FindOneDocument } from '../type/types'


@Injectable({
  providedIn: 'root'
})
export class CarService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'jwt-token',
    }),
  };

  constructor(private http: HttpClient, private apollo: Apollo) { }

  public showCars() {
    return this.apollo.watchQuery<any>({
      query: FindCarsDocument,

    }).valueChanges.pipe(map((result) => {
      return result.data.findAll;
    }));
  }

  public deleteCar(id: string) {
    return this.apollo.mutate({
      mutation: DeleteOneDocument,

      variables: { id: id },
      refetchQueries: [
        {
          query: FindCarsDocument
        }
      ]
    })
  }

  public createCar(input: Car) {
    return this.apollo.mutate({
      mutation: AddInputDocument,
      variables: {
        name: input.name,
        cost: input.cost,
        price: input.price,
      },

      refetchQueries: [{
        query: FindCarsDocument
      }]
    })
  }

  public updateCar(input: Car) {
    return this.apollo.mutate({
      mutation: UpdatecarDocument,
      variables: {
        id: input._id,
        updatecar: {
          id: input._id,
          name: input.name,
          cost: input.cost,
          price: input.price,
        }

      },

      refetchQueries: [{
        query: FindCarsDocument
      }]
    })
  }

  public getProduct(id: string) {
    return this.apollo
      .watchQuery<any>({
        query: FindOneDocument,
        variables: { id: id },
      })
      .valueChanges.pipe(map((result) => result.data.product));
  }

}
