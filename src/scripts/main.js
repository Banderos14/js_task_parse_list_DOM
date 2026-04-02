'use strict';

const item = document.querySelectorAll('li');
const list = document.querySelector('ul');

function sortList() {
  const items = Array.from(list.querySelectorAll('li'));

  items.sort((a, b) => {
    const salaryA = Number(a.dataset.salary.replace(/[$,]/g, ''));
    const salaryB = Number(b.dataset.salary.replace(/[$,]/g, ''));

    return salaryB - salaryA;
  });

  items.forEach((num) => list.append(num));
}

sortList();

function getEmployees() {
  const result = [];

  for (let i = 0; i < item.length; i++) {
    const employee = {
      name: item[i].textContent.trim(),
      position: item[i].dataset.position,
      salary: Number(item[i].dataset.salary.replace(/[$,]/g, '')),
      age: Number(item[i].dataset.age),
    };

    result.push(employee);
  }

  result.sort((a, b) => {
    return b.salary - a.salary;
  });

  return result;
}

getEmployees();
