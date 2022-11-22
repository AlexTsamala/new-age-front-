<template>
    <div class="container">
        <h1>First name</h1>
        <span>Sandro</span>
        <h1>Last name</h1>
        <span>Tsamalashvili</span>
        <h1>Email</h1>
        <span>s.tsamalashvili1998@gmail.com</span>
        <h1>Birthday</h1>
        <span>1998/02/15</span> 
        <router-link class="update-button" to="/profile/:userId/edit">Update user</router-link>
        <button @click="handleDeleteModal" class="delete-button" type="button">Delete user</button>
        <router-link class="sign-out-button" to="/SignIn">Sign out</router-link>
        <div :class="handleClass" >
            <div class="buttons-div">
                <button type="button" class="delete-button-2">Do you want to delete?</button>
                <button @click="handleDeleteModal" type="button" class="quit-button">Quit</button>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:"ShowData",
    data() {
            return {
                active: false,
            };
        },
    computed:{
        handleClass(){
            return this.active ? 'central-div' : "central-div-none"
        }
    },
    methods:{
        handleDeleteModal(){
            this.active = !this.active
        }
    }
}

</script>

<style scoped>
.container{
    padding: 16px;
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #04AA6D;
    margin-top:60px;
}

h1{
    color:white;
}

span{
    color:white;
}
.update-button{
    width: 100px;
    height: 30px;
    border-radius: 10px;
    border: none;
    background-color: yellow;
    margin-top: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    text-decoration: none;
}

.delete-button{
    width: 100px;
    height: 30px;
    border-radius: 10px;
    border: none;
    background-color: red;
    margin:10px 0;
    cursor: pointer;
}

.sign-out-button{
    width: 100px;
    height: 30px;
    border-radius: 10px;
    border: none;
    background-color: purple;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    text-decoration: none;
}
.central-div{
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0px;
    left: 0px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.central-div-none{
    display: none;
}
.buttons-div{
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: gray;
    gap:15px;
}
.delete-button-2{
    background-color: red;
    border: none;
    padding: 10px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
}
.quit-button{
    background-color: green;
    border: none;
    padding: 10px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
}
</style>