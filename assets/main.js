var app = new Vue({ // VUE INSTANCE
    el: "#root",
    data: {
        // VAR
        numberOfMail: 10,

        // OBJ

        // ARRAY
        mailingList: [],
    },
    methods: {
        getMails: function() { // generate tot (number of mail) mail
            for (var i = 0; i < this.numberOfMail; i++) {
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
