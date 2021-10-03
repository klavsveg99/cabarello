function toggleMenu() {
  var x = document.getElementById("menu__mobile");
  var y = document.getElementById("hero__under");
  var z = document.getElementById("front-hero");
  var a = document.getElementById("menu__mobile-icon")
  /* opening menu */
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.margin = 0;
    z.style.background = '#f2f2f2';
    z.style.borderBottom = '2px solid #242032';
    a.style.color = '#444444';
    a.classList.remove('fa-bars');
    a.classList.add('fa-times');
  /* closing menu */
  } else {
    x.style.display = "none";
    y.style.marginTop = 'calc(69vh - 100px)';
    z.style.background = 'none';
    z.style.borderBottom = 'none'
    a.style.color = 'white';
    a.classList.remove('fa-times');
    a.classList.add('fa-bars');
  }
}

/* google maps */
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
      mapId: "a6d83b633394b4b2",
      center: { lat: 58.23, lng: 9.67 },
      zoom: 4.5,
      disableDefaultUI: true,
    });
const pos1 = {lat: 57.72, lng: 13.38};
const marker1 = new google.maps.Marker({position: pos1, map: map})
const pos2 = {lat: 57.15, lng: 13.91};
const marker2 = new google.maps.Marker({position: pos2, map: map})
const pos3 = {lat: 56.87, lng: 13.23};
const marker3 = new google.maps.Marker({position: pos3, map: map})
const pos4 = {lat: 57.46, lng: 13.65};
const marker4 = new google.maps.Marker({position: pos4, map: map})
const pos5 = {lat: 60.11, lng: 15.21};
const marker5 = new google.maps.Marker({position: pos5, map: map})
const pos6 = {lat: 60.32, lng: 15.63};
const marker6 = new google.maps.Marker({position: pos6, map: map})


const markers = [marker1, marker2, marker3, marker4, marker5, marker6];
const imagePath = "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m";
const markerClusterer = new MarkerClusterer(map, markers, {imagePath: imagePath});
}

$(document).ready(function(){

  /* video mute */
  $(".mute__button").click(function () {
    if( $("video").prop('muted') )
  {
    $(".hero__video").prop('muted', false);
    $(".mute__button img").attr("src","./content/audio-unmuted.svg");
  }
  else {
    $(".hero__video").prop('muted', true);
    $(".mute__button img").attr("src","./content/eko-nams-audio-mute.svg");
  }
  });

  /* news image zoom out */
$(".news__container").hover(function () {
  $(this).children().css({
    'background' : 'none',
    'transform' : 'scale(1)',
  });
  $(this).next().css({
    'top' : '20px',
    'background' : 'gray',
    'text-shadow' : 'none',
  });
});

$(".news__container").mouseout(function () {
  $(this).children().css({
    'transform' : 'scale(1.2)',
    'background-color' : 'rgba(0,0,0,0.3)',
  });
  $(this).next().css({
    'top' : '-90px',
    'background' : 'none',
    'text-shadow' : '0px 0px 20px black',
    });
  });
});
