$(document).ready(function() {

    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        assync: true,
        url: 'src/contato/modelo/list-contato.php',
        success: function(dados) {

            $('tbody').empty()

            for (var i = 0; i < dados.length; i++) {

                let registro = `
                    <tr>
                        <td class="text-center">${dados[i].ID}</td>
                        <td>${dados[i].NOME}</td>
                        <td class="text-center">${dados[i].TELEFONE}</td>
                        <td class="text-center">${dados[i].CELULAR}</td>
                        <td class="text-center">
                            <button id="${dados[i].ID}" class="btn btn-primary btn-sm btn-edit">Editar</button>
                            <button id="${dados[i].ID}" class="btn btn-danger btn-sm btn-delete">Excluir</button>
                        </td>
                    </tr>
                `

                $('tbody').append(registro)

            }

            $('body').append(`<script src="src/contato/controle/view-contato.js"></script>`)
            $('body').append(`<script src="src/contato/controle/delete-contato.js"></script>`)

        }
    })

})