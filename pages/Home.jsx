import Header from "@/components/Header";
import Cajeros from "@/components/Cajeros";

function Home({ cajeros }) {
  //console.log(cajeros) ok
  return (
    <>
      <Header />
      <div className="row h-5 w-full"></div>
      <Cajeros cajeros={cajeros} />
    </>
  );
}

export default Home;
