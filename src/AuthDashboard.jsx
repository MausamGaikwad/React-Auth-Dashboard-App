import { useReducer, useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { UserContext } from "./UserContext";

// Reducer logic
function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, completed: state.completed + 1 };
    case "DECREMENT":
      return { ...state, pending: Math.max(0, state.pending - 1) };
    case "RESET":
      return { completed: 0, pending: 5 };
    default:
      return state;
  }
}

const initialCounterState = {
  completed: 0,
  pending: 0,
};

function AuthDashboard() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, logIn, logOut } = useContext(UserContext);

  const [taskState, dispatch] = useReducer(counterReducer, initialCounterState);

  const styles = {
    backgroundColor: theme === "light" ? "#f9f9f9" : "#1e1e1e",
    color: theme === "light" ? "#333" : "#f9f9f9",
    textAlign: "center",
    padding: "50px 20px",
    minHeight: "100vh",
    fontFamily: "Segoe UI, sans-serif",
    transition: "all 0.4s ease-in-out",
  };
  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: theme === "light" ? "#333" : "#f9f9f9",
    color: theme === "light" ? "#f9f9f9" : "#333",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: "bold",
  };
  const taskButtonStyle = {
    padding: "8px 16px",
    margin: "5px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "#fff",
  };
  const authButtonStyle = {
    padding: "10px 18px",
    fontSize: "16px",
    borderRadius: "6px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
  };
  return (
    <div style={styles}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
        🧩 Auth Dashboard App
      </h1>
      <h2>🌗 Current Theme: {theme.toUpperCase()}</h2>
      <button onClick={toggleTheme} style={buttonStyle}>
        {theme === "light" ? "Dark mode" : "Light Mode"}
      </button>

      <hr style={{ margin: "20px 0" }} />
      <div
        style={{
          border: "2px solid #ccc",
          borderRadius: "12px",
          padding: "20px",
          margin: "30px auto",
          width: "300px",
          backgroundColor: theme === "light" ? "#fff" : "#333",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2>🗂️ Task Manager</h2>
        <p>✅ Completed Tasks: {taskState.completed}</p>
        <p>🕓 Pending Tasks: {taskState.pending}</p>

        <button
          style={taskButtonStyle}
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          + Complete Task
        </button>
        <button
          style={taskButtonStyle}
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          - Remove Pending
        </button>
        <button
          style={taskButtonStyle}
          onClick={() => dispatch({ type: "RESET" })}
        >
          🔄 Reset
        </button>
      </div>
      <hr style={{ margin: "20px 0" }} />
      <div
        style={{
          border: "2px dashed #888",
          borderRadius: "12px",
          padding: "20px",
          marginTop: "40px",
          backgroundColor: theme === "light" ? "#f9f9f9" : "#2e2e2e",
        }}
      >
        {user ? (
          <>
            <h3>Hello, {user}!</h3>
            <button style={authButtonStyle} onClick={logOut}>
              🚪 Log Out
            </button>
          </>
        ) : (
          <>
            <h3>Please Log In To Continue</h3>
            <button style={authButtonStyle} onClick={logIn}>
              🔐 Log In
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default AuthDashboard;
