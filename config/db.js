import mongoose from 'mongoose'

const connectDB=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGODB_URL)
        console.log(`Connect mongodb ${conn.connection.host}`)
    } catch (error) {
        console.log(`error in mongodb${error}`)
    }
}

export default connectDB;