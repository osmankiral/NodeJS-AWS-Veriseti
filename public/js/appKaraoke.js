var songtext;
    $(document).ready(function() {
        songtext = [ // [text, duration]
        ["Açgözlü ", 1000],
        ["ve ", 1000],
        ["hoşnut, ", 1000],
        ["prestije ", 1000],
        ["feci ", 1000],
        ["bağımlıydık.", 1000],
        ["</br> Afgan ", 1000],
        ["dövüşçü ", 1000],
        ["Ebuhaciz ", 1000],
        ["psikoloji ", 1000],
        ["eğitimi ", 1000],
        ["alıyor.", 1000],
        ["Ağı ", 1000],
        ["övdüm, ", 1000],
        ["şarjsız ", 1000],
        ["cep ", 1000],
        ["telefonu ", 1000],
        ["hiç ", 1000],
        ["yok ", 1000],
        ["gibi.", 1000],
        ["</br> Av ", 1000],
        ["faydasız, ", 1000],
        ["bagaj ", 1000],
        ["hep ", 1000],
        ["ciğer ", 1000],
        ["olmuş, ", 1000],
        ["çöktün.", 2000],
        
        ];
        var text="";
        $.each(songtext, function(a, b) {
            text += "<span id='p"+a+"' style='color:black'>" + b[0] + "</span> ";
    });

    $('.play').on('click', function() {
        $('#div').html(text);
        cc=0;
        nextWord();
        document.getElementById("playBtn").disabled = true;
        document.getElementById("playClear").disabled = false;
    });

    function fn(){
        var Name = document.getElementById('playClear').value;
        document.getElementById('div').innerHTML += '<br>' + Name;
    }
    function clear(){
        document.getElementById('div').innerHTML = "";
    }

    $('.clear').on('click', function() {
      clear();
      document.getElementById("playClear").disabled = true;
      document.getElementById("playBtn").disabled = false;
    });

    });

    var cc = 0;
    function nextWord() {
        $('#p'+cc).css("color", "blue");
        cc++;
        if(cc> songtext.length-1) return;
        window.setTimeout(nextWord, songtext[cc-1][1]);
    }