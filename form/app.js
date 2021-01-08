let TextInput = () => {
    return <div>
        <input style={{color: "blue"}} type="text" id="name" name="name" required
       minlength="4" maxlength="8" size="10"/>
    </div>
}

let YesNoRadio = () => {
    return <div>
        <input style={{color: "green"}} type="radio" value="Yes" name="yes" /> Yes
        <input style={{color: "red"}} type="radio" value="No" name="no" /> No
    </div>
}

let SubmitButton = () => {
    return <div>
        <button style={{color: "green"}} type="submit">Submit</button>
    </div>
}

let Form = () => {
    return <div>
        <form>
            <TextInput />
            <TextInput />
            <TextInput />
            <YesNoRadio />
            <YesNoRadio />
            <SubmitButton />
        </form>
    </div>

}

//Make this Component render a form tag with 3 text inputs, two yes/no radio buttons, and a submit button 


ReactDOM.render(<Form />, document.getElementById('root'))