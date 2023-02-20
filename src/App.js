
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Home, Login, Public } from './containers/public/'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from 'react-router-dom'
import path from './ultis/path'
import { useEffect } from "react";
import * as actions from './store/actions'

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(actions.getHome())
  },[])
  return (
    <div>
      <div>
        <Routes>
          <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.LOGIN} element={<Login />} />

            <Route path={path.STAR} element={<Home />} />

          </Route>
        </Routes>
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
