import mongoose from "mongoose"

export const ConnectMongoDB = async () => {
    if(mongoose.connections[0].readyState === 1) {
        return mongoose.connection.asPromise()
    }

    return await mongoose.connect(process.env.MONGO_URI!);
}