
import { IProduct } from "@/app/admin/dashboard/page";
import { setProduct } from "@/redux/features/productSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Dispatch, SetStateAction } from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";


interface PropsType{
    srNo: number;
    setOpenPopup: Dispatch<SetStateAction<boolean>>;
    setUpdateTable: Dispatch<SetStateAction<boolean>>;
    products: IProduct
}

const ProductsRow = ({srNo, setOpenPopup, setUpdateTable, products,}:PropsType) => {

const dispatch = useAppDispatch();

const onEdit = () => {
    dispatch(setProduct(products));
    setOpenPopup(true);
};

    const onDelete = () => {
        
    };

  return (
    <tr>
        <td>
            <div>
                {srNo}
            </div>
        </td>
        <td>
            <div>{products.name}</div>
        </td>
        <td>
            <div>$ {products.price}</div>
        </td>
        <td className="py-2">
            <img src={products.imgSrc} width={40} height={40} alt="product_image"/>
        </td>
        <td>
            <div className="text-2xl flex items-center gap-2 text-gray-600">
                <CiEdit className="cursor-pointer hover:text-black" onClick={onEdit}/>
                <RiDeleteBin5Line className="text-[20px] cursor-pointer hover:text-red-600" onClick={onDelete}/>
            </div>
        </td>
    </tr>
  )
}

export default ProductsRow