<template>
    <form @submit.prevent="handleSubmit">
         <div class="container">
             <h1>Register</h1>
             <p>Please fill in this form to create an account.</p>
             <hr>
 
             <label for="firstName"><b>FirstName</b></label>
             <input v-model="firstName" type="text" placeholder="Enter First Name" name="firstName" id="firstName" required>
 
             <label for="LastName"><b>LastName</b></label>
             <input v-model="lastName" type="text" placeholder="Enter Last Name " name="LastName" id="lastName" required>
 
             <label for="birthday"><b>Birthday</b></label>
             <input v-model="birthday" type="date" id="birthday" name="birthday" value="2018-07-22" min="1920-01-01" max="2018-12-31" required>
 
             <label for="email"><b>Email</b></label>
             <input v-model="email" type="text" placeholder="example@newage.io" name="email" id="email" required>
 
             <label for="psw"><b>Password</b></label>
             <input v-model="password" type="password" placeholder="Enter Password" name="psw" id="psw" required>
 
             <hr>
 
             <p>Already have an account? <router-link to="/SignUp">Sign in</router-link>.</p>
             <button type="submit" class="registerbtn">Register</button>
         </div>
     </form>
 </template>
 
 
<script>
    let submitStatus; 
    export default {
    name:"RegisterForm",
    data() {
        return {
            firstName:'',
            lastName:'',
            birthday:'',
            email:'',
            password:''
        }
    },
    methods:{
        handleSubmit(){
            fetch('http://localhost:4001/api/auth/sign-up', {
            method: 'POST',
            body: JSON.stringify({
                firstName: this.firstName,
                lastName: this.lastName,
                birthday: this.birthday,
                email:this.email,
                password:this.password
            }),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
        this.firstName = '';
        this.lastName = '';
        this.birthday = '';
        this.email = '';
        this.password = '';
        }
    }
}
 
 </script>
 
 <style scoped>
     * {box-sizing: border-box}
 
 /* Add padding to containers */
 .container {
   padding: 16px;
   width:600px;
 }
 
 /* Full-width input fields */
 input[type=text], input[type=password],input[type=date] {
   width: 100%;
   padding: 15px;
   margin: 5px 0 22px 0;
   display: inline-block;
   border: none;
   background: #f1f1f1;
 }
 
 input[type=text]:focus, input[type=password]:focus {
   background-color: #ddd;
   outline: none;
 }
 
 /* Overwrite default styles of hr */
 hr {
   border: 1px solid #f1f1f1;
   margin-bottom: 25px;
 }
 
 /* Set a style for the submit/register button */
 .registerbtn {
   background-color: #04AA6D;
   color: white;
   padding: 16px 20px;
   margin: 8px 0;
   border: none;
   cursor: pointer;
   width: 100%;
   opacity: 0.9;
 }
 
 .registerbtn:hover {
   opacity:1;
 }
 
 /* Add a blue text color to links */
 a {
   color: dodgerblue;
 }
 
 </style>