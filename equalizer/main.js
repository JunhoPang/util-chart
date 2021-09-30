/**
 * @description Drawing sample equalizer chart. Shape of chart is based on static data and position.
 * @author Junhohwang
 */

const now = new Date();

/**
 * @var start : First day of this year
 * @var end : Last day of this year
 * @var days : Total days of this year
 */
const start = new Date(now.getFullYear(), 0, 1);
const end = new Date(now.getFullYear(), 12, 0);
const diff = end - start;
const oneDay = 1000 * 60 * 60 * 24; // millisecond, second, minute, hour
const days = (diff / oneDay) + 1;

/**
 * @var rows : Equalizer rows
 * @var columns : Equalizer columns
 */
const rows = 10;
const columns = Math.ceil(days / 7);

/**
 * @var isBurning : A threshold to select between two kinds of gradient CSS
 * @var data : Sample data (48 columns)
 */
const isBurning = 7;
const data = [[0, 0, 0, 0, 0, 0, 2],
            [1, 0, 0, 2, 1, 1, 0],
            [1, 0, 0, 1, 0, 2, 0],
            [2, 1, 2, 1, 0, 1, 1],
            [0, 3, 2, 0, 3, 1, 2],
            [1, 0, 0, 2, 1, 1, 1],
            [1, 0, 2, 2, 1, 0, 2],
            [1, 0, 0, 2, 1, 1, 2],
            [1, 2, 0, 2, 0, 2, 0],
            [1, 1, 1, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 2],
            [1, 0, 0, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 1, 1, 1],
            [1, 0, 0, 1, 2, 2, 1],
            [2, 1, 2, 1, 0, 1, 1],
            [0, 1, 2, 0, 1, 1, 2],
            [1, 0, 2, 2, 1, 1, 1],
            [0, 0, 2, 2, 1, 0, 2],
            [1, 0, 0, 1, 1, 1, 0],
            [1, 0, 0, 1, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 1, 1, 2],
            [1, 0, 0, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 1, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0],
            [1, 1, 1, 1, 0, 1, 1],
            [0, 2, 2, 0, 2, 1, 2],
            [1, 0, 0, 1, 1, 1, 1],
            [0, 0, 0, 0, 1, 2, 2],
            [1, 0, 0, 2, 2, 2, 2],
            [1, 0, 0, 2, 0, 2, 0],
            [2, 2, 2, 2, 0, 2, 2],
            [0, 1, 1, 0, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 2],
            [1, 0, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 0],
            [1, 1, 1, 1, 0, 1, 1],
            [0, 1, 2, 0, 2, 1, 2],
            [1, 0, 0, 2, 2, 2, 2],
            [0, 0, 0, 1, 1, 1, 2],
            [1, 0, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1],
            [0, 2, 2, 0, 2, 1, 2],
            [1, 0, 0, 1, 1, 1, 1]];

const xmlns = 'http://www.w3.org/2000/svg';
let container = document.getElementById('calendar-svg');

for (let i = 0; i < columns; i ++) {
  let newGroup = document.createElementNS(xmlns, 'g');
  newGroup.setAttributeNS(null, 'transform', `translate(${16*i}, ${170})`);

  let boxTag = 'basic';
  let burningPoint = 0;

  // Check index boundary of data
  if (i < data.length) {
    // Sum of each row in 2-dimension array
    burningPoint = data[i].reduce((sum, currValue) => {
      return sum + currValue;
    }, 0);
  }

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

    newGroup.appendChild(newPixel);
  }

  container.appendChild(newGroup);
}
