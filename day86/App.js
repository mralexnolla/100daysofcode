import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { AddThoughtForm } from "./AddThoughtForm";
import { Thought } from "./Thought";
import { generateId, getNewExpirationTime } from "./utilities";
import { logError } from "./error-logging-service";
import {ErrorBoundary} from "react-error-boundary";

const createThought = (text) => {
  return {
    id: generateId(),
    text,
    expiresAt: getNewExpirationTime(),
  };
};

function App() {
  const [thoughts, setThoughts] = useState([
    createThought("This is a place for your passing thoughts."),
    createThought("They'll be removed after 15 seconds."),
  ]);

  const addThought = (text) => {
    const thought = createThought(text);
    setThoughts((thoughts) => [thought, ...thoughts]);
  };

  const removeThought = (thoughtIdToRemove) => {
    setThoughts((thoughts) =>
      thoughts.filter((thought) => thought.id !== thoughtIdToRemove)
    );
  };
  
  // TODO: Upgrade this fallback component!
  const BlankThought = ({error, resetErrorBoundary, thought}) => {
    thought.text = error.message;
    const removeAndReset = () => {
      removeThought(thought.id);
      resetErrorBoundary();
    }
    return (
      <Thought
        removeThought={removeAndReset}
        key={thought.id}
        thought={thought}
      />
    );
  }

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <ErrorBoundary onError={logError} FallbackComponent={(props) => {
              return <BlankThought {...props} thought={thought}/>
            }}>
              <Thought
                removeThought={removeThought}
                key={thought.id}
                thought={thought}
              />
            </ErrorBoundary>
          ))}
        </ul>
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
