"use client"
import axios from "axios";
import { useRouter } from "next/navigation";

const profile = () => {
    const router = useRouter();
    const logout = async () => {
        console.log("CLICK ON LOGOUT:")
        try {
            await axios.get("/api/users/logout");
            router.push("/login");
        } catch (error: any) {
            console.log("Error", error.message);
        }
    }
    return (
        <div className="flex flex-col ">
            <div className="text-white">Profile-Page</div>
            <button
                className="bg-blue-500 hover:bg-blue-700
             text-white font-bold py-1.5 
             px-8 my-6 rounded"
                onClick={logout}
            >
                Logout
            </button>
        </div>
    )
}

export default profile