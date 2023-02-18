
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { test } = useSelector(state => state.app)

  console.log(test)
  return (
    <div>
      <div>
        app
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>

  );
}

export default App;
