import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createPost } from '../actions'


class PostsNew extends Component {

  render () {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field name="title" label="Title" component={this.renderField} />
        <Field name="categories" label="Categories" component={this.renderField} />
        <Field name="content" label="Post Content" component={this.renderField} />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }

  renderField (field) {
    const { meta: { touched, error } } = field
    const formClasses = `form-group ${touched && error && 'has-danger'}`

    return (
      <div className={ formClasses }>
        <label>{ field.label }</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">{ touched && error }</div>
      </div>
    )
  }
  
  onSubmit (values) {
    this.props.createPost(values, () => this.props.history.push("/"))
  }
}

function validate ({ title, categories, content}) {
  const errors = {}

  if (!title) {
    errors.title = "Enter a title!"
  }
  if (!categories) {
    errors.categories = "Enter some categories!"
  }
  if (!content) {
    errors.content = "Enter some content!"
  }

  return errors
}

export default reduxForm(
  { form: 'PostsNewForm', validate }
)(
  connect(null, { createPost })(PostsNew)
)