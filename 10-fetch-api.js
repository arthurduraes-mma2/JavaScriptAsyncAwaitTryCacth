async function buscarUsuario(id) {
    try {
        console.log("Buscando usuário na API.....");

        const resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        if (!resposta.ok) {
            throw new Error(`Erro http: ${resposta.status}`);
        }

        const usuario = await resposta.json();

        console.log("Usuário encontrado:");
        console.log("Nome:", usuario.name);
        console.log("E-mail:", usuario.email);
        console.log("Cidade:", usuario.address.city);
    } catch (error) {
        console.log(error.message);
    }
}

buscarUsuario(1);