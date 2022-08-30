var songtext;
    $(document).ready(function() {
        
        songtext = [ // [text, duration]
        ["Açgözlü ", 1500],
        ["ve ", 650],
        ["hoşnut, ", 650],
        ["prestije ", 650],
        ["feci ", 650],
        ["bağımlıydık.", 1000],
        ["</br> Afgan ", 650],
        ["dövüşçü ", 650],
        ["Ebuhaciz ", 650],
        ["psikoloji ", 650],
        ["eğitimi ", 650],
        ["alıyor.", 650],
        ["Ağı ", 650],
        ["övdüm, ", 650],
        ["şarjsız ", 650],
        ["cep ", 650],
        ["telefonu ", 650],
        ["hiç ", 650],
        ["yok ", 650],
        ["gibi.", 1000],
        ["</br> Av ", 650],
        ["faydasız, ", 650],
        ["bagaj ", 650],
        ["hep ", 650],
        ["ciğer ", 650],
        ["olmuş, ", 650],
        ["çöktün.", 1000],
        ["</br> Bahçede ", 650],
        ["acı ", 650],
        ["jambonlu ", 650],
        ["zayıf ", 650],
        ["tavuk ", 650],
        ["göğsü ", 650],
        ["pişir.", 1000],
        ["</br> Bugün ", 650],
        ["fıstıkçı ", 650],
        ["Şahap ", 650],
        ["değil ", 650],
        ["jöleci ", 650],
        ["Yavuz ", 650],
        ["alsa ", 650],
        ["olur mu?", 1000],
        ["</br> Bu ", 650],
        ["vakıf ", 650],
        ["koleji ", 650],
        ["hep ", 650],
        ["güçsüz, ", 650],
        ["öğrenci ", 650],
        ["yetişmedi. ", 1000],
        ["</br> Jubile, ", 650],
        ["hepsi ", 650],
        ["Eğitim ", 650],
        ["Gönüllüleri ", 650],
        ["Vakfı ", 650],
        ["içindi, ", 650],
        ["coşuyoruz. ", 1000],
        ["</br> Kıl ", 650],
        ["şoför ", 650],
        ["çocuğun ", 650],
        ["gaz, ", 650],
        ["vites, ", 650],
        ["debriyajı ", 650],
        ["müphem. ", 1000],
        ["</br> Kolej ", 650],
        ["fıstığı ", 650],
        ["böcüden ", 650],
        ["hep ", 650],
        ["vazgeçiyormuş. ", 1000],
        ["</br> Pijamalı ", 650],
        ["hasta ", 650],
        ["yağız ", 650],
        ["şoföre ", 650],
        ["çabucak ", 650],
        ["güvendi. ", 1000],
        ["</br> Tüh, ", 650],
        ["jantı ", 650],
        ["feda ", 650],
        ["et; ", 650],
        ["pislik ", 650],
        ["böceği ", 650],
        ["yormuş, ", 650],
        ["vazgeç.", 2000],
        
        
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

    var timeoutHandle = window.setTimeout(0);
    function clear(){
        document.getElementById('div').innerHTML = "";
        
    }
    
    $('.clear').on('click', function() {
      
      document.getElementById("playClear").disabled = true;
      document.getElementById("playBtn").disabled = false;
      clear();
    });

    });

    var cc = 0;
    function nextWord() {
        $('#p'+cc).css("color", "blue");
        cc++;
        if(cc> songtext.length-1) return;
        window.setTimeout(nextWord, songtext[cc-1][1]);
    }