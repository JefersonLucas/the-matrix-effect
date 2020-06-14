var a;


let code = 0

function hilite() {
    $('code').html($('#code').val());
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
    });
}

function scriptoide(){
    let script = $('#code').val()
    $('#scriptoide').html('')
    $('#scriptoide').append(script)
}

document.addEventListener('DOMContentLoaded', (event) => {
    hilite();

    $('#code').keyup((e) => {

        hilite();

        if (e.which == 13 && !e.shiftKey) {
            scriptoide();
            // eval('(' + $('#code').val() + ')');
        }

        if (e.which == 9) {
            e.preventDefault();
            $(this).trigger("keydown", [32]);
        }
    });

    $('code').keydown((e) => {
        if (e.which == 9) {
            e.preventDefault();
            insertAtCaret('code', 'aa')
        }
    });

});

