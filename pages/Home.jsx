import { useSession } from "next-auth/react";
import { useContext, useEffect } from "react";
import axios from "axios";

import Header from "@/components/Header";
import Cajeros from "@/components/Cajeros";
import Button from "@mui/material/Button";
import { StateContext } from "../pages/index";

function Home() {
  // Get datos del usuario en session
  const { data: session } = useSession();
  const { email } = session.user;

  // Context
  const {state, setState} = useContext(StateContext);

  // Loadings
  const [isCajerosLoading, setCajerosLoading] = useState(true);
  const [isUserLoading, setUserLoading] = useState(true);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/cajeros')
      .then((response)=>{
        console.log(response.data);
        //setCajerosLoading(false);
      })
    
    axios.post(`http://127.0.0.1:5000/usuario`,{
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      rol: "user",
      pin: 1234,
      saldo: 0
    })
    .then((response)=>{
      console.log(response.data);  
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  const prueba = axios.get('http://127.0.0.1:5000/usuarios').then(res => res.data)

  console.log("****", prueba);

  const postUser = async () => {
    await axios
      .post(`http://127.0.0.1:5000/usuario`, {
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        rol: "user",
        pin: 1234,
        saldo: 0,
      })
      .then((response) => { 
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(postUser())

  const getCajeros = async () => {
    await axios
      .get(`http://127.0.0.1:5000/cajeros`)
      .then((response) => {
        console.log("get cajeros",response.data);
      })
      .catch((error) => {
        console.log("Home 37 Error en getCajeros", error);
      });
  };

  const postCajero = async () => {
    await axios.post("http://localhost:5000/cajero", { email }).then((res) => {
      console.log("Creando cajero nuevo");
      getCajeros();
    });
    getCajeros();
  };

  useEffect(() => {
    // Getting user
    postUser();
    // Getting cajeros
    getCajeros();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  

 

  return (
    <>
      <Header />
      {state.user.rol == "admin" && (
        <div className="row h-10 w-full bg-slate-200 content-center justify-center">
          <div className="h-8">
            <Button
              variant="text"
              color="primary"
              className="border cursor-pointer"
              onClick={postCajero}
            >
              Agregar cajero
            </Button>
          </div>
        </div>
      )}
      {/* <Cajeros cajeros={cajeros} /> */}
    </>
  );
}

export default Home;
