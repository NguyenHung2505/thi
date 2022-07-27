import { Component, OnInit } from '@angular/core';
import {StudenService} from "../../service/studen.service";
import {Student} from "../../module/Student";



@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];
  constructor(private studetService: StudenService) { }

  ngOnInit(): void {
    this.showAll()
  }
  showAll() {
    this.studetService.findAll().subscribe((student) => {
      this.students = student;

      console.log('house', student);
    }, error => {
      console.log(error);
    })
  }
  delete(id: any) {
    if (confirm('ban muon xoa ?')) {
      this.studetService.delete(id).subscribe(() => {
        alert("Ok");
        this.showAll()
      }, e => {
        console.log(e);
      });
    }
  }
}
