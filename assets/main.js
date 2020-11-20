var app = new Vue({ // VUE INSTANCE
    el: "#root",
    data: {
        // VAR

        // OBJ

        // ARRAY
        userMail: [],
    },
    computed: {

    },
    mounted() {
        for (var i = 0; i < 10; i++) {
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then( (mailObj) => {
                    this.userMail.push(mailObj.data.response);
                })
            ; // END AXIOS
        }
        console.log(this.userMail);
    },
});
