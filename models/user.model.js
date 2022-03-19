module.exports = (mongoose) =>{
    const User = mongoose.model(
        "usuarios",
        mongoose.Schema(
            {
                _id: String,
                createdDate: Date,
                email: String,
                firstName: String,
                lastName: String,
                password: String,
                role: String
            }))
            return User;
}