// level/character.js
export function createCharacter({ x = '50%', y = '0px', parent = null } = {}) {
  const character = document.createElement('div');

  Object.assign(character.style, {
    position: 'absolute',
    left: x,
    top: y,
    transform: 'translateX(-50%)',
    width: '40px',
    height: '100px',
    pointerEvents: 'none'
  });

  /* 🟠 HEAD */
  const head = document.createElement('div');
  Object.assign(head.style, {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#ccc',
    margin: '0 auto'
  });

  /* 🔺 BODY (triangle) */
  const body = document.createElement('div');
  Object.assign(body.style, {
    width: '0',
    height: '0',
    borderLeft: '20px solid transparent',
    borderRight: '20px solid transparent',
    borderTop: '60px solid #aaa',
    margin: '5px auto 0'
  });

  character.appendChild(head);
  character.appendChild(body);

  if (parent) parent.appendChild(character);

  return character;
}
