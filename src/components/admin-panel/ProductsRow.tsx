import { IProduct } from "@/app/admin/dashboard/page";
import { setLoading } from "@/redux/features/loadingSlice";
import { setProduct } from "@/redux/features/productSlice";
import { useAppDispatch } from "@/redux/hooks";
import { makeToast } from "@/utils/helper";
import axios from "axios";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";

interface PropsType {
  srNo: number;
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
  setUpdateTable: Dispatch<SetStateAction<boolean>>;
  products: IProduct;
}

const ProductsRow = ({
  srNo,
  setOpenPopup,
  setUpdateTable,
  products,
}: PropsType) => {
  const dispatch = useAppDispatch();

  
  const onEdit = () => {
    dispatch(setProduct(products));
    setOpenPopup(true);
  };

  const onDelete = () => {
    dispatch(setLoading(true))

    const payload = {
      fileKey: products.fileKey,
    };

    axios
      .delete("/api/uploadthing", { data: payload })
      .then((res) => {
        console.log(res.data);

        axios
          .delete(`/api/delete_product/${products._id}`)
          .then((res) => {
            console.log(res.data);
            makeToast("Products Delete Successfully");
            setUpdateTable((prevState) => !prevState);
          })
          .catch((err) => console.log(err))
          .finally(() => dispatch(setLoading(false)));
      })
      .catch((err) => console.log(err));
  };

  return (
    <tr>
      <td>
        <div>{srNo}</div>
      </td>
      <td>
        <div>{products.name}</div>
      </td>
      <td>$ {products.price}</td>
      <td className="py-2">
        <Image
          src={products.imgSrc}
          width={40}
          height={40}
          alt="product_image"
        />
      </td>
      <td>
        <div className="text-2xl flex items-center gap-2 text-gray-600">
          <CiEdit
            className="cursor-pointer hover:text-black"
            onClick={onEdit}
          />
          <RiDeleteBin5Line
            className="text=[20px] cursor-pointer hover:text-red-600"
            onClick={onDelete}
          />
        </div>
      </td>
    </tr>
  );
};

export default ProductsRow;