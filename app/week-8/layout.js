"use client";

import { AuthContextProvider } from "../week-9/_utils/auth-context";

const Layout = ({ children }) => {
    return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default Layout;