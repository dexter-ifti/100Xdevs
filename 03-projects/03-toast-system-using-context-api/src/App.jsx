import useToast from "./hooks/useToast";

function App() {
  const { showToast } = useToast();

  return (
    <>
      <button onClick={() => showToast("Profile Updated", "success")}>
        Success Toast
      </button>

      <button onClick={() => showToast("Can't Delete this", "error")}>
        Error Toast
      </button>

      <button onClick={() => showToast("Everything is good", "info")}>
        Info Toast
      </button>
    </>
  );
}

export default App;