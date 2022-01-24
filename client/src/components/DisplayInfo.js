import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './DisplayInfo.css'

function DisplayInfo({reload, setReload, setValues, setEditing}) {
  const [feedback, setFeedback] = React.useState(null);

    React.useEffect(() => {
        loadFeedback();
    }, []);

    React.useEffect(() => {
        loadFeedback();
        console.log("reloaded");
        setReload(false);
        console.log(reload);
    }, [reload]);

    const loadFeedback = async () => {
            axios.get('http://localhost:3000/api/v1/feedbacks/').then((response) => {
            setFeedback(response.data);
        });
    }

    const editFeedback = (id, name, title, body) => {
        // alert("editing");      
        const obj = {id, name, title, body};
        setValues(JSON.stringify(obj));
        setEditing(true); // sets editing to true so form button in <Form /> changes from 'Submit' -> 'Edit'
        // alert("sent " + obj);
    }

    const deleteFeedback = async id => {
        await axios.delete(`http://localhost:3000/api/v1/feedbacks/${id}`);
        loadFeedback();
    }

    if (!feedback) return null;

    // console.log(feedback.data[0].title)

  return (
    <div className='displayInfo__container'>
        <table className="displayInfo__table">
            <thead>
                <tr>
                    {/* colSpan="0" means to horizontally span as much as possible */}
                    <th colSpan="6" id="table__header">Manage Your Feedbacks</th>
                </tr>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Message</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {
                feedback.data.map((elem) => (
                    <tr>
                        <td>{elem.id}</td>
                        <td>{elem.name}</td>
                        <td>{elem.title}</td>
                        <td>{elem.body}</td>
                        <td><a className='clickable' onClick={() => editFeedback(elem.id, elem.name, elem.title, elem.body)}>Edit</a></td>
                        <td><a className='clickable' onClick={() => deleteFeedback(elem.id)}>Delete</a></td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    </div>
  );
}

export default DisplayInfo;
