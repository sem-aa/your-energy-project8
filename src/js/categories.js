import { getFilters } from '../services/api';

const musclesFilterBtn = document.querySelector('button[data-muscles]');
const bodyFilterBtn = document.querySelector('button[data-body]');
const equipmentFilterBtn = document.querySelector('button[data-equipment]');

const onMusclesFilterClick = () => {
  toggleActiveStatus(musclesFilterBtn);
  getFilters({ filter: 'Muscles', page: 1, limit: 12 }).then(response => {
    console.log('response', response);
  });
};

const onBodyFilterClick = () => {
  console.log('onBodyFilterClick', onBodyFilterClick);
  toggleActiveStatus(bodyFilterBtn);

  getFilters({ filter: 'Body parts', page: 1, limit: 12 }).then(response => {
    console.log('response', response);
  });
};

const onEquipmentFilterClick = () => {
  console.log('onEquipmentFilterClick', onEquipmentFilterClick);
  toggleActiveStatus(equipmentFilterBtn);

  try {
    getFilters({ filter: 'Equipment', page: 1, limit: 12 }).then(response => {
      console.log('response', response);
    });
  } catch (error) {}
};

musclesFilterBtn.addEventListener('click', onMusclesFilterClick);
bodyFilterBtn.addEventListener('click', onBodyFilterClick);
equipmentFilterBtn.addEventListener('click', onEquipmentFilterClick);

function toggleActiveStatus(btn) {
  const activeBtn = document.querySelector('.active');
  activeBtn.classList.remove('active');
  if (btn.classList.contains('active')) {
    btn.classList.remove('active');
  } else {
    btn.classList.add('active');
  }
}
