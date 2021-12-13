import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl ,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Questions } from 'src/app/models/questions';
import { DOCUMENT } from '@angular/common'
import { event } from 'jquery';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public applicantData!: Array<any>
  question = 1;
  submitted: any = false;
  ongoing_loan_payment!: string;

  ongoingLoanPayment(event:any){
    this.ongoing_loan_payment = event.target.value;

   }



  multistep = new FormGroup({
    fullName: new FormGroup({
        first_name: new FormControl('',[Validators.required, Validators.minLength(3)]),
        last_name: new FormControl('', [Validators.required, Validators.minLength(3)])
    }),
    idNumber: new FormGroup({
     id_number: new FormControl('',[Validators.required, Validators.minLength(8), Validators.pattern(/^-?(0|[1-9]\d*)?$/)])

    }),
    idUpload: new FormGroup({
      id_upload: new FormControl('',Validators.required)
    }),
    phoneNumber: new FormGroup({
      phone_number: new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
    }),
    emailAddress: new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email])
    }),
    maritalStatus: new FormGroup({
      marital_status: new FormControl('',Validators.required)
    }),
    workPlace: new FormGroup({
      work_place: new FormControl('',Validators.required)
    }),
    jobTitle: new FormGroup({
      job_title: new FormControl('',Validators.required)
    }),
    monthlyNetIncome: new FormGroup({
      monthly_income: new FormControl('',Validators.required)
    }),
    incomeProof: new FormGroup({
      income_proof: new FormControl('',Validators.required)
    }),
    ongoingLoan: new FormGroup({
      ongoing_loan: new FormControl('',Validators.required)
    }),
    monthlyLoanAmount: new FormGroup({
      monthly_loan_amount: new FormControl('',Validators.required)
    }),
    occupancyStatus: new FormGroup({
      occupancy_status: new FormControl('',Validators.required)
    }),
    typeOfPurchase: new FormGroup({
      purchase_type: new FormControl('',Validators.required)
    }),

    bankAccount: new FormGroup({
      account_number: new FormControl('',[Validators.required, Validators.minLength(7), Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
    }),


  })


// get fullName() {
//   return this.multistep.controls['fullName'];
// }

get fullName(){
  return (this.multistep.controls['fullName'] as FormGroup).controls;

}
get idNumber(){
  return (this.multistep.controls['idNumber'] as FormGroup).controls;

}
get idUpload(){
  return (this.multistep.controls['idUpload'] as FormGroup).controls;

}
get phoneNumber(){
  return (this.multistep.controls['phoneNumber'] as FormGroup).controls;

}
get emailAddress(){
  return (this.multistep.controls['emailAddress'] as FormGroup).controls;

}
get maritalStatus(){
  return (this.multistep.controls['maritalStatus'] as FormGroup).controls;

}
get workPlace(){
  return (this.multistep.controls['workPlace'] as FormGroup).controls;

}
get jobTitle(){
  return (this.multistep.controls['jobTitle'] as FormGroup).controls;

}
get monthlyNetIncome(){
  return (this.multistep.controls['monthlyNetIncome'] as FormGroup).controls;

}

get incomeProof(){
  return (this.multistep.controls['incomeProof'] as FormGroup).controls;

}

get ongoingLoan(){
  return (this.multistep.controls['ongoingLoan'] as FormGroup).controls;

}

get monthlyLoanAmount(){
  return (this.multistep.controls['monthlyLoanAmount'] as FormGroup).controls;

}

get occupancyStatus(){
  return (this.multistep.controls['occupancyStatus'] as FormGroup).controls;

}

get typeOfPurchase(){
  return (this.multistep.controls['typeOfPurchase'] as FormGroup).controls;

}

get bankAccount(){
  return (this.multistep.controls['bankAccount'] as FormGroup).controls;

}







  constructor(private formBuilder: FormBuilder) {
   }

  ngOnInit(): void {

  }



  submit() {

    if(this.multistep.controls['fullName'].invalid && this.question == 1) {
      this.submitted = true;
      return;
    }
    else {
      this.submitted = false;

    }
    if(this.multistep.controls['idNumber'].invalid && this.question == 2) {
      this.submitted = true;
      return;
    }
    else {
      this.submitted = false;
    }

    if(this.multistep.controls['idUpload'].invalid && this.question == 3) {
      this.submitted = true;
      return;
    }
    else {
      this.submitted = false;
    }

    if(this.multistep.controls['phoneNumber'].invalid && this.question == 4) {
      this.submitted = true;
      return;
    }
    else {
      this.submitted = false;

    }
    if(this.multistep.controls['emailAddress'].invalid && this.question == 5) {
      this.submitted = true;
      return;
    }
    else {
      this.submitted = false;
    }
    if(this.multistep.controls['maritalStatus'].invalid && this.question == 6) {
      this.submitted = true;
      return;
    }
    if(this.multistep.controls['workPlace'].invalid && this.question == 7) {
      this.submitted = true;
      return;
    }
    else {
      this.submitted = false;
    }
    if(this.multistep.controls['jobTitle'].invalid && this.question == 8) {
      this.submitted = true;
      return;
    }
    else {
      this.submitted = false;
    }
    if(this.multistep.controls['monthlyNetIncome'].invalid && this.question == 9) {
      this.submitted = true;
      return;
    }
    else {
      this.submitted = false;
    }
    if(this.multistep.controls['incomeProof'].invalid && this.question == 10) {
      this.submitted = true;
      return;
    }
    else {
      this.submitted = false;
    }
    if(this.multistep.controls['ongoingLoan'].invalid && this.question == 11) {
      this.submitted = true;
      return;
    }
    else {
      this.submitted = false;
    }
    if(this.multistep.controls['monthlyLoanAmount'].invalid && this.question == 12) {
      this.submitted = true;
      return;
    }
    else {
      this.submitted = false;
    }
    if(this.multistep.controls['occupancyStatus'].invalid && this.question == 13) {
      this.submitted = true;
      return;
    }
    else {
      this.submitted = false;
    }
    if(this.multistep.controls['typeOfPurchase'].invalid && this.question == 14) {
      this.submitted = true;
      return;
    }
    else {
      this.submitted = false;
    }

    if(this.multistep.controls['bankAccount'].invalid && this.question == 15) {
      this.submitted = true;
      return;
    }
    else {
      this.submitted = false;
    }

    // if(this.multistep.controls['ongoingLoan'].value == "No" && this.question == 11) {
    //   this.question = this.question + 2;

    // }
    if (this.question == 11 && this.ongoing_loan_payment == 'No') {
      this.question = this.question + 2;

    }
    else{
      this.question = this.question + 1;

    }


  }

  previous() {
    if (this.question == 13 && this.ongoing_loan_payment == 'No') {
      this.question= this.question - 2

    }
    else{
          this.question= this.question - 1

    }
  }















}


