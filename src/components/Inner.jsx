import { memo } from "react"

function Inner(){

    console.log('Inner is called')
    return(
        <>Yeh fazool hai afnan</>
    )
}

export default memo(Inner)