import React from 'react'
import ReactDom from 'react-dom'
import Form from '../Form2'

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDom.render(<Form />, div);
})