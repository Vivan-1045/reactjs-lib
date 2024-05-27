function DummRender(dummyElement,container){
    // const dumElement = document.createElement(dummyElement.type)
    // dumElement.innerHTML = dummyElement.Children
    // dumElement.setAttribute('href',dummyElement.props.href)
    // dumElement.setAttribute('target',dummyElement.props.target)
    // container.appendChild(dumElement)

    //By using for in loop 
   const NewElement = document.createElement(dummyElement.type)
   NewElement.innerHTML = dummyElement.Children
   for (const pr in dummyElement.props) {
    if (pr == 'Children') continue; 
       NewElement.setAttribute(pr,dummyElement.props[pr])
        
   }
   container.appendChild(NewElement)
}

const dummyElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    Children : 'Click here to visit Google'
}



const NewRoot = document.querySelector('#root')
DummRender(dummyElement , NewRoot)



