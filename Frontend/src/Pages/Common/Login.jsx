import React, { useEffect } from "react";

import LoginForm from "../../Component/Common/LoginForm";
import useScrolltoTop from "../../Custom Hooks/useScrolltoTop";

function Login() {

    useScrolltoTop();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <LoginForm/>
    </main>
  );
}

export default Login;
