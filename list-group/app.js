let ListGroupItem = () => {
    return <div>
         <li className="list-group-item">Cras justo odio</li>
    </div>
}

let ListGroup = () => {
    
    return <div>
        <ul className="list-group">
  <ListGroupItem />
  <ListGroupItem />
  <ListGroupItem />
</ul>
    </div>
}


ReactDOM.render(<ListGroup />, document.getElementById('root'))