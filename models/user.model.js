module.exports = (mongoose) =>{
    const User = mongoose.model(
        "usuarios",
        mongoose.Schema(
            {
                createdDate: Date,
                email: {
                    type: String,
                    match: /.+\@.+\..+/,
                    unique:true
                },
                firstName: String,
                lastName: String,
                password: String,
                role: String
            }))
            return User;
}