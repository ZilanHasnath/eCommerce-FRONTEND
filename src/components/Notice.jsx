import React, { useEffect, useState } from "react";



const Notice = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const dismissed = sessionStorage.getItem("backendNoticeClosed");
        if (!dismissed) setShow(true);
    }, []);

    const handleClose = () => {
        sessionStorage.setItem("backendNoticeClosed", "true");
        setShow(false);
    };

    if (!show) return null;




    return (

        <div className="fixed inset-0 flex items-center justify-center z-50">

            <div className="relative bg-amber-300 max-w-lg w-[90%] p-10 rounded-3xl shadow-2xl text-center flex flex-col items-center gap-6">
                <div className="text-5xl animate-bounce">🚀</div>

                <h2 className="text-3xl font-extrabold text-gray-900">
                    We are using a FREE server
                </h2>



                <p className="text-gray-800 text-lg leading-relaxed">
                    It may take up to{" "}
                    <span className="font-semibold text-black">30 sec.</span> to respond.
                    <br /> Please wait!
                </p>



                <button onClick={handleClose} className="mt-2 px-8 py-3 rounded-xl bg-black text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
                    Close
                </button>


                <button onClick={handleClose} className="absolute top-4 right-5 text-2xl text-gray-700 hover:text-red-600 transition">
                    ✕
                </button>
            </div>


        </div>
    );
};

export default Notice;

