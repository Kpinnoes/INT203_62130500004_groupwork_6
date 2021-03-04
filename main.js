const constraints = {
    firstname: {
        presence: true,
        
    },
    lastname: {
        presence: true,
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 150
        }
    },
    gender: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true,
        length: {
            minimum : 10,
            message: "must be at least 10 digits"
        },        
    },
    countries: {
        presence: true
    },
    language: {
        presence: true
    }
}

const app =Vue.createApp({
    data() {
        return {
            msg: 'Hello, Vue3',
            name: 'Khorapin Gadpu',
            occupation: 'Student',
            article: 202,
            followers: 835,
            ratings: 9.9,
            image: "images/pinatsea.jpg",
            firstname: null,
            lastname: null,
            age: null,
            gender: null,
            email: null,
            phone: null,
            countries: null,
            country_lists: [{country_id: 1, country_name:'India'},
                            {country_id: 2, country_name: 'USA'},
                            {country_id: 3, country_name: 'UK'}],
            errors: null,language: null
        }
    },
    methods: {
        checkForm(){
            this.errors = validate({firstname: this.firstname,
                                    lastname: this.lastname,
                                    age: this.age,
                                    gender: this.gender,
                                    email: this.email,
                                    phone: this.phone,
                                    countries: this.countries,
                                language:this.language},
                                    constraints)
            if(!this.errors){
                alert("Registered successfully.")
            }
        }
    }
})

app.mount('#app')


