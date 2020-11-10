import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import { ActionTypes } from './actions';
import { FruitsService } from '../fruits.service';
import {Action} from '@ngrx/store';

@Injectable()
export class ShopEffects {
  constructor(
    private actions$: Actions,
    private fruitsService: FruitsService
  ) {}

  @Effect()
  loadFruits$ = this.actions$.pipe(
    ofType(ActionTypes.LoadItems),
    mergeMap(() =>
      this.fruitsService.getAll().pipe(
        map(fruits => {
          return { type: ActionTypes.LoadSuccess, payload: fruits };
        }),
        catchError(() => EMPTY)
      )
    )
  );

// @Effect()
//   setFruits$ = this.actions$.pipe(ofType(ActionTypes.Add),console.log())
}

