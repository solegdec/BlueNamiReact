import FirstUser from "./FirstUser" ;
import LastProduct from "./LastProduct" ;
import "../assets/css/ContentRowProducts.css";

function ContentRowProducts() {
    return (
        <div className="row">
            <FirstUser />
            <LastProduct />
        </div>
    )
}
export default ContentRowProducts;