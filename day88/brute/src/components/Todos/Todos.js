import React, { useContext, useReducer, useState } from 'react';
import { PartyContext } from '../../providers/PartyProvider';
import { ProfileContext } from '../../providers/ProfileProvider';
import { generateRandomTodos } from '../../utils/utils';
import useWindowSize from '../../hooks/useWindowSize';
import TodoItem from './TodoItem';
import styles from './Todos.module.css';
import Confetti from './Confetti';

const Todos = () => {
  const [newTodoText, setNewTodoText] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [todos, dispatch] = useReducer(todosReducer, generateRandomTodos(500));
  const { currentUser } = useContext(ProfileContext);
  const { animationsEnabled } = useContext(PartyContext);
  const size = useWindowSize();

  const onAddNewTodo = (e) => {
    e.preventDefault();
    dispatch({
      type: 'add',
      // For this demo, we'll use the current timestamp as the id. In a production application, you would use a ID generator to ensure uniqueness.
      id: Date.now().toString(),
      text: newTodoText,
      user: currentUser,
    });

    setNewTodoText('');
  };

  const formatTodoText = (text, index) => {
    return `${text.toLowerCase()} (${index + 1} of 500)`;
  };

  return (
    <div className={styles.container}>
      <Confetti
        size={size}
        showConfetti={showConfetti}
        setShowConfetti={setShowConfetti}
      />
      <section className={styles.newTodoSection}>
        <form onSubmit={onAddNewTodo}>
          <label htmlFor='newTodo'>
            <input
              type='text'
              name='newTodo'
              id='newTodo'
              value={newTodoText}
              onChange={(e) => {
                setNewTodoText(e.target.value);
              }}
              placeholder='What do you have to do today?'
            />
          </label>
        </form>
      </section>
      <ol className={styles.list}>
        {todos.map((todo, index) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              index={index}
              formatTodoText={formatTodoText}
              animationsEnabled={animationsEnabled}
              setShowConfetti={setShowConfetti}
              dispatch={dispatch}
            />
          );
        })}
      </ol>
    </div>
  );
};

export default Todos;

const todosReducer = (todos, action) => {
  switch (action.type) {
    case 'add': {
      return [
        ...todos,
        {
          id: action.id,
          text: action.text,
          done: false,
          user: action.user,
        },
      ];
    }
    // This action is just for demo purposes. Dispatching this action will cause an error to be thrown. The Error Boundary should then appear.
    case 'add-error-todo': {
      return [
        ...todos,
        {
          id: 'bad-todo',
          text: undefined,
          done: false,
          user: action.user,
        },
      ];
    }
    case 'update': {
      return todos.map((t) => {
        if (t.id === action.todo.id) {
          return action.todo;
        } else {
          return t;
        }
      });
    }
    case 'delete': {
      return todos.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};
