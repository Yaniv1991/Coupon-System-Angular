import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private httpClient: HttpClient) { }

  // postFile(fileToUpload: File): Observable<boolean> {
  //   const endpoint = '../assets/images/' + fileToUpload.name;
  //   const formData: FormData = new FormData();
  //   formData.append('fileKey', fileToUpload, fileToUpload.name);
  //   return this.httpClient.post(endpoint, formData).map(() => true).catch((e) => this.handleError(e));
  // }
  // handleError(e: any) {
  //   throw new Error('Method not implemented.');
  // }
}
