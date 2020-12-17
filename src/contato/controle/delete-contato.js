$(document).ready(function() {

    $('.btn-delete').click(function(e) {
        e.preventDefault()

        let ID = `ID=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assunc: true,
            data: ID,
            url: 'src/contato/modelo/delete-contato.php',
            success: function(dados) {
                if (dados.return == true) {
                    alert('Registro excluído com sucesso!')
                    $('body').append(`<script src="src/contato/controle/list-contato.js"></script>`)

                } else {
                    alert('Erro ao efutuar exclusão do registro!')
                }

            }
        })
    })

})