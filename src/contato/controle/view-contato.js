$(document).ready(function() {

    $('.btn-edit').click(function(e) {
        e.preventDefault()

        let ID = `ID=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assunc: true,
            data: ID,
            url: 'src/contato/modelo/view-contato.php',
            success: function(dados) {

                $('#formulario').load('src/contato/visao/form-contato.html', function() {
                    $('#NOME').val(dados[0].NOME)
                    $('#CEP').val(dados[0].CEP)
                    $('#LOGRADOURO').val(dados[0].LOGRADOURO)
                    $('#NCASA').val(dados[0].NCASA)
                    $('#BAIRRO').val(dados[0].BAIRRO)
                    $('#CIDADE').val(dados[0].CIDADE)
                    $('#EMAIL').val(dados[0].EMAIL)
                    $('#TELEFONE').val(dados[0].TELEFONE)
                    $('#CELULAR').val(dados[0].CELULAR)
                    $('#ID').val(dados[0].ID)
                    $('.btn-save').empty()
                    $('.btn-save').append('Salvar Alterações')
                    $('.btn-outline-success').removeClass('btn-save')
                    $('.btn-outline-success').addClass('btn-update')
                })

                $('body').append(`<script src="src/contato/controle/update-contato.js"></script>`)
            }
        })
    })

})