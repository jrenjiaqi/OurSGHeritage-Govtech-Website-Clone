import React, { useState, useEffect } from 'react';
import '../../App.css';
import DisplayInfo from '../DisplayInfo';
import Form from '../Form';

export default function SignUp() {

  // Facilitates reloading info table upon submission of new entry.
  const [reload, setReload] = useState(false);

  /* Facilitates edit functionality:
   * <DisplayInfo /> -> (JSON string of fields + id) -> <Form />
   *   text fields in <Form /> are filled in with values ...
   *   ... from target of edit operation in <DisplayInfo /> 
   * + id is available 
   * = can do UPDATE on corresponding api (as denoted by api)
   */
  const [values, setValues] = useState(null);
  
  // facilitates checking whether user is submitting new entry or editing ...
  // ... across components.
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Form setReload={setReload} setEditing={setEditing} values={values} editing={editing}/>
      <DisplayInfo reload={reload} setReload={setReload} setValues={setValues} setEditing={setEditing} />
    </>
  );
}
