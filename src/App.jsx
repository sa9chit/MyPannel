import "./App.css";
import { app } from "./firebase";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
const firestore = getFirestore(app);

const App = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const unSub = onSnapshot(
      collection(firestore, "Harshita"),

      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id, // each doc's unique Firestore ID
          ...doc.data(), // spread actual data
        }));
        setFeedbacks(data);
      }
    );

    return () => unSub();
  }, []);

  console.log(feedbacks);
  return (
    <div>
      <h1 className="mb-3 tracking-tighter font-extrabold">All Feedbacks</h1>
      {feedbacks.map((f, i) => (
        <div
          key={f.id}
          className="bg-amber-700 rounded-2xl mb-3 text-amber-50 tracking-tighter  font-semibold text-[10px] h-40 flex flex-col justify-center justify-center "
        >
          <div>
            {" "}
            <span className="font-bold text-[14px] text-gray-200">
              Reason :
            </span>{" "}
            {f.reason}
          </div>
          <div>
            {" "}
            <span className="font-bold text-[14px] text-gray-200">
              Mood :
            </span>{" "}
            {f.mood}
          </div>
          <div>
            {" "}
            <span className="font-bold text-[14px] text-gray-200">
              feedback :
            </span>{" "}
            {f.feedback}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
