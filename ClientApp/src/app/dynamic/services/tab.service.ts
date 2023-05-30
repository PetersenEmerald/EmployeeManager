import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TabHttpService } from './tab-http.service';
import { DataModel, TabModel } from '../models/tab.model';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  viewData$: BehaviorSubject<TabModel[]> = new BehaviorSubject([]);

  constructor(private tabHttpService: TabHttpService) { }

  saveData(newData: TabModel): void {
    const saveData: DataModel = {
      tabID: newData.tabID,
      values: JSON.stringify(newData.data)
    }
    this.tabHttpService.saveData(saveData).subscribe(result => {
      this.viewData$.next(result);
    }, error => console.error(error));
  }

  getViewData(): void {
    this.tabHttpService.getViewData().subscribe((result) => {
      this.viewData$.next(result);
    })
  }
}
