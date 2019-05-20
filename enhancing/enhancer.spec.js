const { repair, fail, get, succeed } = require('./enhancer.js');
// test away!

// let item = {
//     name: 'thing1',
//     durability: 15,
//     enhancement:15,
// }

describe('enhancer.js', () => {

    //repair(item)
    describe('repair', () => {
        it('back to 100', ()=> {
            let item = {
                name: 'thing1',
                durability: 15,
                enhancement:15,
            }

            expect(repair(item)).toEqual({
                name: 'thing1',
                durability:100,
                enhancement: 15
            })
        })
    })
    //fail(item)
    describe('to fail', () => {
        it('decrease durability by 5, if enhancement less than 15', ()=>{
            let item = {
                name: 'thing1',
                durability: 50,
                enhancement: 14,
            }
            expect(fail(item)).toEqual({
                name: 'thing1',
                durability:45,
                enhancement: 14
            })
        })
        it('decrease durability by 10, if enhancement is 15 and more', () => {
            let item = {
                name: 'thing1',
                durability: 50,
                enhancement: 15,
            }
            expect(fail(item)).toEqual({
                name: 'thing1',
                durability: 40,
                enhancement: 15
            })
        })
        it('decrease enhancement by 1, if enhancement is greater than 16', () => {
            let item = {
                name: 'thing1',
                durability: 50,
                enhancement: 19,
            }
            expect(fail(item)).toEqual({
                name: 'thing1',
                durability: 50,
                enhancement: 18
            })
        })
    })

    //succeed
    describe('succeed', ()=> {
        it('item enhancement increase by 1', () => {
            let item = {
                name: 'thing1',
                durability: 50,
                enhancement:15
            }
            expect(succeed(item)).toEqual({
                name: 'thing1',
                durability: 50,
                enhancement:16
            })
        })
        it('enhancement max is 20', () => {
            let item = {
                name: 'thing1',
                durability: 50,
                enhancement: 20
            }
            expect(succeed(item)).toEqual({
                name: 'thing1',
                durability:50,
                enhancement:20
            })
        })
    })
})

