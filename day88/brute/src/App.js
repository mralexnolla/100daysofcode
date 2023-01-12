import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import Header from "./components/Header/Header";
import Todos from "./components/Todos/Todos";
import PartyProvider from "./providers/PartyProvider";
import ProfileProvider from "./providers/ProfileProvider";

function App() {
  return (
    <ProfileProvider>
      <PartyProvider>
        <Header />
        <main>
          <ErrorBoundary
            fallbackRender={({ error, resetErrorBoundary }) => {
              return (
                <div>
                  <h2>An error occurred in todos!!</h2>
                  <p>{error.name}</p>
                  <p>{error.message}</p>
                  <button onClick={resetErrorBoundary}>Restart</button>
                </div>
              );
            }}
          >
            <Todos />
          </ErrorBoundary>
        </main>
      </PartyProvider>
    </ProfileProvider>
  );
}

export default App;
