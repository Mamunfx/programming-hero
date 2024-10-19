import { useState } from "react"

export default function StateManage() {
    const [totalCount,CountFunction]=useState(0)

    return(
        <div>
            <h1>Total number of count : {totalCount}</h1>
            <button onClick={add}></button>
            <button onClick={remove}></button>
        </div>
    )
}