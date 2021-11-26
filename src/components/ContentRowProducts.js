import LastProduct from "./LastProduct" ;
import SearchProducts from "./SearchProducts";

function ContentRowProducts() {
    return (
        <div className="row">
            <LastProduct />
            <SearchProducts/>
        </div>
    )
}
export default ContentRowProducts;