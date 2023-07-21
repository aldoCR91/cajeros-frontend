

const Cajeros = ({cajeros}) => {

    console.log(cajeros);
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
        <ul>
            {cajeros.map((cajero) => (
                <li key={cajero[0]}>{cajero}</li>
            ))}
        </ul>    
      {/* {products.slice(0,4).map((product) => (
        <Cajero
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
          rating={product.rating}
        />
      ))}

      <Image
        width={200}
        height={200}
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt="anuncio"
      />

      <div className="md:col-span-2 ">
        {products.slice(4,5).map((product) => (
          <Cajero
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
            rating={product.rating}
          />
        ))}
      </div>

      {products.slice(5,products.length).map((product) => (
        <Cajero
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
          rating={product.rating}
        />
      ))} */}
    </div>
  )
}

export default Cajeros;
