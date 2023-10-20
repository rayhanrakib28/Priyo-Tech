import { Link } from "react-router-dom";

const BrandCard = ({brand}) => {
    const { _id, brand_name, brand_image } = brand || {};
    
    return (
        <Link to={`/products/${brand_name}`}>
            <div className="flex flex-col justify-center items-center gap-4">
            <img className="w-5/6" src={brand_image} alt="" />
                <h1 className="uppercase font-bold ">{brand_name}</h1>
        </div>
        </Link>
        
    );
};

export default BrandCard;