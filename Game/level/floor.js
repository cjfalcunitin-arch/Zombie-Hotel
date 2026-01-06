// level/floor.js
export function createFloor(parent, thickness = 30) {
  const floor = document.createElement('div');

  Object.assign(floor.style, {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height: thickness + 'px',
    backgroundColor: '#ddd',
    borderTop: '3px solid black',
    boxSizing: 'border-box'
  });

  parent.appendChild(floor);
  return floor;
}
