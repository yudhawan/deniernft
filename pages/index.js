import Products from "../components/products"


export async function getServerSideProps(){
  const result = await fetch('https://fakestoreapi.com/products')
  const data = await result.json()
  return {
    props: {
      products: data
    }
  }
}


export default function Home({products}) {

  return (
    <div className="mt-20 h-screen">
      <div className="flex flex-col sm:flex-row sm:flex-wrap px-10 mt-10 space-x-1 space-y-1 justify-center items-center">
          {
            products?.map(value=> <Products image={value.image} title={value.title} price={value.price} />)
          } 
      </div>
    </div>
  )
}


