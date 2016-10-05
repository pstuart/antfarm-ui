import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { FormsModule }   from '@angular/forms';

import {MultipartItem} from "../plugins/multipart-upload/multipart-item";
import {MultipartUploader} from "../plugins/multipart-upload/multipart-uploader";

import { HookService } from './hook.service';
import { Hook } from './hook';
import { HookInterface } from './hook-interface';

@Component({
    selector: 'hook-interface',
    template: `
      <div *ngIf="hookInterface">
        <form *ngIf="active" (ngSubmit)="upload()" #interfaceForm="ngForm">
        
            <div *ngFor="let field of hookInterface.fields" class="form-group">
                <label htmlFor="{{field.id}}">{{field.name}}</label>
                
                    
                    <div [ngSwitch]="field.type">
                        <input *ngSwitchCase="'text'" type="text" class="form-control" id="{{field.id}}" 
                        placeholder="{{field.placeholder}}" name="{{field.id}}"
                        [(ngModel)]="field.value">
                        
                        <select *ngSwitchCase="'select'" id="{{field.id}}" name="{{field.id}}" class="form-control">
                          <option *ngFor="let value of field.acceptableValues">{{value}}</option>
                        </select>
                        
                        <!--<input *ngSwitchCase="'file'" NgFileSelect type="file" class="form-control" id="{{field.id}}" -->
                        <!--placeholder="{{field.placeholder}}" name="{{field.id}}"-->
                        <!--[(ngModel)]="field.value"  (onUpload)="handleUpload($event)">-->
                        
                        <!--<div class="file_upload" *ngSwitchCase="'file'" >-->
                            <!--<input type="file" name="{{field.id}}" id="{{field.id}}" class="form-control" -->
                               <!--ngFileSelect-->
                               <!--[options]="basicOptions" -->
                           <!---->
                               <!--(onUpload)="handleUpload($event)"-->
                               <!--&gt;-->
                        <div class="file_upload" *ngSwitchCase="'file'" >
                            <input type="file" name="{{field.id}}" id="{{field.id}}" class="form-control" 
                                (change)="selectFile($event)"
                               >
                               
                                <div>
                                  Response: {{ response | json }}
                                </div>
                                
                                <div>
                                  Progress: {{ progress }}%
                                </div>
                        </div>
                        
            
                        <div *ngSwitchDefault="" class="alert alert-danger" role="alert">
                            <strong>Error!</strong> Field type "{{field.type}}" is not supported.
                        </div>
                      
                    </div>
                    
                   
                    
                    
            </div>
             <button class="btn btn-primary" (click)="upload($event);">Submit</button>
            
        </form>
      </div>
    `
})

export class HookInterfaceComponent implements OnInit {

    protected endpoint = "http://insight.dev:8081/hooks/proof/create";

    private uploader:MultipartUploader = new MultipartUploader({url: "http://insight.dev:8081/hooks/proof/create"});

    multipartItem:MultipartItem = new MultipartItem(this.uploader);

    email:string;
    password:string;
    file: File;



    constructor(
        private hookService: HookService,
        private route: ActivatedRoute,
        private location: Location

    ) {
        this.multipartItem.withCredentials = false;
    }

    upload (event) {
        let model = this;
        event.preventDefault();
        console.debug("home.ts & upload() ==>");
        // if (null == this.file || null == this.email || null == this.password){
        //     console.error("home.ts & upload() form invalid.");
        //     return;
        // }
        if (this.multipartItem == null){
            this.multipartItem = new MultipartItem(this.uploader);
        }
        if (this.multipartItem.formData == null){
            this.multipartItem.formData = new FormData();
        }

        this.hookInterface.fields.forEach(function(field){
            if(field.type !== "file"){
                console.log("Adding to formdata", field.id, field.value);
                model.multipartItem.formData.append(field.id, field.value);
            }

        });

        this.multipartItem.formData.append("file",  this.file);


        console.log(this.multipartItem);

        this.multipartItem.callback = this.uploadCallback;
        this.multipartItem.upload();
    };

    uploadCallback = (data) => {
        console.debug("home.ts & uploadCallback() ==>");
        this.file = null;
        if (data){
            console.debug("home.ts & uploadCallback() upload file success.");
        }else{
            console.error("home.ts & uploadCallback() upload file false.");
        }
    };



    @Input()
    hookInterface: HookInterface;
    @Input()
    hook: Hook;

    active = true;
    submitted = false;

    // onSubmit() {
    //
    //     this.submitted = true;
    //     console.log("Submitting", this.hookInterface.fields);
    //
    //     this.hookService.makeRequest(this.hookInterface, this.hook)
    //         .then((response) => {
    //             console.log(response);
    //         });
    // }

    submit = function($event) {
        // our function body
        $event.preventDefault();
        console.log("uploading");

        // this.onSubmit();

    };



    ngOnInit() {

    }


    selectFile($event): void {
        var inputValue = $event.target;
        if( null == inputValue || null == inputValue.files[0]){
            console.debug("Input file error.");
            return;
        }else {
            this.file = inputValue.files[0];
            console.debug("Input File name: " + this.file.name + " type:" + this.file.size + " size:" + this.file.size);
        }
    }

}
