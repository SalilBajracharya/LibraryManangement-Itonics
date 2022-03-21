import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  studentFormGroup = new FormGroup(
    {
      userName : new FormControl(''),
      firstName : new FormControl(''),
      lastName : new FormControl(''),
      password : new FormControl(''),
      email : new FormControl(''),
      phoneNumber : new FormControl('')
    }
  )

  onSubmit(){
    localStorage.setItem('studentData', JSON.stringify(this.studentFormGroup.value));
  }

}
