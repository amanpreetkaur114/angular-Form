import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { IMultiSelectOption } from 'ngx-bootstrap-multiselect';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularForm';
  form: FormGroup = this.fb.group({});
  formData: any = [];
  gridOptions = {
    pagination: true,
    paginationAutoPageSize: true
  };
  @ViewChild('agGrid') agGrid:any;

  myOptions: IMultiSelectOption[] = [{id:'Communication Technology', name: 'Communication Technology' }, {id:'Construction  Technology', name: 'Construction  Technology' },
   {id:'Medical Technology', name: 'Medical Technology' }, {id:'product Technology', name: 'product Technology' },
    { id: 'Architecture Technology',name: 'Architecture Technology' }, { id:'Educational Technology',name: 'Educational Technology' }, {id:'Information Technology', name: 'Information Technology' },
      {id:'Business Technology', name: 'Business Technology' }, {id: 'Space Technology', name: 'Space Technology' }, {id:'Artificial Intelligence ', name: 'Artificial Intelligence ' },];

  submitted: boolean = false;

  columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Dob', field: 'dob' },
    { headerName: 'Gender', field: 'gender' },
    { headerName: 'Education', field: 'education' },
    { headerName: 'Department', field: 'department' },
    { headerName: 'Email', field: 'email' },
    { headerName: 'Phone Number', field: 'mobile' },
    { headerName: 'Address', field: 'address' },
    { headerName: 'Technologies', field: 'technologies' }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      dob: [null, Validators.required],
      gender: [null, Validators.required],
      education: [null, Validators.required],
      department: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      mobile: [null, [Validators.required, Validators.pattern('[- +()0-9]+'), Validators.minLength(10), Validators.maxLength(12)]],
      address: [null, Validators.required],
      technologies: [null, Validators.required],
    })
  }



  get f(): any {
    return this.form.controls;
  }
  rowData: any = [];

  onSubmit() {
    this.submitted = true;

    if (this.form.valid) {
      this.formData.push(this.form.value)
      this.rowData = this.formData;
      this.submitted = false;
      this.form.reset();
      this.agGrid.api.setRowData(this.rowData)()
    
    }
    return;
  }
  onSearchChange(searchWord: string) {
    this.agGrid.gridOptions.api.setQuickFilter(searchWord);
  }
  onDelete(){
      const selectedData = this.agGrid.api.getSelectedRows();
let index=this.formData.findIndex((res:any)=>res==selectedData);
this.agGrid.api.updateRowData({ remove: selectedData });

this.formData.splice(index,1);

 
  }

  reset() {
    this.form.reset();
  }
}
