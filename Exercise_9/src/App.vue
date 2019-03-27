<template>
    <div class="container">
        <form>
            <div class="row" v-if="!submitted">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
<app-fullname v-model="fullName"></app-fullname>
  <div class="form-group">
     <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
    v-model="email">
  </div>
 <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
    v-model="password">
 </div>
 <div>
   <p>Store Data?</p>
   <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Yes"
  v-model="dataStore">
  <label class="form-check-label" for="inlineRadio1">Yes</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="No"
  v-model="dataStore">
  <label class="form-check-label" for="inlineRadio2">No</label>
</div>
 </div>


                  <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    <div class="row">
                                  <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                                      <button class="btn btn-primary"
                                              @click.prevent="submitted = true">Submit!
                                      </button>
                                  </div>
                            </div>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ email }} </p>
                        <p>Password:{{ password }} </p>
                        <p>Store in Database?: {{ dataStore }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Fullname from './Fullname.vue';

    export default {
      data () {
        return {
            fullName:'Anna Maljar',
            email:'',
            password:'',
            dataStore: 'Yes',
            submitted: false
        }
      },


      components:{
        appFullname: Fullname,
      }
    }
</script>

<style>
</style>
