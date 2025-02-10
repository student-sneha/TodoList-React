import Product from "./Product.jsx"

function ProductTab(){
    return (
        <>
        <Product title="Phone" price={30000/2}/>
        <Product title="Laptop" price="300000"/>
        <Product title="Pen" />

        </>
    );
}

export default ProductTab;