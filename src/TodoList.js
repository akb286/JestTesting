import React from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem } from './actions/items';

class TodoList extends React.Component {
  state = { name: '' }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state;
    this.props.dispatch(addItem(name));
    this.setState({ name: '' })
  }

  deleteItem = (index) => {
    this.props.dispatch(removeItem(index));
  }

  render() {
    const { name } = this.state;
    const { items } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            placeholder="Add Item"
            value={name}
            onChange={this.handleChange}
            required
          />
        </form>
      <hr />
      <ul>
       { items.map( (item, i) =>
           <li key={i}>
             {item}
             {' ' }
             <span style={{ color: 'red' }} onClick={() => this.deleteItem(i) }>X</span>
           </li>
         )
       }
     </ul>
   </div>
  )
 }
}

const mapStateToProps = (state) => {
  return { items: state.items }
}

export default connect(mapStateToProps)(TodoList);
