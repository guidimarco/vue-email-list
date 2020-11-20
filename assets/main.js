var app = new Vue({ // VUE INSTANCE
    el: "#root",
    data: {
        // VAR

        // OBJ

        // ARRAY
    },
    computed: {

    },
    mounted() {
        axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then( (response) => {
                console.log(response);
                console.log(response.data);
                console.log(response.data.response);
            })
        ; // END AXIOS
    },
});
