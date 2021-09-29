const oneDay = 1000 * 60 * 60 * 24;

const now = new Date();
const start = new Date(now.getFullYear(), 0, 1);
const end = new Date(now.getFullYear(), 12, 0);

const diff = end - start;

const days = (diff / oneDay) + 1;

const rows = 10;
const columns = Math.ceil(days / 7);

// console.log(now);
console.log(start);
// console.log(end);
// console.log(diff);
// console.log(days);
// console.log(columns);

// sample data = [2, 5, 4, 8, 11, 6]
// let data = [[0, 0, 0, 0, 0, 0, 2],
//             [1, 0, 0, 2, 1, 1, 0],
//             [1, 0, 0, 1, 0, 2, 0],
//             [2, 1, 2, 1, 0, 1, 1],
//             [0, 3, 2, 0, 3, 1, 2],
//             [1, 0, 0, 2, 1, 1, 1]];
let data = [[0, 0, 0, 0, 0, 0, 2],
            [1, 0, 0, 2, 1, 1, 0],
            [1, 0, 0, 1, 0, 2, 0],
            [2, 1, 2, 1, 0, 1, 1],
            [0, 3, 2, 0, 3, 1, 2],
            [1, 0, 0, 2, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 2],
            [1, 0, 0, 2, 1, 1, 0],
            [1, 0, 0, 1, 0, 2, 0],
            [2, 1, 2, 1, 0, 1, 1],
            [0, 3, 2, 0, 3, 1, 2],
            [1, 0, 0, 2, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 2],
            [1, 0, 0, 2, 1, 1, 0],
            [1, 0, 0, 1, 0, 2, 0],
            [2, 1, 2, 1, 0, 1, 1],
            [0, 3, 2, 0, 3, 1, 2],
            [1, 0, 0, 2, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 2],
            [1, 0, 0, 2, 1, 1, 0],
            [1, 0, 0, 1, 0, 2, 0],
            [2, 1, 2, 1, 0, 1, 1],
            [0, 3, 2, 0, 3, 1, 2],
            [1, 0, 0, 2, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 2],
            [1, 0, 0, 2, 1, 1, 0],
            [1, 0, 0, 1, 0, 2, 0],
            [2, 1, 2, 1, 0, 1, 1],
            [0, 3, 2, 0, 3, 1, 2],
            [1, 0, 0, 2, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 2],
            [1, 0, 0, 2, 1, 1, 0],
            [1, 0, 0, 1, 0, 2, 0],
            [2, 1, 2, 1, 0, 1, 1],
            [0, 3, 2, 0, 3, 1, 2],
            [1, 0, 0, 2, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 2],
            [1, 0, 0, 2, 1, 1, 0],
            [1, 0, 0, 1, 0, 2, 0],
            [2, 1, 2, 1, 0, 1, 1],
            [0, 3, 2, 0, 3, 1, 2],
            [1, 0, 0, 2, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 2],
            [1, 0, 0, 2, 1, 1, 0],
            [1, 0, 0, 1, 0, 2, 0],
            [2, 1, 2, 1, 0, 1, 1],
            [0, 3, 2, 0, 3, 1, 2],
            [1, 0, 0, 2, 1, 1, 1]];

const xmlns = 'http://www.w3.org/2000/svg'
let container = document.getElementById('calendar-svg');

const isBurning = 7;

for (let i = 0; i < columns; i ++) {
  let newGroup = document.createElementNS(xmlns, 'g');
  newGroup.setAttributeNS(null, 'transform', `translate(${16*i}, ${170})`);

  let burningFlag = false;
  let burningPoint = 0;

  // 샘플 데이터 부족으로 인덱스 에러로 인한 임시 조건문
  if (i < data.length) {
    burningPoint = data[i].reduce((sum, currValue) => {
      return sum + currValue;
    }, 0);
  }

  let boxTag = 'basic';

  if (burningPoint != 0 && burningPoint < isBurning) {
    boxTag = 'n-lv';
  }
  else if (burningPoint >= isBurning) {
    boxTag = 'h-lv';
  }

  for (let j = 0; j < rows; j ++) {
    let boxLv = '0';

    if (boxTag == 'n-lv' && j < burningPoint) {
      if (j < 2) {
        boxLv = 1;
      }
      else if (j < 3) {
        boxLv = 2;
      }
      else if (j < 4) {
        boxLv = 3;
      }
      else if (j < 5) {
        boxLv = 4;
      }
      else if (j < 6) {
        boxLv = 5;
      }
      else {
        boxLv = 0;
      }
    }

    if (boxTag == 'h-lv' && j < burningPoint) {
      if (j < 2) {
        boxLv = 1;
      }
      else if (j < 4) {
        boxLv = 2;
      }
      else if (j < 5) {
        boxLv = 3;
      }
      else if (j < 6) {
        boxLv = 4;
      }
      else if (j < 7) {
        boxLv = 5;
      }
      else if (j < 8) {
        boxLv = 6;
      }
      else if (j < 9) {
        boxLv = 7;
      }
      else if (j < 10) {
        boxLv = 8;
      }
      else {
        boxLv = 0;
      }
    }

    let newPixel = document.createElementNS(xmlns, 'rect');
    newPixel.setAttributeNS(null, 'class', `box-${boxTag}${boxLv}`);
    newPixel.setAttributeNS(null, 'width', '11');
    newPixel.setAttributeNS(null, 'height', '11');
    newPixel.setAttributeNS(null, 'x', '16');
    newPixel.setAttributeNS(null, 'y', `${-15*j}`);
    newPixel.setAttributeNS(null, 'rx', '1');
    newPixel.setAttributeNS(null, 'ry', '1');

    // console.log(newPixel);

    newGroup.appendChild(newPixel);
  }

  container.appendChild(newGroup);
}
