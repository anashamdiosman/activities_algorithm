import { useState } from "react";
import { useDispatch } from "react-redux";
import { postSurveyData } from "./redux/actions/survey1";
import "./style/index.scss";
import Modal from "./views/Modal";

function App() {
  const dispatch = useDispatch();

  const [gender, setGender] = useState(null);
  const [location, setLocation] = useState(null);
  const [sports, setSports] = useState(null);
  const [home, setHome] = useState(null);
  const [activities, setActivities] = useState(null);
  const [beach, setBeach] = useState(null);
  const [height, setHeight] = useState(null);
  const [strategy, setStrategy] = useState(null);

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postSurveyData({
        gender,
        location,
        sports,
        home,
        activities,
        beach,
        height,
        strategy,
      })
    );
    setGender(null);
    setLocation(null);
    setSports(null);
    setHome(null);
    setActivities(null);
    setBeach(null);
    setHeight(null);
    setStrategy(null);
  };

  return (
    <div className="bg-slate-50 text-slate-700 p-4">
      <Modal />
      <h1 className="text-2xl text-center mb-2">Activity Survey</h1>
      <div className="grid grid-cols-7 ">
        <form className="survey-form" onSubmit={handleSubmit}>
          {/* sports section start */}
          <fieldset className="border-2 p-2 mt-1">
            <legend className="block texr-center">
              <h3 className="text-lg ">
                <span className="text-red-400">* </span>Q1: What is your gender?
              </h3>
            </legend>
            <div className="grid grid-cols-4">
              <div className="col-span-2">
                <input
                  type="radio"
                  checked={gender === 1}
                  name="gender"
                  id="gendermale"
                  onChange={() => setGender(1)}
                />
                <label className="ml-2" htmlFor="gendermale">
                  Male
                </label>
              </div>
              <div className="col-span-2">
                <input
                  type="radio"
                  checked={gender === 2}
                  name="gender"
                  id="genderfemale"
                  onChange={() => setGender(2)}
                />
                <label className="ml-2" htmlFor="genderfemale">
                  Female
                </label>
              </div>
            </div>
          </fieldset>
          {/* sports section end */}
          {/* location section start */}
          <fieldset className="border-2 p-2">
            <legend className="block texr-center">
              <h3 className="text-lg ">
                <span className="text-red-400">* </span>Q2: Where are you based?
              </h3>
            </legend>
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <input
                  type="radio"
                  name="based"
                  id="abudhabi"
                  onChange={() => setLocation(1)}
                  checked={location == 1}
                />
                <label className="ml-2" htmlFor="abudhabi">
                  Abu Dhabi
                </label>
              </div>
              <div className="col-span-1">
                <input
                  type="radio"
                  name="based"
                  id="dubai"
                  onChange={() => setLocation(2)}
                  checked={location == 2}
                />
                <label className="ml-2" htmlFor="dubai">
                  Dubai
                </label>
              </div>
              <div className="col-span-1">
                <input
                  type="radio"
                  name="based"
                  id="sharjah"
                  onChange={() => setLocation(3)}
                  checked={location == 3}
                />
                <label className="ml-2" htmlFor="sharjah">
                  Sharjah
                </label>
              </div>
              <div className="col-span-1">
                <input
                  type="radio"
                  name="based"
                  id="ajman"
                  onChange={() => setLocation(4)}
                  checked={location == 4}
                />
                <label className="ml-2" htmlFor="ajman">
                  Ajman
                </label>
              </div>
              <div className="col-span-1">
                <input
                  type="radio"
                  name="based"
                  id="quwain"
                  onChange={() => setLocation(5)}
                  checked={location == 5}
                />
                <label className="ml-2" htmlFor="quwain">
                  Umm Al Quwain
                </label>
              </div>
              <div className="col-span-1">
                <input
                  type="radio"
                  name="based"
                  id="khaimah"
                  onChange={() => setLocation(6)}
                  checked={location == 6}
                />
                <label className="ml-2" htmlFor="khaimah">
                  Ras Al Khaimah
                </label>
              </div>
              <div className="col-span-1">
                <input
                  type="radio"
                  name="based"
                  id="fujairah"
                  onChange={() => setLocation(7)}
                  checked={location == 7}
                />
                <label className="ml-2" htmlFor="fujairah">
                  Fujairah
                </label>
              </div>
            </div>
          </fieldset>
          {/* location section end */}
          {/* sports section start */}
          <fieldset className="border-2 p-2 mt-1">
            <legend className="block texr-center">
              <h3 className="text-lg ">
                <span className="text-red-400">* </span>Q3: Do you like sports?
              </h3>
            </legend>
            <div className="grid grid-cols-4">
              <div className="col-span-2">
                <input
                  type="radio"
                  name="sports"
                  id="sportstrue"
                  checked={sports}
                  onChange={() => {
                    setSports(true);
                  }}
                />
                <label className="ml-2" htmlFor="sportstrue">
                  Yes
                </label>
              </div>
              <div className="col-span-2">
                <input
                  type="radio"
                  name="sports"
                  id="sportsfalse"
                  checked={sports === false}
                  onChange={() => {
                    setSports(false);
                  }}
                />
                <label className="ml-2" htmlFor="sportsfalse">
                  No
                </label>
              </div>
            </div>
          </fieldset>
          {/* sports section end */}
          {/* introvercy section start */}
          <fieldset className="border-2 p-2 mt-1">
            <legend className="block texr-center">
              <h3 className="text-lg ">
                <span className="text-red-400">* </span>Q4: Are you a home
                person or an outside preson?
              </h3>
            </legend>
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <input
                  type="radio"
                  name="home"
                  id="hometrue"
                  checked={home}
                  onChange={() => setHome(true)}
                />
                <label className="ml-2" htmlFor="hometrue">
                  Home
                </label>
              </div>
              <div className="col-span-1">
                <input
                  type="radio"
                  name="home"
                  id="homefalse"
                  checked={home === false}
                  onChange={() => setHome(false)}
                />
                <label className="ml-2" htmlFor="homefalse">
                  Outside
                </label>
              </div>
            </div>
          </fieldset>
          {/* introvercy section start */}
          {/* athlete section start */}
          <fieldset className="border-2 p-2 mt-1">
            <legend className="block texr-center">
              <h3 className="text-lg ">
                <span className="text-red-400">* </span>Q5: Do you enjoy
                participating in physical activties?
              </h3>
            </legend>
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <input
                  type="radio"
                  name="activities"
                  id="activitiestrue"
                  onChange={() => setActivities(true)}
                  checked={activities}
                />
                <label className="ml-2" htmlFor="activitiestrue">
                  Yes
                </label>
              </div>
              <div className="col-span-1">
                <input
                  type="radio"
                  name="activities"
                  id="activitiesfalse"
                  onChange={() => setActivities(false)}
                  checked={activities === false}
                />
                <label className="ml-2" htmlFor="activitiesfalse">
                  No
                </label>
              </div>
            </div>
          </fieldset>
          {/* athlete section start */}
          {/* beach section start */}
          <fieldset className="border-2 p-2 mt-1">
            <legend className="">
              <h3 className="text-lg ">
                <span className="text-red-400">* </span>Q6: How often do you go
                to the beach?
              </h3>
            </legend>
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <input
                  type="radio"
                  name="beach"
                  id="beachalw"
                  onChange={() => setBeach(1)}
                  checked={beach === 1}
                />
                <label className="ml-2" htmlFor="beachalw">
                  Always
                </label>
              </div>
              <div className="col-span-1">
                <input
                  type="radio"
                  name="beach"
                  id="beachoft"
                  onChange={() => setBeach(2)}
                  checked={beach === 2}
                />
                <label className="ml-2" htmlFor="beachoft">
                  Often
                </label>
              </div>
              <div className="col-span-1">
                <input
                  type="radio"
                  name="beach"
                  id="beachnev"
                  onChange={() => setBeach(3)}
                  checked={beach === 3}
                />
                <label className="ml-2" htmlFor="beachnev">
                  Never
                </label>
              </div>
            </div>
          </fieldset>
          {/* beach section end */}
          {/* height section start */}
          <fieldset className="border-2 p-2 mt-1">
            <legend className="block texr-center">
              <h3 className="text-lg ">
                <span className="text-red-400">* </span>Q7: How tall are you in
                cm?
              </h3>
            </legend>
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <input
                  className="bg-slate-100 ml-2 py-1 px-2"
                  type="number"
                  name="height"
                  id="height"
                  min="80"
                  max="220"
                  placeholder="E.g: 175"
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
            </div>
          </fieldset>
          {/* height section end */}
          {/* strategies section start */}
          <fieldset className="border-2 p-2 mt-1">
            <legend className="block texr-center">
              <h3 className="text-lg ">
                <span className="text-red-400">* </span>Q8: Would you try
                something envolving strategies?
              </h3>
            </legend>
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <input
                  type="radio"
                  name="strategy"
                  id="strategyyes"
                  onChange={() => setStrategy(1)}
                  checked={strategy === 1}
                />
                <label className="ml-2" htmlFor="strategyyes">
                  Yes
                </label>
              </div>
              <div className="col-span-1">
                <input
                  type="radio"
                  name="strategy"
                  id="strategymay"
                  onChange={() => setStrategy(2)}
                  checked={strategy === 2}
                />
                <label className="ml-2" htmlFor="strategymay">
                  Maybe
                </label>
              </div>
              <div className="col-span-1">
                <input
                  type="radio"
                  name="strategy"
                  id="strategyno"
                  onChange={() => setStrategy(3)}
                  checked={strategy === 3}
                />
                <label className="ml-2" htmlFor="strategyno">
                  Never
                </label>
              </div>
            </div>
          </fieldset>
          {/* stratigies section end */}
          <div className=" w-full text-center mt-2">
            <button
              type="submit"
              className="rounded-full bg-blue-300 p-2 w-1/4 m-2 text-black text-2xl hover:shadow-xl  border-blue-300 border-2 hover:border-slate-500 duration-200"
            >
              <span className="inline-flex">
                Send
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  fill="currentColor"
                  class="bi bi-send"
                  className="mt-1 ml-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                </svg>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
