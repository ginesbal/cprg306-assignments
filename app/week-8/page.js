"use client";

import Link from "next/link";
import { useUserAuth } from "../week-9/_utils/auth-context";

const Page = () => {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
    return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
        {!user ? (
            <button
                onClick={gitHubSignIn}
                className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                    Login with GitHub</button>
        ) : (
            <div className="p-6 bg-neutral-300 rounded shadow-lg text-center">
                <h2 className="mb-4 text-xl text-black font-semibold">
                    <p>Welcome,<span className="font-extrabold"> {user.displayName}</span>
                    </p>
                    <p className="text-sm font-normal ">
                        ({user.email})
                    </p>
                </h2>
                <Link href="/week-8/shopping-list">
                    <p className="mt-8 mb-3 px-4 py-2 font-semibold text-white bg-yellow-600 rounded hover:bg-yellow-700">
                        View Shopping List
                    </p>
                </Link>
                <button
                    onClick={firebaseSignOut}
                    className="px-4 py-2 mb-2 font-semibold text-black text-sm font-semibold hover:underline hover:text-yellow-700"
                    >
                        Logout
                </button>
            </div>
        )}
    </div>
    );
};

export default Page;


