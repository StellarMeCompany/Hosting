export function Producto({ Img, Titulo, Desc, precio }) {
  return (
    <article className='product-article'>
      <div className='product-card'>
        <img src={Img} alt='StellarMe Product' className='product-img' />
        <h2>{Titulo}</h2>
        <p className='product-desc'>{Desc}</p>
        <span className='product-price'>{precio} €</span>
      </div>
    </article>
  )
}
