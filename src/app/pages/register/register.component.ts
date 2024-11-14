import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { get, getDatabase, ref, set } from 'firebase/database';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  generateRandomId(length: number = 10): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  driverForm!: FormGroup;
  doctorForm!: FormGroup;
  patientForm!: FormGroup;
  private db: any;

  constructor(private formBuilder: FormBuilder,public router: Router) {
    const firebaseConfig = {
      apiKey: "AIzaSyB9zbpJ6J8Q5h9I4_YCM15bVU2oa22KUuk",
      authDomain: "hackathon40-e51b6.firebaseapp.com",
      databaseURL: "https://hackathon40-e51b6-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "hackathon40-e51b6",
      storageBucket: "hackathon40-e51b6.appspot.com",
      messagingSenderId: "723966378859",
      appId: "1:723966378859:web:7754889868fde2160f422e",
      measurementId: "G-RV5VBECN2Q"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  this.db = getDatabase(app);
  }

  ngOnInit() {
    
  const randomId = this.generateRandomId();
    this.driverForm = this.formBuilder.group({
      userid: [randomId, Validators.required],
      fullName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      hospitalName: ['', Validators.required],
      userType: ['Driver']
    });
    this.patientForm = this.formBuilder.group({
      userid: [randomId, Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      userType: ['Patient']
    });
    this.doctorForm = this.formBuilder.group({
      userid: [randomId, Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      hospitalName: ['', Validators.required],
      placeType: ['', Validators.required],
      specialization: ['', Validators.required],
      userType: ['Doctor']
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    // Handle file upload logic here
    

  }
  
  showCustomPlaceType: boolean = false;
  showCustomSpecialization: boolean = false;

  onSubmit() {
    if (this.driverForm.valid) {
      
      console.log(this.driverForm.value);
      get(ref(this.db, `drivers/${this.driverForm.value['phoneNumber']}`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          // Data exists, you can use it here
          alert("Phone Number Already Exists")
          return 
          // Do something with driverData
        } else {
          console.log("No data available");
          set(ref(this.db, 'drivers/' + this.driverForm.value['phoneNumber']), {
            values: this.driverForm.value,
        });
        alert("User Created Successfully")
        this.onRegistrationSuccess(this.driverForm.value['fullName'],this.driverForm.value['phoneNumber'],'driver')
        }
      })
      
    }else if (this.patientForm.valid) {
      console.log(this.patientForm.value);
    get(ref(this.db, `patients/${this.patientForm.value['fullName']}`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        // Data exists, you can use it here
        alert("Email Already Exists")
        return 
        // Do something with driverData
      } else {
        console.log("No data available");
        set(ref(this.db, 'patients/' + this.patientForm.value['fullName']), {
          values: this.driverForm.value,
      });
      alert("User Created Successfully")
      this.onRegistrationSuccess(this.patientForm.value['fullName'],this.patientForm.value['email'],'patient')

      }
    })
    }else if (this.doctorForm.valid) {
      console.log(this.doctorForm.value);
      // Handle form submission logic here
      
    get(ref(this.db, `doctors/${this.doctorForm.value['fullName']}`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        // Data exists, you can use it here
        alert("Email Already Exists")
        return 
        // Do something with driverData
      } else {
        console.log("No data available");
        set(ref(this.db, 'doctors/' + this.doctorForm.value['fullName']), {
          values: this.doctorForm.value,
      });
      alert("User Created Successfully")
      this.onRegistrationSuccess(this.doctorForm.value['fullName'],this.doctorForm.value['email'],'doctor')
      }
    })
    }
    console.log(this.doctorForm.valid)
    console.log(this.doctorForm.value)
  }

  onPlaceTypeChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.showCustomPlaceType = selectedValue === 'other';
    if (this.showCustomPlaceType) {
      this.doctorForm.get('customPlaceType')?.setValidators(Validators.required);
    } else {
      this.doctorForm.get('customPlaceType')?.clearValidators();
    }
    this.doctorForm.get('customPlaceType')?.updateValueAndValidity();
  }

  onSpecializationChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.showCustomSpecialization = selectedValue === 'other';
    if (this.showCustomSpecialization) {
      this.doctorForm.get('customSpecialization')?.setValidators(Validators.required);
    } else {
      this.doctorForm.get('customSpecialization')?.clearValidators();
    }
    this.doctorForm.get('customSpecialization')?.updateValueAndValidity();
  }

 showTab(tabName:any) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.add('hidden'));
    document.getElementById(`${tabName}-form`)!.classList.remove('hidden');
}


onRegistrationSuccess(fullname: any, auth:any, userType:any){
  localStorage.setItem("Token",JSON.stringify(`fullname: ${fullname}, auth: ${auth}, userType: ${userType}`))
  localStorage.setItem("fullName",JSON.stringify(fullname))
  localStorage.setItem("auth",JSON.stringify(auth))
  localStorage.setItem("userType",JSON.stringify(userType))
  this.router.navigate(['account'])
}
}
