function redirectGoogleMaps() {
  const googleMapsLink = ('src', 'https://maps.app.goo.gl/wGQwbx8mVFUDf6dq7');
  const buttonElement = document.getElementById('redirectButton');
  window.open(googleMapsLink, "_blank");
}

function openFacebookProfile() {
  const facebookLink = ('src', 'https://www.facebook.com/tkkeenanplus?mibextid=gik2fB');
  const buttonElement = document.getElementById('facebookListItem');
  window.open(facebookLink, "_blank");
}

function openInstagramProfile() {
  const instagramLink = ('src', 'https://www.instagram.com/tkkeenancurug/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==');
  const buttonElement = document.getElementById('instagramListItem');
  window.open(instagramLink, "_blank");
}

function openWhatsapp() {
  const whatsappLink = ('src', 'https://wa.me/6287875688452');
  const buttonElement = document.getElementById('whatsappListItem');
  window.open(whatsappLink, "_blank");
}

function openYoutubeChannel() {
  const youtubeLink = ('http://www.youtube.com/@TKKeenanCurug');
  const buttonElement = document.getElementById('youtubeListItem');
  window.open(youtubeLink, "_blank");
}

function Welcome() {
  alert('Selamat Datang di TK Keenan')
  const content = document.querySelector('.content');
}


redirectButton.addEventListener("click", redirectGoogleMaps);
facebookListItem.addEventListener("click", openFacebookProfile);
instagramListItem.addEventListener("click", openInstagramProfile);
whatsappListItem.addEventListener("click", openWhatsapp);
youtubeListItem.addEventListener("click", openYoutubeChannel)
document.body.onload = Welcome;
