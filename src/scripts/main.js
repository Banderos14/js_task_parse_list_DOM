'use strict';

const listEl = document.querySelector('ul');

function sortList(list) {
  const items = Array.from(list.querySelectorAll('li'));

  items.sort((a, b) => {
    const salaryA = Number(a.dataset.salary.replace(/[$,]/g, ''));
    const salaryB = Number(b.dataset.salary.replace(/[$,]/g, ''));

    return salaryB - salaryA;
  });

  items.forEach((item) => {
    list.append(item);
  });
}

function getEmployees(list) {
  const items = list.querySelectorAll('li');
  const result = [];

  for (let i = 0; i < items.length; i++) {
    const employee = {
      name: items[i].textContent.trim(),
      position: items[i].dataset.position,
      salary: Number(items[i].dataset.salary.replace(/[$,]/g, '')),
      age: Number(items[i].dataset.age),
    };

    result.push(employee);
  }

  return result;
}

// вызов
sortList(listEl);
getEmployees(listEl);
