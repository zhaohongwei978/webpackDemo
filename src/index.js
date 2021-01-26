import React from 'react'
import ReactDOM from 'react-dom'
class Index extends React.Component{
     render(){
         return <div className='container'>
                121212
                <img src="./images/dog.jpg"  alt="上海鲜花港 - 郁金香" />
             </div>
     }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('app')
)