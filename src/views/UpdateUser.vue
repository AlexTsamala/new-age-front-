<template>
    <form @submit.prevent="handleSubmit">
        <div class="container">
            <h1>Update profile</h1>
            <p>Please fill in this information to update profile </p>
            <hr>

            <label for="firstName"><b>FirstName</b></label>
      <input
        v-model="firstName"
        type="text"
        placeholder="Enter First Name"
        name="firstName"
        id="firstName"
        required
      />

      <label for="LastName"><b>LastName</b></label>
      <input
        v-model="lastName"
        type="text"
        placeholder="Enter Last Name "
        name="LastName"
        id="lastName"
        required
      />

            <button type="submit" class="registerbtn">Update</button>
        </div>
        <span v-if="fetchStatus" class="error-status">Server problem,double check information or try again</span>
        <div class="container signin">
             <p>Want to go back to profile page? <router-link to="/profile">Click here</router-link>.</p>
        </div>
    </form>
</template>


<script>
export default {
        name:"UpdateUser",
        data() {
            return {
            firstName: "",
            lastName: "",
            fetchStatus:false
            };
        },
  methods: {
    handleSubmit() {
        fetch("http://localhost:4001/api/auth/users/:userId"+id, {
        method: "PUT",
        body: JSON.stringify({
            firstName: this.firstName,
            lastName: this.lastName,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
      this.firstName = "";
      this.lastName = "";
      
    },
  },
}

</script>

<style scoped>
* {box-sizing: border-box}

/* Add padding to containers */
.container {
  padding: 16px;
}

/* Full-width input fields */
input[type=text], input[type=password] {
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

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
}
.error-status{
    display: flex;
    margin-bottom: 20px;
    color: red;
}
</style>