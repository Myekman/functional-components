import React from 'react'

function EventFunctional() {
    function clickHandeler() {
        console.log("is clicked");
    }
  return (
    <div>
        <button onClick = {clickHandeler}>click me- functional component</button> 
    </div>
  )
}

export default EventFunctional