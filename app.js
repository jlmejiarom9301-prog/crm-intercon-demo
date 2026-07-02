const navButtons = document.querySelectorAll('.nav');
const screens = document.querySelectorAll('.screen');

navButtons.forEach(button => {
  button.addEventListener('click', () => {
    navButtons.forEach(btn => btn.classList.remove('active'));
    screens.forEach(screen => screen.classList.remove('active'));

    button.classList.add('active');
    document.getElementById(button.dataset.screen).classList.add('active');
  });
});

const steps = document.querySelectorAll('.step');
const journeyTitle = document.getElementById('journeyTitle');
const journeyCopy = document.getElementById('journeyCopy');

steps.forEach(step => {
  step.addEventListener('click', () => {
    steps.forEach(item => item.classList.remove('active'));
    step.classList.add('active');
    journeyTitle.textContent = step.dataset.title;
    journeyCopy.textContent = step.dataset.copy;
  });
});

const animateBtn = document.getElementById('animateCompare');
const resetBtn = document.getElementById('resetCompare');
const lanes = document.querySelectorAll('.lane');
const allNodes = document.querySelectorAll('.node');

function resetCompare() {
  lanes.forEach(lane => lane.classList.remove('playing'));
  allNodes.forEach(node => node.classList.remove('active'));
}

function animateCompare() {
  resetCompare();
  lanes.forEach(lane => lane.classList.add('playing'));

  const currentNodes = document.querySelectorAll('.current .node');
  const futureNodes = document.querySelectorAll('.future .node');

  currentNodes.forEach((node, index) => {
    setTimeout(() => node.classList.add('active'), index * 420);
  });

  futureNodes.forEach((node, index) => {
    setTimeout(() => node.classList.add('active'), 700 + index * 420);
  });
}

animateBtn.addEventListener('click', animateCompare);
resetBtn.addEventListener('click', resetCompare);