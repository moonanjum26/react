import React from 'react'

//function Greet(){
  //    return <h1> hello Mahwish</h1>
//}

const Greet = (props) => {
    const {name, charName}=props
    //console.log(props)
    return (
        <div>
       <h1>hello {name} a.k.a {charName}</h1>
    
       </div>
       )

}
export default Greet;