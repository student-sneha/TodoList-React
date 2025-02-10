
export default function Product({title,price=1}){
    return(
        <>
        <h1>{title}</h1>
        <h6>{price}</h6>
        </>
    )
}