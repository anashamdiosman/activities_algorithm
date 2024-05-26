import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../style/modal.scss";

function Modal() {
  const { showModal, survey1 } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    showModal && (
      <div className="w-full fixed text-slate-50 top-1/6 ">
        <div className="mx-auto z-10 w-1/2 bg-gray-700 p-8 shadow-2xl rounded-lg">
          <div className="w-full">
            {survey1 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="green"
                className="bi bi-check2-circle mx-auto"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
              </svg>
            )}
          </div>
          {survey1?.map((val, idx) => (
            <div className="mt-8" key={idx}>
              <h4 className="text-xl">
                {idx + 1} - our {idx == 0 ? "first" : "second"} recomendation is{" "}
                {val.activity}, and based on your location in {val.city_name}{" "}
                here is where you can practice it: {val.location}.
              </h4>
            </div>
          ))}
          <div className="w-full text-center">
            <button
              className="mx-auto bg-blue-400 rounded-full text-lg mt-4 p-2 text-slate-100 w-1/3"
              onClick={() => {
                dispatch({ type: "HIDE_MODAL" });
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default Modal;
