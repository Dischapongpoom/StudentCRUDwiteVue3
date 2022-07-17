<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h1>Create Student</h1>
            <form @submit.prevent="handleSubnitForm">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" v-model="student.name" required />
                </div>
                <div class="form-group">
                    <label for="name">Email</label>
                    <input type="email" class="form-control" v-model="student.email" required />
                </div>
                <div class="form-group">
                    <label for="name">Phone</label>
                    <input type="text" class="form-control" v-model="student.phone" required />
                </div>
                <div class="form-group d-grid mt-2">
                    <button class="btn btn-success">Create</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            student: {
                name: "",
                email: "",
                phone: "",
            },
        };
    },
    methods: {
        handleSubnitForm() {
            console.log("55555555555555");
            let apiURL = "http://localhost:4000/api/create-student";
            axios
                .post(apiURL, this.student)
                .then(() => {
                    this.$router.push("/view");
                    this.student = {
                        name: "",
                        email: "",
                        phone: "",
                    };
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>

<style>
</style>