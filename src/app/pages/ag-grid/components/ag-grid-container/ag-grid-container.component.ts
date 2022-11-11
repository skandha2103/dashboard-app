import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-ag-grid-container',
  templateUrl: './ag-grid-container.component.html',
  styleUrls: ['./ag-grid-container.component.scss']
})
export class AgGridContainerComponent implements OnInit {

  public rowData$!: Observable<any[]>;

  colDefs: ColDef[] = [
    { field: 'make'},
    { field: 'model'},
    { field: 'price' }
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.rowData$ = this.http
      .get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
  }

  onCellClicked(event: CellClickedEvent){
    console.log(event);
  }

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular

  clearSelection(){
    this.agGrid.api.deselectAll();
  }

}
