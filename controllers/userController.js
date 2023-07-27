

export const create_user = async (name,email,image,rol,pin,saldo) => {
    // consultar si existe el usuario
    let res = await fetch(`localhost:5000/usuario/${email}`)

    console.log(res);
}

