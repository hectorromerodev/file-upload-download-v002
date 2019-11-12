import { Component, EventEmitter, Output, OnInit } from "@angular/core";
import { FileSelectDirective, FileUploader } from "ng2-file-upload";
import { ProgressAnimationEnd } from "@angular/material";
import { environment } from "../environments/environment";
import { FileService } from "./file.service";
import { saveAs } from "file-saver";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [FileService]
})
export class AppComponent {
  // Icons and title
  uploadIcon = "file_upload";
  downloadIcon = "file_download";
  icon = "import_export";
  title = "File Upload and Download Service";

  uploader: FileUploader = new FileUploader({
    url: environment.API_UPLOAD
  });
  attachmentList: any = [];

  constructor(private _fileService: FileService) {
    //On this i get the response of my API_UPLOAD /file/upload and save it in an array list
    this.uploader.onCompleteItem = (
      item: any,
      response: any,
      status: any,
      headers: any
    ) => {
      this.attachmentList.push(JSON.parse(response));
    };
  }

  download(index) {
    const filename = this.attachmentList[index].uploadname;
    this._fileService.downloadFile(filename).subscribe(
      data => saveAs(data, filename),
      error => console.log(error)
    );
  }
}
