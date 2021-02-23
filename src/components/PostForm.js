import React from 'react';

export default class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }
    }

    submitHandler = event => {
        event.preventDefault()

        const {title} = this.state

        const newPost = {
            title, id: Date.now().toString()
        }

        console.log(newPost);

        this.setState({title: ''})
    }

    inputHandler = event => {
        this.setState(prev => ({...prev, ...{
            [event.target.name]: event.target.value
        }}))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
              <div className="form-group">
                <label htmlFor="title">Заголовок поста</label>
                <input
                   type="text"
                   className="form-control"
                   id="title"
                   value={this.state.title}
                   name="title"
                   onChange={this.inputHandler}
                />
              </div>
               <button className="btn btn-success" type="submit">Создать</button>
            </form>
        )
    }
}