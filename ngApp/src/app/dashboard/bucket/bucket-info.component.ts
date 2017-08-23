import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'bt-info',
    moduleId: module.id,
    templateUrl: 'bucket-info.component.html'
})
export class BucketInfoComponent implements OnInit{
    title: string = "Bucket info";
    bucket_title: string = "Bucket title";
    private _id: number;

    // TODO:  get info from api
    bucket_info: boolean = true;

    constructor(private _route: ActivatedRoute, private _router: Router){
        this._id = this._route.snapshot.params['id'];
        if (typeof this._id == undefined || this._id < 1){
            this._router.navigate(['/dashboard']);
        }
    }

    ngOnInit():void{
        // initialise datepicer
    }
}
