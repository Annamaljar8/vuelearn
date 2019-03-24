<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

 <div class="form-row">
  <div class="form-group">
    <label for="fullname">Fullname</label>
  </div>
  <div class="form-group col-md-6" style="padding-left: 0;">
    <input type="text" class="form-control" placeholder="Firstname"
    v-model="fullName.firstname">
  </div>
  <div class="form-group col-md-6" style="padding-right: 0;">
    <input type="text" class="form-control" placeholder="Lastname"
    v-model="fullName.lastname">
  </div>
</div>
  <div class="form-group">
     <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
    v-model="userData.email">
  </div>
 <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
    v-model="userData.password">
 </div>
 <div>
   <p>Store Data?</p><app-switch v-model="dataSwitch"></app-switch>
 </div>


                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName.firstname + ' ' + fullName.lastname }}</p>
                        <p>Mail: {{ userData.email }} </p>
                        <p>Password:{{ userData.password }} </p>
                        <p>Store in Database?: {{ dataSwitch }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Switch from './Switch.vue';

    export default {
      data () {
        return {
          fullName:{
            firstname:'',
            lastname:''
          },
          userData:{
            email:'',
            password:''
          },
          dataSwitch: true
        }
      },
      components:{
        appSwitch: Switch,
      }
    }
</script>

<style>
</style>
