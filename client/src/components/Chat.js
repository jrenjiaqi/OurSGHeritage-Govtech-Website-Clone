import { Avatar, IconButton } from "@material-ui/core";
import { React, useState } from "react";
import "./Chat.css";
import {
  AttachFile,
  MoreVert,
  SearchOutlined,
  InsertEmoticon,
  Mic,
} from "@material-ui/icons";

function Chat({ messages }) {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
  };

  return (
    <div className="chat__outer__container">
      <div className="chat">
        <div className="chat__header">
          {/* Defines components in the chat header */}
          <Avatar src="images/sg-heritage-logo.png" />

          <div className="chat__headerInfo">
            {/* Room name and last seen at */}
            <h2>Join Our Conversation</h2>
          </div>

          <div className="chat__headerRight">
            {/* Three buttons on the right of chat header */}
            <SearchOutlined />
            <MoreVert />
          </div>
        </div>

        <div className="chat__body">
          <p className="chat__message">
            <span className="chat__name">Anonymous</span>
            <p className="chat__content">
            What would be really powerful will be hearing the stories directly
            from the survivors, and interacting with the survivors. I feel that
            it is really something very precious to hear their story personal
            story in their own words. It makes a lasting impression to hear from
            first-hand accounts.
            </p>
            <p className="chat__timestamp">12 Jan 2012</p>
          </p>

          <p className="chat__message">
            <span className="chat__name">Anonymous</span>
            <p className="chat__content">
            Storytelling and experiencing it will mean so much more than just
            showing. The underserved population will probably not have any
            intention of visiting museums and festivals as these serve no
            meaning to them. If stories could be shared with them at young age,
            they will show more interest in public activities and festivals!
            Also, food is the key to Singaporeans’ tummies! It always work.
            </p>
            <p className="chat__timestamp">12 Jan 2012</p>
          </p>

          <p className="chat__message">
            <span className="chat__name">Anonymous</span>
            <p className="chat__content">
            Introduce career opportunities for more archaeologists and heritage
            workers and include discussions on Singapore’s identity through
            education and information. Have events and activities that utilises
            old places and museums, combine VR technology to educate the public
            on the developments of the area. Also create a human volunteer bank
            based on the community to increase manpower for festivals and
            events.
            </p>
            <p className="chat__timestamp">12 Jan 2012</p>
          </p>

          <p className="chat__message chat__receiver">
            <span className="chat__name">Anonymous / Your Name</span>
            <p className="chat__content">Share with us your feedback!</p>
            <p className="chat__timestamp">12 Jan 2012</p>
          </p>
        </div>

        <div className="chat__footer">
          <InsertEmoticon />
          <AttachFile />
          <a className="chat__btn__link" href="/feedback">
            <button type="button" class="btn btn-primary btn-lg btn-block">GIVE FEEDBACK</button>   
          </a> 
          <Mic />  
        </div>
      </div>
    </div>
  );
}

export default Chat;
