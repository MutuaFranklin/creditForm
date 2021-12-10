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

  input: any;
  question = 1;
  next_clicked = false
  current_view = this.question

  step: any = 1;
  submitted: any = false;

  first_name!: string;
  last_name!: string;
  id_number!: string;
  id_upload!: File;
  phone_number!: string;
  email_address!: string;
  dob!: Date;
  marital_status!:string;
  work_place!:string;
  job_title!:string;
  monthly_net_income!: number;
  income_proof!: File;
  ongoing_loan!: string;
  monthly_loan_amount!:number;
  occupancy_status!: string;
  type_of_purchase!: string;
  bank_name!: string;
  bank_branch!: string;
  bank_account!: string;



  firstName(event:any){
    this.first_name = event.target.value;

   }

  lastName(event:any){
    this.last_name = event.target.value;

  }
  idNumber(event:any){
    this.id_number = event.target.value;

   }

   idUpload(event:any){
    this.id_upload = event.target.files[0];
   }

   phoneNumber(event:any){
    this.phone_number = event.target.value;

   }

  emailAddress(event:any){
    this.email_address = event.target.value;

   }

  dateOfBirth(event:any){
    this.dob = event.target.value;

   }
   maritalStatus(event:any){
    this.marital_status = event.target.value;

   }

   workPlace(event:any){
    this.work_place = event.target.value;

   }

   jobTitle(event:any){
    this.job_title = event.target.value;

   }
   monthlyNetIncome(event:any){
    this.monthly_net_income = event.target.value;

   }

   incomeProof(event:any){
    this.income_proof = event.target.files[0];
   }

   ongoingLoan(event:any){
    this.ongoing_loan = event.target.value;

   }

   monthlyLoanAmount(event:any){
    this.monthly_loan_amount = event.target.value;

   }

   occupancyStatus(event:any){
    this.occupancy_status = event.target.value;

   }

   purchaseType(event:any){
    this.type_of_purchase = event.target.value;

   }

   bankName(event:any){
    this.bank_name = event.target.value;

   }

   bankBranch(event:any){
    this.bank_branch = event.target.value;

   }

   bankAccount(event:any){
    this.bank_account = event.target.value;

   }



  @Output() makeApplication = new EventEmitter<Questions>();
  newApplication = new Questions (0, "", "", "","","","", new Date(), "", "", "", "",0, "","",0,"","","","","");


  submitApplication(){
    this.makeApplication.emit(this.newApplication)
  }

  constructor(private formBuilder: FormBuilder) {
   }

  ngOnInit(): void {




  }





  next(){
      if (this.question == 1){
        if (this.first_name.length > 0){
          if (this.last_name.length > 0){

          this.question= this.question + 1

          }
        else{
          this.next_clicked = true
        }

        }


      }

      if (this.question == 2){
        if (this.id_number.length > 0){
          this.question= this.question + 1

        }
      }

      if (this.question == 3){
        if (this.id_upload){
          this.question= this.question + 1

        }
      }

      if (this.question == 4){
        if (this.phone_number.length > 0){
          this.question= this.question + 1

        }
      }

      if (this.question == 5){
        if (this.email_address.length > 0){
          this.question= this.question + 1

        }
      }

      if (this.question == 6){
        if (this.dob){
          this.question= this.question + 1

        }
      }

      if (this.question == 7){
        if (this.marital_status.length > 0){
          this.question= this.question + 1

        }
      }

      if (this.question == 8){
        if (this.work_place.length > 0){
          this.question= this.question + 1

        }
      }

      if (this.question == 9){
        if (this.job_title.length > 0){
          this.question= this.question + 1

        }
      }

      if (this.question == 10){
        if (this.monthly_net_income){
          this.question= this.question + 1

        }
      }

      if (this.question == 11){
        if (this.income_proof){
          this.question= this.question + 1

        }
      }

      if (this.question == 12 && this.ongoing_loan == 'Yes') {
        if (this.ongoing_loan.length > 0){
          this.question= this.question + 1

        }
      }
      else if (this.question == 12 && this.ongoing_loan == 'No') {
        if (this.ongoing_loan.length > 0){
          this.question= this.question + 2

        }
      }
      if (this.question == 13){
        if (this.monthly_loan_amount){
          this.question= this.question + 1

        }
      }

      if (this.question == 14){
        if (this.occupancy_status.length > 0){
          this.question= this.question + 1

        }
      }

      if (this.question == 15){
        if (this.type_of_purchase.length > 0){
          this.question= this.question + 1

        }
      }

      if (this.question == 16){
        if (this.bank_name.length > 0){
          this.question= this.question + 1

        }
      }

      if (this.question == 17){
        if (this.bank_branch.length > 0){
          this.question= this.question + 1

        }
      }

      if (this.question == 18){
        if (this.bank_account.length > 0){
          this.question= this.question + 1

        }
      }














  }

  previous(){

    if (this.question == 14 && this.ongoing_loan == 'No') {
      if (this.ongoing_loan.length > 0){
        this.question= this.question - 2

      }
    }
    else{
          this.question= this.question - 1

    }
  }

  validateFormField(){

  }



}


