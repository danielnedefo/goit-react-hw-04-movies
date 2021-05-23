import React,{Component} from 'react';

class FormSearch extends Component {
  state = {
    query:""
  }
  componentDidUpdate() {
    // console.log(this.state.query)
  }
  handleQuery = ({target}) =>{
    this.setState(({ query }) => {
        return {
        query:target.value
      }
    })
  }
  resetQuery = () => {
    this.setState(({ query }) => {
      return {
        query:""
      }
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    const { onSubmitForm } = this.props
    onSubmitForm(this.state.query)
    this.resetQuery()
  }
  idForm = 'kfsada'
  render() {
    const {handleQuery,onSubmit} = this
    return (
      <>
      <form onSubmit={onSubmit}>
        <label htmlFor={this.idForm}>Search Film</label>
        <input value={this.state.query} name="query" onChange={handleQuery} id={this.idForm}></input>
        <button type="submit">Search</button>
    </form>
    </>
    )
  }
}
 
export default FormSearch;