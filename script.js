const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
menu.addEventListener('click', () => {
  nav.classList.toggle('open');
  menu.textContent = nav.classList.contains('open') ? 'CLOSE ×' : 'MENU ☻';
});

document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open'); menu.textContent='MENU ☻';
}));

const meals = [
  '番茄炒蛋 + 米饭 🍅',
  '咖喱鸡 + 西兰花 🍛',
  '青椒肉丝 + 米饭 🫑',
  '今天冰箱决定一切 🥹',
  '认真带饭：三菜一汤！🍱',
  '点外卖也算一种答案 🤫'
];

const mealButton = document.getElementById('mealButton');
const mealResult = document.getElementById('mealResult');
mealButton.addEventListener('click', () => {
  mealResult.textContent = meals[Math.floor(Math.random()*meals.length)];
});

document.querySelectorAll('.fact-card, .company-card, .play-card').forEach(el => {
  el.addEventListener('mousemove', e => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX-r.left)/r.width-.5;
    const y = (e.clientY-r.top)/r.height-.5;
    el.style.transform = `perspective(700px) rotateY(${x*3}deg) rotateX(${-y*3}deg) translateY(-4px)`;
  });
  el.addEventListener('mouseleave', () => el.style.transform = '');
});