// 0. import Queue มาใช้ ใน test
// 1. สร้าง queue ใหม่และทดสอบว่า empty มีค่าเป็น true (ว่าง)
// 2. สร้าง queue size 1 และ ทดสอบว่าสามารถ enqueue(20) และ dequeue ค่าที่ได้จะได้ 20
// 3. สร้าง queue size 1 และ ทดสอบว่า enqueue เข้าไป 1 ตัว แล้ว full จะได้ค่า true (เต็ม)
// 4. สร้าง queue size 1 และ ทดสอบว่า เมื่อเพิ่มมากกว่า 1 แล้ว enqueue(5) ค่าที่ได้จะเป็น false (เพิ่มไม่ได้)
// 5. สร้าง queue size 2 และ enqueue 1 และ 2 เข้าไป เมื่อ dequeue จะได้ ค่าเรียงลำดับเป็น 1 และ 2 เช่นกัน
// 6. สร้าง queue size 1 และ dequeue เลย จะต้องตรวจว่าค่าที่ได้จาก dequeue เป็น null
const Queue = require('./Queue')

test('if queue are empty', () => {
    const queue = new Queue(3);
    expect(queue.empty()).toBe(true)
})
test('both enqueue and dequeue need to be true ', () => {
    const queue = new Queue(1)
    
    expect(queue.enqueue(20)).toBe(true)
    expect(queue.dequeue(20)).toBe(20)

})
test('return true if queue is full',() => {
    const queue = new Queue(1)
    queue.enqueue(1) //enqueue 1 queue is now full
    expect(queue.full()).toBe(true)
})
test('enqueue while queue is full',() => {
    const queue = new Queue(1)
    queue.enqueue(1)//queue is now full
    expect(queue.enqueue(5)).toBe(false)
})
test('dequeue 1,2 from queue , the output needs to be 1,2',() => {
    const queue = new Queue(2)
    queue.enqueue(1)//enqueue 1 
    queue.enqueue(2)//enqueue 2
    expect(queue.dequeue(1)).toBe(1)
    expect(queue.dequeue(2)).toBe(2)
})
test('dequeue when nothing inside queue the output needs to be null',() => {
    const queue = new Queue()
    expect(queue.dequeue()).toBe(null)
})
