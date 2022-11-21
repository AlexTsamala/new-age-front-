<template>
    <form @submit.prevent="handleSubmit">
        <div class="container">
            <h1>Register</h1>
            <p>Please fill in this information to log in </p>
            <hr>

            <label for="email"><b>Email</b></label>
            <input v-model="email" type="text" placeholder="Enter Email" name="email" id="email" required>

            <label for="psw"><b>Password</b></label>
            <input v-model="password" type="password" placeholder="Enter Password" name="psw" id="psw" required>

            <button type="submit" class="registerbtn">Sign in</button>
        </div>
        <div class="container signin">
             <p>Don't have an account? <router-link to="/">Register</router-link>.</p>
        </div>
    </form>
</template>


<script>
export default {
        name:"SignUpForm",
        data() {
    return {
      email: "",
      password: "",
      fetchStatus:""
    };
  },
  methods: {
    handleSubmit() {
        fetch("http://localhost:4001/api/auth/sign-in", {
        method: "POST",
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) =>
          console.log(json)
        );
      this.firstName = "";
      this.lastName = "";
      this.birthday = "";
      this.email = "";
      this.password = "";
      
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

</style>