import { Component } from '@angular/core';

@Component({
  selector: 'app-order-medicine',
  templateUrl: './order-medicine.component.html',
  styleUrls: ['./order-medicine.component.css']
})
export class OrderMedicineComponent {
  uploadTab = document.getElementById('upload-tab');
  callTab = document.getElementById('call-tab');
  uploadForm = document.getElementById('upload-form');
  callForm = document.getElementById('call-form');

  uploadTabFunc() {
    this.uploadForm!.classList.remove('hidden');
    this.callForm!.classList.add('hidden');
    this.uploadTab!.classList.add('border-blue-500');
    this.callTab!.classList.remove('border-blue-500');
  };

  callTabFunc()  {
    this.callForm!.classList.remove('hidden');
    this.uploadForm!.classList.add('hidden');
    this.callTab!.classList.add('border-blue-500');
    this.uploadTab!.classList.remove('border-blue-500');
  };
}
