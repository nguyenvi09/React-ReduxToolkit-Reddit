import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import EditPage from "./components/Edit/EditPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MakePost from "./components/Posts/MakePost";
import Posts from "./components/Posts/Posts";

function App() {
  const [isEdit, setEdit] = useState(false);
  const [isOpenPost, setOpen] = useState(false);

  const pending = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.error);
  return (
    <div className="App">
      {isEdit ? (
        <EditPage setEdit={setEdit} />
      ) : !isEdit && !isOpenPost ? (
        <>
          <Header setEdit={setEdit} />
          <div className="post-container">
            <Posts />
          </div>
          <Footer isOpenPost={isOpenPost} setOpen={setOpen} />
        </>
      ) : (
        <>
          <Header setEdit={setEdit} />
          <MakePost setOpen={setOpen} />
        </>
      )}

      {pending && <p className="loading">Loading...</p>}
      {!isEdit && error && (
        <p className="error">Error when fetching data from server!!!</p>
      )}
    </div>
  );
}

export default App;
