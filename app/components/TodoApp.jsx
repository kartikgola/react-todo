
let React = require('react');
let TodoList = require('TodoList');
let AddTodo = require('AddTodo');
let TodoSearch = require('TodoSearch');
let uuid = require('node-uuid');

let TodoApp = React.createClass({

  getInitialState : function() {
    return {
      showCompleted : false,
      searchText : '',
      todos : [
        {
          id : uuid(),
          text : 'Jog around colony'
        },
        {
          id : uuid(),
          text : 'Wash clothes'
        },
        {
          id : uuid(),
          text : 'Do some DP problems'
        },
        {
          id : uuid(),
          text : 'Learn React.js'
        }
      ]
    };
  },

  handleAddTodo : function(text){
    this.setState({
      todos : [
        ...this.state.todos,
        {
          id : uuid(),
          text : text
        }
      ]
    }, () => { alert('Added Todo'); });
  },

  handleSearch : function(showCompleted, searchText){
      this.setState({
        showCompleted : showCompleted,
        searchText : searchText.toLowerCase()
      });
  },

  render : function() {

    let {todos} = this.state;

    return (
      <div>

        <div className="row">
          <div className="small-4 small-centered columns">
            <h1 className="text-center"> TodoApp </h1>
          </div>
        </div>

        <div>
          <div className="small-4 small-centered columns">
            <TodoSearch handleSearch={this.handleSearch}/>
          </div>
        </div>

        <div className="row">
          <div className="small-4 small-centered columns">
            <TodoList todos={todos} />
          </div>
        </div>

        <div className="row">
          <div className="small-4 small-centered columns">
            <AddTodo handleAddTodo={this.handleAddTodo} />
          </div>  
        </div>

      </div>
    );
  }

});

module.exports = TodoApp;
