import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

import Header from "@/components/Header";
import MenuCajeros from "@/components/MenuCajeros";
import Depositos from "@/components/Depositos";
import Retiros from "@/components/Retiros";
import Saldo from "@/components/Saldo";

function CajeroMain() {

  const router = useRouter();
  const { id } = router.query;
  const { data: session } = useSession();

  // Context
  //const { state, setState } = useContext(StateContext);

  // Loadings
  const [isCajerosLoading, setCajerosLoading] = useState(true);
  const [isUserLoading, setUserLoading] = useState(true);

  const [opt,setOpt] = useState("menu");

  

  useEffect(() => {
    axios.put(`http://127.0.0.1:5000/cajero/state/${id}`, { state: "Ocupado" });
    axios.put(`http://127.0.0.1:5000/cajero/user_id/${id}`, {user_id: session.user.name });

    return () => {
      axios.put(`http://127.0.0.1:5000/cajero/state/${id}`, { state: "Disponible" });
      axios.put(`http://127.0.0.1:5000/cajero/user_id/${id}`, {user_id: null });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <div className="h-10"></div>
      <div>
        {
          opt == "menu" && <MenuCajeros  setOpt={setOpt}/>
        }
        {
          opt == "depositos" && <Depositos setOpt={setOpt} email={session.user.email} />
        }
        {
          opt == "retiros" && <Retiros setOpt={setOpt} email={session.user.email}/>
        }
        {
          opt == "saldo" && <Saldo setOpt={setOpt} email={session.user.email}/>
        }
        
        
      </div>
    </>
  );
}

export default CajeroMain;
