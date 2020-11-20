var app = new Vue({ // VUE INSTANCE
    el: "#root",
    data: {
        // VAR

        // OBJ

        // ARRAY
        mailingList: [],
    },
    methods: {
        getMails: function() { // generate 10 mail
            for (var i = 0; i < 10; i++) {
                axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then( (mailObj) => {
                        this.mailingList.push(mailObj.data.response);
                    })
                ; // END AXIOS
            }
        },
    },
    mounted() {
        this.getMails()
    },
});
