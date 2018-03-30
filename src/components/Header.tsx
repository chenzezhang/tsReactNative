import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { addTodo } from './../actions'
import { Todo } from './../actions/actionType'
import { Action } from 'redux-actions';

interface IContainerProps extends React.Props<Todo> {
  todos: Todo;
  addTodo: (id: number, text: string, completed: string) => Action<Todo>;
};

const mapStateToProps = (state: any) => ({todos: state.todos})

const mapDispatchToProps = (dispatch: Dispatch<{}>) => {
  return {
    addTodo: (id: number, text: string, completed: string) => dispatch(addTodo(id, text, completed))
  }
}

export class Header extends React.Component<IContainerProps, {}> {

  render() {
    
    const { id, text, completed } = this.props.todos;
    const { addTodo } = this.props;

    return (
      <View style={styles.welcome}>
        <TouchableOpacity onPressIn={() => addTodo(1,'test','第不知道多少钱次')}>
          <Text>归零sdfsdsdfsdf~~~</Text>
          <Text>
            {id}-----{text} ------- {completed}
          </Text>
        </TouchableOpacity>
      </View>  
      
    );
  }
}

// const mapStateToProps = (state: any) => state.todo;

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
