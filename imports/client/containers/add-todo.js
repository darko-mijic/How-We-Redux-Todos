import React from 'react';
import { connect } from 'react-redux';
import AddTodo from '../../client/components/AddTodo';
import addTodo from '../../../imports/client/actions/addTodo';

const state = (state) => {
  return {
  };
};

const actions = (dispatch) => {
  return {
    onAddTodo: (text) => { dispatch( addTodo(text) ); }
  }
};

export default connect(state, actions)(AddTodo);