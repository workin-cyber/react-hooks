import React from 'react'

export default function Effect() {
    const [count, setCount] = React.useState(0)//set new hook as state
    const [count2, setCount2] = React.useState(0)

    //רק בפעם הראשונה
    //componentdidMount
    React.useEffect(() => {
        console.log('render 1')

        //componentWillUnmount
        //clean-up
        return () => {
            console.log('unmount')
        }
    }, [])

    //כל שינוי בקומפוננט
    //כולל בפעם הראשונה
    //componentdidUpdate
    React.useEffect(() => {
        console.log('render 2')
    })

    //only when "count2" changes
    //componentdidUpdate
    React.useEffect(() => {
        console.log('render on update (count2)')
    }, [count2])

    return <>
        <h1>You clicked {count} times</h1>
        <button onClick={() => setCount(count + 1)}>Click me!</button>
        <h1>You clicked {count2} times</h1>
        <button onClick={() => setCount2(count2 + 1)}>Click me!</button>
    </>
}