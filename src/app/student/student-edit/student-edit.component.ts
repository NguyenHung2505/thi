import { Component, OnInit } from '@angular/core';
import {Student} from "../../module/Student";
import {StudenService} from "../../service/studen.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  // @ts-ignore
  student: Student;
  id:any;
  constructor(private studentService: StudenService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private router:Router) {
    this.activatedRoute.paramMap.subscribe((paraMap:ParamMap)=>{
    // @ts-ignore
    this.id = +paraMap.get('id');
    // this.getHouse(this.id);
  })
  }
  studentForm: FormGroup = this.fb.group({

    name: new FormControl(''),
    description: new FormControl(''),
    action: new FormControl('')
  })

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramap => {
      const id = paramap.get('id');
      console.log(id);


      // @ts-ignore
      this.studentService.getById(id).subscribe(result => {
        // @ts-ignore
        this.student = result;
        console.log(result);
        // @ts-ignore
      }, error => {
        console.log(error);
      })
    })
    // @ts-ignore
    this.student = {
      name: '',
      description: '',
      action: ''
    }
  }
  editStudent() {


    // @ts-ignore
    const student: Student={

      name:this.studentForm.value.name,
      description:this.studentForm.value.description,
      action:this.studentForm.value.action,
    }
    console.log(student);
    // @ts-ignore
    // @ts-ignore
    this.studentService.edit(this.student.id,student).subscribe(()=>{
      alert("Ok");
      this.router.navigate(['/'])
      // @ts-ignore
    }, error => {
      console.log(error);
    })
  }



}
