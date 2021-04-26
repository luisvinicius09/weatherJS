const animate = () => {
  const title = document.querySelector('.titleWrapper');
  gsap.from(title, { x: -320 });
  gsap.to(title, { duration: 4, x: 0 })

  const gif = document.querySelector('.gif-card');
  gsap.from(gif, { x: -220 });
  gsap.to(gif, { duration: 2.7, x: 0 });

  const search = document.querySelector('.searchWrapper');
  gsap.from(search, { x: -180 });
  gsap.to(search, { duration: 1, x: 0 })

  const weatherCard = document.querySelector('.weather-card');
  gsap.from(weatherCard, { x: -200 });
  gsap.to(weatherCard, { duration: 2, x: 0 });
}

export default animate;