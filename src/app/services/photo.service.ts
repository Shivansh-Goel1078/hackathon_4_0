import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private images = [
    {
      url: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      alt: 'Modern hospital building',
      device: 'both'
    },
    {
      url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      alt: 'Hospital corridor',
      device: 'both'
    },
    {
      url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      alt: 'Doctor examining patient',
      device: 'laptop'
    },
    {
      url: 'https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      alt: 'Medical equipment',
      device: 'mobile'
    },
    {
      url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      alt: 'Hospital reception',
      device: 'both'
    }
  ];

  constructor() { }

  getImages(): Promise<any[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.images);
      }, 500); // Simulating a network delay
    });
  }

  getImagesByDevice(device: 'mobile' | 'laptop' | 'both'): Promise<any[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredImages = this.images.filter(img => img.device === device || img.device === 'both');
        resolve(filteredImages);
      }, 500);
    });
  }
}