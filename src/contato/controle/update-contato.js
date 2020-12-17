$(document).ready(function() {

    $('.btn-update').click(function(e) {

        e.preventDefault()
        var dados = $('#add-contato').serialize()

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: 'src/contato/modelo/update-contato.php',
            sucess: function(dados) {
                if (dados.return == true) {
                    alert('Contato atualizado com sucesso!')
                    $('add-contato').val('')
                    $('#formulario').empty()
                    $('body').append(`<script src="src/contato/controle/list-contato.js"></script>`)
                } else {
                    alert('Nao foi possivel cadastrar o contato!')
                }

            }






        })

    })


})