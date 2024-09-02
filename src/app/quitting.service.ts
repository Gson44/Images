import { Injectable } from '@angular/core';
import { QuittingContent } from './quittingcontent';

@Injectable({
  providedIn: 'root'
})
export class QuittingService {


 url = "http://localhost:3000/quitting"
  constructor() {
      
   }

  async getAllQuittingContents(): Promise<QuittingContent[]>{
    try {
      const response = await fetch(this.url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Failed to fetch quitting contents:", error);
      return [];  // Return an empty array in case of an error
    }
  }

  async getQuittingContentById(id: number): Promise<QuittingContent[]>{
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

}
