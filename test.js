const Queue = require('./Queue')



test('',() => {
const queue = new Queue(3)

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

queue.dequeue(1)
queue.dequeue(2)
queue.dequeue(3)

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

//8expect(queue.printTail()).toBe(3)
expect(queue.enqueue(5)).toBe(true)
expect(queue.dequeue(1)).toBe(1)
})



