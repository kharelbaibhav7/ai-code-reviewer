import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PlusCircle } from "lucide-react";
import './homePage.css'

const HomePage = () => {
    const [code, setCode] = useState("");
    const [improvisedCode, setImprovisedCode] = useState(""); // State to store the API response
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = { prompt: code };

        try {
            let result = await axios({
                method: "post",
                url: `http://localhost:8000/ai/command`,
                data: data,
            });
            console.log(result);
            setImprovisedCode(result.data); // Set the result data to state
            setCode(""); // Reset the input field
        } catch (error) {
            console.log(error);
        }

        navigate("/forum");
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10"
        >
            <h2 className="text-2xl font-bold text-center mb-6">Create a New Forum</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="Code" className="block text-lg font-medium mb-1">
                        Code:
                    </label>
                    <textarea
                        id="Code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none h-40"
                        placeholder="Enter your code..."
                    ></textarea>
                </div>
                <div className="flex justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
                    >
                        <PlusCircle className="w-5 h-5" />
                        Submit
                    </motion.button>
                </div>
            </form>

            {/* Display the result if available */}
            <div>
                <label className="block text-lg font-medium mb-1">
                    Here is the improvised code:
                </label>
                <p className="preformatted">{improvisedCode}</p> {/* Display the result */}
            </div>
        </motion.div>
    );
};

export default HomePage;


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { PlusCircle } from "lucide-react";

// const HomePage = () => {
//     const [code, setCode] = useState("");
//     const [improvisedCode, setImprovisedCode] = useState(""); // State to store the API response
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         let data = { prompt: code };

//         try {
//             let result = await axios({
//                 method: "post",
//                 url: `http://localhost:8000/ai/command`,
//                 data: data,
//             });
//             console.log(result);
//             setImprovisedCode(result.data); // Set the result data to state
//             // setCode(""); // Reset the input field
//         } catch (error) {
//             console.log(error);
//         }

//         navigate("/forum");
//     };

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10"
//         >
//             <h2 className="text-2xl font-bold text-center mb-6">Create a New Forum</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                     <label htmlFor="Code" className="block text-lg font-medium mb-1">
//                         Code:
//                     </label>
//                     <textarea
//                         id="Code"
//                         value={code}
//                         onChange={(e) => setCode(e.target.value)}
//                         className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none h-40"
//                         placeholder="Enter your code..."
//                     ></textarea>
//                 </div>
//                 <div className="flex justify-center">
//                     <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         type="submit"
//                         className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
//                     >
//                         <PlusCircle className="w-5 h-5" />
//                         Submit
//                     </motion.button>
//                 </div>
//             </form>

//             {/* Display the result if available */}
//             <div>
//                 <label className="block text-lg font-medium mb-1">
//                     Here is the improvised code:
//                 </label>
//                 {improvisedCode}{/* Display the result */}
//             </div>
//         </motion.div>
//     );
// };

// export default HomePage;



// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { PlusCircle } from "lucide-react";

// const HomePage = () => {
//     // const [title, setTitle] = useState("");
//     const [code, setCode] = useState("");
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         let data = { prompt: code };
//         console.log(data);

//         try {
//             let result = await axios({
//                 method: "post",
//                 url: `http://localhost:8000/ai/command`,
//                 data: data,
//                 // headers: {
//                 //     Authorization: `Bearer ${localStorage.getItem("token")}`,
//                 // },
//             });
//             console.log(result);
//             // setTitle("");
//             setCode("");
//         } catch (error) {
//             console.log(error);
//         }

//         navigate("/forum");
//     };

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10"
//         >
//             <h2 className="text-2xl font-bold text-center mb-6">Create a New Forum</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">

//                 <div>
//                     <label htmlFor="Code" className="block text-lg font-medium mb-1">
//                         Code:
//                     </label>
//                     <textarea
//                         id="Code"
//                         value={code}
//                         onChange={(e) => setCode(e.target.value)}
//                         className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none h-40"
//                         placeholder="Enter your code..."
//                     ></textarea>
//                 </div>
//                 <div className="flex justify-center">
//                     <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         type="submit"
//                         className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
//                     >
//                         <PlusCircle className="w-5 h-5" />
//                         Submit
//                     </motion.button>
//                 </div>
//             </form>




//             <div>
//                 <label className="block text-lg font-medium mb-1">
//                     Here is the improvised code
//                 </label>
//                 <p>
//                     {result.data}
//                 </p>
//             </div>
            


//         </motion.div>
//     );
// };

// export default HomePage;



// import React from 'react'

// const HomePage = () => {
//     return (
//         <div>
//             <label htmlFor="Code" className="block text-lg font-medium mb-1">
//                 Enter your code:
//             </label>
//             <textarea
//                 id="Code"
//                 // value={code}
//                 // onChange={(e) => setCode(e.target.value)}
//                 className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none h-40"
//                 placeholder="Write a detailed code..."
//             ></textarea>
//         </div>
//     )
// }

// export default HomePage