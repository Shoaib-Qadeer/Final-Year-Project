import React from "react";
import "./NQuestions.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { TagsInput } from "react-tag-input-component";
import { ToastContainer, toast } from "react-toastify";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
// import Tag from "../../components/Tag Component/Tags";
const NQuestion = () => {
  const [file, setFile] = useState("");
  const [selected, setSelected] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function addquestion(event) {
    if (selected.length != 0 && title != "" && description != "") {
      event.preventDefault();
      toast("Added Successful!");
      // alert("Question Added Successfully" + selected);
      alert(title + selected + description);
      const response = await fetch("http://localhost:1337/questions/addnew", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          selected,
          // title,
        }),
      });

      const data = await response.json();
      if (data.status == "ok") {
        alert("Question Added Successfully");
      } else {
        alert("Error in Adding Question");
      }
    } else {
      if (selected.length == 0) {
        alert("Please Select a Domain");
      } else if (title == "") {
        alert("Please Enter a Title");
      } else if (description == "") {
        alert("Please Enter a Description");
      }
    }
  }
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Ask a Question</h1>
        </div>
        <div className="bottom">
          <div className="left" style={{ "padding-top": "80px" }}>
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
            <div className="formInput">
              <label htmlFor="file">
                Add Files: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </div>
          </div>

          <div className="right">
            <form onSubmit={addquestion}>
              <div className="formInput">
                <label style={{ "font-style": "bold", "font-weight": "800" }}>
                  Enter Question Title
                </label>
                <input
                  type="text"
                  placeholder="What is React? etc"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div
                className="formInput"
                style={{
                  "font-style": "bold",
                  "font-weight": "800",
                  "marigin-bottom": "10px",
                }}
              >
                <label>Enter Question Description</label>

                <textarea
                  className="inputt"
                  name="Text1"
                  cols="40"
                  rows="5"
                  placeholder="Enter Complete Description of your Question"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div
                className="formInput"
                style={{ "font-style": "bold", "font-weight": "800" }}
              >
                <label>Enter Tags (Domain of the Question ) </label>
                {/* <Tag /> */}
                <TagsInput
                  value={selected}
                  onChange={setSelected}
                  name="qdomain"
                  placeHolder="enter related domain"
                />
              </div>

              <button className="gabutton">Send</button>
            </form>
            <ToastContainer
              position="top-right"
              autoClose={20000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NQuestion;
