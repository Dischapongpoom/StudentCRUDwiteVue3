<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <h1>Show Student</h1>
            <div class="row">
                <div class="col-md-12">
                    <table class="table table-striped">
                        <thead class="table-light">
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                            <tr v-for="student in Students" :key="student.id">
                                <td class="text-center"> {{ student.name}} </td>
                                <td class="text-center"> {{ student.email}} </td>
                                <td> {{ student.phone}} </td>
                                <td> 
                                    <router-link :to="{name: 'edit', params: {id: student._id}}"  
                                    class="btn btn-success">
                                        Edit
                                    </router-link>   
                                    <button @click.prevent="deleteStudent(student._id)"
                                    class="btn btn-danger" >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            Students: []
            
        }
    },
    created() {
        let apiURL = 'http://localhost:4000/api';
        axios.get(apiURL).then(res =>{
            this.Students = res.data
        }).catch(error =>{
            console.log(error);
        })
    },
    methods:{
        deleteStudent(id){
            let apiURL = `http://localhost:4000/api/delete-student/${id}`;
            let indexOfArrayItem = this.Students.findIndex(i => i._id === id);

            if(confirm("Do you really want to delete")){
                axios.delete(apiURL).then(() =>{
                    this.Students.splice(indexOfArrayItem,1)
                }).catch(error =>{
                    console.log(error);
                })
            }
        }
    }

}
</script>

<style scoped>
th{
    text-align: center;
}
.table td {
   text-align: center;   
}
button{
    margin-left: 5px;
}
</style>