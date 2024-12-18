import Product from "@/libs/models/Product";
import { ConnectMongoDB } from "@/libs/MongoConnect";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await ConnectMongoDB();

        const data = await Product.find();

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            {
            error,
            msg: "Something went wrong",
        }, 
        {status: 400});
    }
}