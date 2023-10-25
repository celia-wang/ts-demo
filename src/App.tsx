/* eslint-disable @typescript-eslint/no-unused-vars */
import { type FC } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Login from "./views/login/Login";
import Container from "./layout";
import Foo from "./views/Foo";
import Bar from "./views/Bar";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route path="/" element={<Foo />} />
          <Route path="/bar" element={<Bar />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
