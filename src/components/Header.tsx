import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { addTodo } from './../actions'
import { Todo } from './../actions/actionType'

interface IContainerProps extends React.Props<Todo> {
  todos: Todo;
};

export class Header extends React.Component<IContainerProps, {}> {

  static propTypes = {
    todos: PropTypes.objectOf(
      PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        completed: PropTypes.bool,
      }),
  ).isRequired,
    addTodo: PropTypes.func
  }

  render() {
    
    const { id, text, completed } = this.props.todos;
    
    return (
      <View style={styles.welcome}>
        <TouchableOpacity onPressIn={() => addTodo('tdddd')}>
          <Text>归零sdfsdsdfsdf+++</Text>
          <Text>
            {id}-----{text} ------- {completed}
          </Text>
        </TouchableOpacity>
      </View>  
      
    );
  }
}

const mapStateToProps = (state: any) => state.todo;

const mapDispatchToProps = (dispatch: Dispatch<{}>) => {
  return {
    addTodo: (text: string) => dispatch(addTodo(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    margin: 50,
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
  },
});
