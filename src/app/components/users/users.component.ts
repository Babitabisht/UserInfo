import { Component, OnInit,ViewChild } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  @ViewChild('userForm') form:any;
  user:User={
    firstName: '',
    lastName: '',
    age: 0,
    address: {
        city: '',
        state: ''
    },
  
    active:false,
    balance:0,
    registered:''

  }
  showExtended: boolean = false;
  loaded: boolean = false;
  setEnable: boolean = true;
  buttonClasses = {}
  setStyles={}
  hide:boolean=true;
  showUserForm:boolean=false;
  constructor() { }

  ngOnInit(): void {
    console.log('-hey!');
    setTimeout(() => {
      this.users = [
        {
          firstName: "John",
          lastName: "doe",
          age: 72,
          address: {
            city: "faridabad",
            state: "haryana"
          },
          image: 'http://lorempixel.com/600/600/people/3',
          active: true,
          balance:100,
          registered: new Date()
        }, {
          firstName: "hritik",
          lastName: "bisht",
          age: 22,
          address: {
            city: "faridabad",
            state: "haryana 2"
          },
          image: 'http://lorempixel.com/600/600/people/2',
          balance:300,
          registered: new Date()

        }, {
          firstName: "mansi",
          lastName: "Rawat",
          age: 22,
          address: {
            city: "faridabad",
            state: "haryana 3"
          },
          image: 'http://lorempixel.com/600/600/people/1',
          balance:200,
          registered: new Date()

        }
      ]
      this.loaded = true;
    });

    // this.addUser({
    //   firstName: "mannu",
    //   lastName: "Rawat",
    //   age: 22,
    // })
    // this.addClass()
  }



  // addUser() {
  //   this.user.registered=new Date()
  //   this.user.active=true;
  //   this.users?.unshift(this.user);
  //   this.user={
  //     firstName: '',
  //     lastName: '',
  //     age: 0,
  //     address: {
  //         city: '',
  //         state: ''
  //     },
    
  //     active:false,
  //     balance:0,
  //     registered:''
  //   }
  // }




  addClass() {
    this.buttonClasses = {
      'btn-light':false,
      'btn-success': this.setEnable,
      'big-text':this.showExtended
    }
  }

  addStyles(){
    this.setStyles={
      'padding-top': this.showExtended?'0':'40px'
    }
  }


  fireEvent(e){
    console.log('button clicked !',e.type);
    
  }


  onSubmit({value,valid}:{value:User, valid:boolean}){
    console.log('---n submit--');
    
      if (!valid){
        console.log('Form is not valid!'); 
      }else{
        console.log('value',value);
        
        value.active=true;
        value.registered= new Date();
      //  value.address.city=value.city;
      //  value.address.state= value.state;
        this.users?.unshift(value);
        this.form.reset();
      }
  }


}
