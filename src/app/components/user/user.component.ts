import { Component, OnInit } from '@angular/core'
import {User} from '../../models/User'

@Component({
    selector: 'app-user',
    // template:'<h2>Babita Bisht</h2>'
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    styles: [
        `h2{
            color:blue
        }`
    ]
})

export class UserComponent implements OnInit {

    user: User

    constructor() {

      

    }
    ngOnInit(): void {
        this.user = {
            firstName: "babita",
            lastName: "bisht",
            age: 22,
            address: {
                city: "faridabad",
                state: "haryana"
            }
        }
    }



}


