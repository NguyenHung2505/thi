import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {StudenService} from "../../service/studen.service";

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  studentForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    action: new FormControl(''),
  });
  constructor(private studentService: StudenService) { }

  ngOnInit(): void {
  }
  submit() {
    const student = this.studentForm.value;
    this.studentService.save(student).subscribe(() => {
      alert('1')
    }, error =>{
      console.log(error)
    });
    console.log(student);
    this.studentForm.reset();
  }
}
