
var count = 0;
// Music
var kuru_mus_ach = new Audio('/music/kuru3.mp3')
var randMusInd = 0
var music = [ new Audio("/music/kuru1.mp3"), new Audio("/music/kuru2.mp3"), new Audio("/music/yhdl.mp3"), new Audio("/music/zqq.mp3"),
new Audio("/music/zqql.mp3"), new Audio("/music/gururu.mp3"), new Audio("/music/kuruto.mp3")];

// Images
const imgli= ["/images/r1-unscreen.gif", "/images/r3.gif","/images/kuru.gif"];
var randomnum = 0

// Images Index
function randomnumgenerator(){
    randomnum = Math.floor(Math.random()*3);
    return randomnum;
}
// Music Index
function randomnum_music_gen(){
    randMusInd = Math.floor(Math.random()*7);
    return randMusInd;
}

// Prevent the browser from self scrolling when the image goes out of Defined General Viewport
$('html, body').css({
    overflow: 'hidden',
    height: '100%'
}); 



$('#squish').click(function(){

    count+=1;
    var imgInd = randomnumgenerator();
    var musicIndex = randomnum_music_gen();

    $('.imgs').css("display","block");
    $('.imgs').attr('id','addani');
    $('.imgs').attr('src',imgli[imgInd]);

    if(count%100==0)
    {
        kuru_mus_ach.play();

    }
    else{
        
        music[musicIndex].play();
    }
    
    $('#squish_num').text(String(count));
    setTimeout(function() {
    $('.imgs').removeAttr('id','addani');
    $('.imgs').css("display","");

    }, 2000);

    console.log($(window).width());

});

