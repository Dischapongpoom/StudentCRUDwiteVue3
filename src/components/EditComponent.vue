<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h1>Edit Student</h1>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" v-model="student.name" required>
                </div>
                <div class="form-group">
                    <label for="name">Email</label>
                    <input type="email" class="form-control" v-model="student.email" required>
                </div>
                <div class="form-group">
                    <label for="name">Phone</label>
                    <input type="text" class="form-control" v-model="student.phone" required>
                </div>
                <div class="form-group d-grid mt-2">
                    <button class="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                student:{}
            }
        },
        created() {
            let apiURL = `http://localhost:4000/api/${this.$route.params.id}`;
            axios.get(apiURL).then((res) =>{
                this.student = res.data;
            })
        },
        methods: {
            handleUpdateForm(){
                let apiURL = `http://localhost:4000/api/${this.$route.params.id}`;

                axios.put(apiURL, this.student).then((res) =>{
                    console.log(res);
                    this.$router.push('/view')
                    
                }).catch(error =>{
                    console.log(error);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>