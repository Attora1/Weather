import React from 'react'
import ReactDom from 'react-dom'
import Nav from '../Navbar'

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDom.render(<Nav />, div);
    ReactDom.unmountComponentAtNode(div);
})