const queue = (function Queue() {
  let _storage = {};
  let [_front, _rear] = [0, 0];
  
  const size = () => _storage[_rear] === undefined ? 0 : _rear - _front + 1;
 
  const print = () => {
    for (const property in _storage) {
      console.log(`${property}: ${_storage[property]}`);
    }
  };
  
  const enqueue = (value) => {
    if(size() === 0) {
      _storage['0'] = value;
    } else {
      _rear += 1;
      _storage[_rear] = value;
    }
  };
  
  const dequeue = () => {
    let temp;
    
    if(_front === _rear) {
      temp = _storage[_front];
      delete _storage[_front];
      [_front, _rear] = [0, 0];
    } else {
      temp = _storage[_front];
      delete _storage[_front];
      _front += 1;
    }
    
    return temp;
  }
  
  return {
    size: size,
    print: print,
    enqueue: enqueue,
    dequeue: dequeue,
  }
})();

queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(1);
queue.enqueue(7);

queue.print();
/*
"0: 3"
"1: 4"
"2: 1"
"3: 7"
*/
console.log(queue.size()); // 4

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

queue.print();
console.log(queue.size()); // 0
