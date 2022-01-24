import React, {useState, useEffect} from 'react';
import { Formik, useFormik } from 'formik';
import axios from 'axios';
import './Form.css';

const Form = ({setReload, setEditing, values, editing}) => {

  // ensures useEffect on [values] only fires when values are changed ...
  // ... and not on page load.
  const [firstRender, setFirstRender] = useState(true);

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // to store the JSON object, which has either user's input or '(none)' for Message textbox ('body' field).
  const [obj, setObj] = useState("");

  // Facilitates logic of replacing empty textbox for 'Message' field 
  // with textbox containing '(none)'
  // const [enterSubmit, setEnterSubmit] = useState(false);

  // show special message when symbols are used in Name field, as the
  // HTML validation service is not verbose on WHAT the specifications are
  // after rejecting name input containing symbols.
  const [nameSymbolsError, setNameSymbolsError] = useState(false);

  // Performs validation on name against special characters.
  React.useEffect(() => {
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if(format.test(name)){
      setNameSymbolsError(true);
    } else {
      setNameSymbolsError(false);
    }
  }, [name]);

  // Updates name, title, and body into obj hook ...
  // ... which is what 'Submit' or 'Edit' button will send. 
  React.useEffect(() => {
    // if not editing, don't need the 'id' field to make POST request.
    // if editing, need the 'id' field since we are making a PUT request to a particular id to edit.
    if (editing === false) {
      if(body === "") {
        setObj({name: name, title: title, body: "(none)"});
      } else {
        setObj({name: name, title: title, body: body});
      }
    } else {
      if(body === "") {
        setObj({id: JSON.parse(values).id, name: name, title: title, body: "(none)"});
      } else {
        setObj({id: JSON.parse(values).id, name: name, title: title, body: body});
      }
    }
  }, [name, title, body]);

  // checks if it's first render. If it is, don't parse any values, since 'edit' would not have sent any.
  // toggles first render hook for useEffect() below.
  React.useEffect(() => {
    setFirstRender(false);
  }, []);

  // fills in matching fields with fields in row to be editted.
  // then sends the fields as UPDATE request to endpoint to update row that matches id.
  React.useEffect(() => {
    if (firstRender === false) {
      setName(JSON.parse(values).name);
      setTitle(JSON.parse(values).title);
      setBody(JSON.parse(values).body);
    }
  }, [values]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editing === false) {

      const json = JSON.stringify(obj);
      // alert(json);

      const res = axios.post('http://localhost:3000/api/v1/feedbacks/', json, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
      });
    } else {

      const json = JSON.stringify(obj);
      console.log(json);
      console.log(`http://localhost:3000/api/v1/feedbacks/${JSON.parse(values).id}`);

      const res = axios.put(`http://localhost:3000/api/v1/feedbacks/${JSON.parse(values).id}`, json, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
      });
    }
    setName("");
    setTitle("");
    setBody("");
    
    // setEnterSubmit(false);

    setEditing(false);

    setReload(true);
  }

  const cancelEdit = () => {
    // default behaviour of button onClick is refresh page.
    setName("");
    setTitle("");
    setBody("");
    setObj("");
    setEditing(false);
  }
  
  return (
  <div className='form__container'>
    <h1>We'd Love to Hear From You!</h1>
    <form className="form__body" onSubmit={handleSubmit}>
      <label htmlFor="name">Name <span className="red">*</span></label>
      <input
        id="name"
        name="name"
        type="text"
        required="required"
        pattern="[A-Za-z\s]+"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      {nameSymbolsError ? <div className='error-msg'>Name cannot contain symbols!</div> : null}

      <label htmlFor="title">Title <span className="red">*</span></label>
      <input
        id="title"
        name="title"
        type="text"
        required="required"
        maxlength="50"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      {/* {formik.errors.title ? <div className="error-msg">{formik.errors.title}</div> : null} */}

      <label htmlFor="body">Message</label>
      <textarea 
        id="body" 
        name="body" 
        type="text" 
        placeholder="Write something.."
        value={body}
        onChange={e => setBody(e.target.value)}
      />
      <div>
        {editing === false ? <button className="submit-btn" type="submit">Submit</button> 
        : <button className="submit-btn" type="submit">Edit (id: {JSON.parse(values).id})</button>}
        {/* set button's type="button" to override button default behaviour of submitting form onClick */}
        {editing === true ? <button className="submit-btn cancel-edit-btn" type="button" onClick={cancelEdit}>Cancel Edit</button>
        : null}
      </div>
    </form>
  </div>
  );
};

export default Form;