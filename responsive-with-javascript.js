export default function responsiveWithJavaScript(minWidth, responsive) {
  if (minWidth.matches) {
    document.querySelector(responsive).innerHTML = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/2SetvwBV-SU?si=a6lkb8AgCnjdTAMn"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen></iframe>
    <br>
    <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.5991320758058!2d-74.18877752590659!3d11.217266550909581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef4f5bba91d710f%3A0xb15c02937a619eee!2surbanizacion%20el%20parque%2C%20Santa%20Marta%2C%20Magdalena!5e0!3m2!1ses-419!2sco!4v1710865221125!5m2!1ses-419!2sco"
    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"></iframe>
    `;
  }
  else {
    document.querySelector(responsive).innerHTML = `
    <a href="https://www.youtube.com/watch?v=16geDhp5Xmg&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA" class="underline" target="_blank">Ver Vídeo</a>
    <br>
    <a href="https://www.google.com/maps/place/urbanizacion+el+parque,+Santa+Marta,+Magdalena/@11.2172666,-74.1887775,17z/data=!3m1!4b1!4m6!3m5!1s0x8ef4f5bba91d710f:0xb15c02937a619eee!8m2!3d11.2169665!4d-74.186381!16s%2Fg%2F1hhxb7_n6?entry=ttu" class="underline" target="_blank">Ver Mapa</a>
    `;
  }
}