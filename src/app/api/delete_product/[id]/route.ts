import Product from "@/libs/models/Product";
import { ConnectMongoDB } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, URLParams: any) {
  try {
    const id = URLParams.params.id;

    await ConnectMongoDB();

    await Product.findByIdAndDelete(id);

    return NextResponse.json({ msg: "Product Deleted Successfully" });
  } catch (error) {
    return NextResponse.json(
      {
        error,
        msg: "Something Went Wrong",
      },
      { status: 400 }
    );
  }
}
