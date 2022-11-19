import React, {Fragment, useState } from "react";


import '../App.css';
  function App() {
    const [form, setForm] = useState([
        { label: "", responses:  [{ value: "", isRightResponse: false }]}
      ]);
        
    return(
        <Fragment>
 <button
          onClick={() => {
            const formCopy = [...form];
            formCopy.push({ label: "", responses: [{ value: "", isRightResponse: false }] });   // Here you add 2 input fields (1 question and 1 response)
            setForm(formCopy);
          }}
        >
        Add Question
        </button>
        {form.map((question, key) => (
          <div className="..." key={key}>
            <label>Question {key + 1}</label>
            <button
              onClick={() => {
                const formCopy = [...form];
                formCopy[key].responses.push({value: "", isRightResponse: false});  // Here you add one input field as a response for the selected question
                setForm(formCopy);
              }}
            >
            Add response
            </button>
            <input
              type="text"
              value={question.label}
              onChange={(e) => {
                const formCopy = [...form];
                formCopy[key].label = e.target.value;
                setForm(formCopy);
              }}
            />
            {question.responses.map((response, index) => (
              <div key={index}>
                <label>Response {index + 1}</label>
                <input
                  type="text"
                  value={response.value}
                  onChange={(e) => {
                    const formCopy = [...form];
                    formCopy[key].responses[index].value = e.target.value;
                    setForm(formCopy);
                  }}
                />
                <label>Right response ?</label>
                <input
                  type="checkbox"
                  defaultChecked={response.isRightResponse}
                  onChange={(e) => {
                    const formCopy = [...form];
                    formCopy[key].responses[index].isRightResponse =
                      e.target.checked;
                    setForm(formCopy);
                      }}
                    />
              </div>
            ))}
          </div>
        ))}


        </Fragment>
       


    )
    }

    export default App;