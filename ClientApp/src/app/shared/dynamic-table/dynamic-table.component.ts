import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SyncService } from '../sync.service';
import { TableBuilderModel, PropertyTypesModel } from '../models/shared.model';
import { _tableBuilderData, _schedulerPropertyTypesData, _propertiesTasksData, _schedulerData} from '../test-data/shared-test-data';

/*
* Dynamic Table Component
 * Input() columns: Provide columnModel to define table header display.
 * Input() dataSource: Provide any data object to populate table.
 * Input() isStickyHeader: Determines if table header is sticky.
 * Note: nameID must match the dataSource object's properties.
*/
@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {
  @Input() tableBuilder: TableBuilderModel = _tableBuilderData;
  @Input() columns: any;
  @Input() dataSource: any;
  @Input() isStickyHeader: boolean = true;

  propertyData = _propertiesTasksData;
  schedulerData = _schedulerData;
  propertyTypeData: PropertyTypesModel[] = _schedulerPropertyTypesData;
  displayedColumns: string[] = [];
  //selectedColor: TableCellModel;

  constructor(private changeDetectionRef: ChangeDetectorRef,
    private syncService: SyncService ) { }

  ngOnInit() {
    // this.syncService.selectedScheduleColor$.subscribe((color) => {
    //   this.selectedColor = color;
    // })
    console.log(this.columns);
    console.log(this.dataSource);
    console.log(this.tableBuilder);
    console.log(this.propertyTypeData);
    console.log(this.schedulerData);

    // if(this.propertyTypeData && this.propertyTypeData.length > 0){
      this.displayedColumns = this.columns
        .map((column) => column.propertyName);
    //}
  }

  getValue(thing: any) {
    return this.schedulerData.filter(data => data.propertyID === thing)[0];
  }
  changeSelectedColor(row: any, index: any, $event: any): void {
    console.log({row});
    //  if (this.dataSource._data._value && $event.shiftKey) {
    //     let dataSourceValue = this.dataSource._data._value;
    //    // dataSourceValue[index][column.nameID] = this.selectedColor;
        
    //     this.dataSource._data._value = dataSourceValue;
    //     this.changeDetectionRef.detectChanges();  
    // }      
    // if (this.dataSource._data._value && $event.shiftKey && column.nameID != 'startingTimePeriod') {
    //     let dataSourceValue = this.dataSource._data._value;
    //     dataSourceValue[index][column.nameID] = this.selectedColor;
        
    //     this.dataSource._data._value = dataSourceValue;
    //     this.changeDetectionRef.detectChanges();  
    // }      
  }
}
