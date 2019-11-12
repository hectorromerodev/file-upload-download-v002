import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import "rxjs/Rx";
import { Observable } from "rxjs/Observable";
import { environment } from "../environments/environment";

@Injectable()
export class FileService {
  constructor(private _http: HttpClient) {}
  //Function
  downloadFile(file: string) {
    const body = { filename: file };

    // provider
    return this._http.post(environment.API_DOWNLOAD, body, {
      responseType: "blob",
      headers: new HttpHeaders().append("Content-Type", "application/json")
    });
  }
}
