let ListGroupItem = (props) => {
    return <div>
         <li className="list-group-item">{props.text}</li>
    </div>
}

let ListGroup = () => {
    
    return <div>
        <ul className="list-group">
  <ListGroupItem text="first list item"/>
  <ListGroupItem text="second list item"/>
  <ListGroupItem text="third list item"/>
</ul>
    </div>
}


ReactDOM.render(<ListGroup />, document.getElementById('root'))