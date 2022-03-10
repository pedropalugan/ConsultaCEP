function verificarCep() {
    let rua = document.getElementById("logradouro");
    let bairro = document.getElementById("bairro");
    let city = document.getElementById("city");
    let uf = document.getElementById("uf");
    let ddd = document.getElementById("ddd");
    let cep = document.getElementById("cep").value
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(Response => Response.json())
        .then(log =>{
            if(log['logradouro'] == undefined && log['bairro'] == undefined && log['localidade'] == undefined && log['uf'] == undefined && log['ddd'] == undefined){
                alert("CEP NÃO ENCONTRADO")
            }
            else{
            rua.value = log['logradouro']
            bairro.value = log['bairro']
            city.value = log['localidade']
            uf.value = log['uf']
            ddd.value = log['ddd']
            }
        } )
        .catch((erro) => {
            alert("Cep não encontrado")
        })
}
