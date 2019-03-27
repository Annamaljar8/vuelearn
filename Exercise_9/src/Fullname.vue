<template>
  <div>
     <div class="form-row">
      <div class="form-group">
        <label for="fullname">Fullname</label>
      </div>
      <div class="form-group col-md-6" style="padding-left: 0;">
        <input type="text" class="form-control" placeholder="Firstname"
      :value="firstName" @input="nameChanged(true, $event)">
      </div>
      <div class="form-group col-md-6" style="padding-right: 0;">
        <input type="text" class="form-control" placeholder="Lastname"
        :value="lastName" @input="nameChanged(false, $event)">
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      props:['value'],
      methods:{
        nameChanged(isFirst, event){
          let name='';
          if(isFirst){
            name=event.target.value + ' ' + this.lastName;
          } else {
            name=this.firstName + ' ' + event.target.value;
          }
          this.value=name;
          this.$emit('input', this.value);
        }
      },
      computed:{
        firstName(){
          return this.value.split(" ")[0];
        },
        lastName(){
          return this.value.split(" ")[1];
        },
      }

    }
</script>

<style scoped>

</style>
