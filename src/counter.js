import React from 'react'

/* export class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    render() {
        const { count } = this.state
        return <div>
            <h1>You clicked {count} times</h1>
            <button onClick={() => this.setState({ count: count + 1 })}>Click me!</button>
            </div>
        }
    } */

export default function Counter() {
    const [count, setCount] = React.useState(0)
    const [bgColor, setBGColor] = React.useState('green')
    const [obj, setObj] = React.useState({ a: 1, b: 2 }) //רק אם חייבים אובייקט

    return <div>
        <h1>You clicked {count} times</h1>
        <h1>{JSON.stringify(obj)}</h1>
        <button onClick={() => setCount(count + 1)}>Click me!</button>
        <button onClick={() => setObj({ ...obj, a: 3 })}>Click me2!</button>
        {/* <button onClick={() => setObj(currObj => ({ ...currObj, a: currObj.a + 1 }))}>Click me2!</button> */}

        <div
            onClick={() => setBGColor(() => bgColor == 'green' ? 'red' : 'green')}
            style={
                { backgroundColor: bgColor, width: 100, height: 100, border: '1px solid', margin: '10px auto' }
            }
        ></div>
    </div>
}



/* export function Counter() {
    const [count, seCount] = React.useState(0)

    return <div>
        <h1>You clicked {count} times</h1>
        <button onClick={() => seCount(count + 1)}>Click me!</button>
    </div>
}  */