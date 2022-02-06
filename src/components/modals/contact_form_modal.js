import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import { ContactButton } from "../contact_button";
import './contact_form_modal.css';

const ContactFormContainer = styled.form`
  display: flex;
  flex-direction: column;

  
`
function onClickModalButton(){
  
  const firstNameField = document.getElementById("fname")
  const lastNameField = document.getElementById("lname")
  const emailField = document.getElementById("email")
  const messageField = document.getElementById("message")
  console.log("firstNameField is : " + firstNameField.value)
  console.log("lastNameField is : " + lastNameField.value)
  console.log("emailField is : " + emailField.value)
  console.log("messageField is : " + messageField.value)
}

// document.querySelector("#form_button").addEventListener("submit", function(event) {
//   console.log("Désolé ! preventDefault() ne vous laissera pas cocher ceci.");
//   event.preventDefault();
// }, false);


const ContactFromModal = ({ isShowing, hide, name }) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
      <div className="modal-background">
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
          <div className="modal">
              <div className="modal-header">
                  <div className="modal-title">
                      <h1>Contactez-moi</h1>
                      <h1>{name}</h1>
                  </div>
                  <div className="modal-close-container">
                    <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    
                  </div>
              </div>
              
              <ContactFormContainer>
                  <label htmlFor="fname">Prénom</label>
                  <input type="text" id="fname" name="fname" defaultValue=""/>
                  <label htmlFor="lname">Nom</label>
                  <input type="text" id="lname" name="lname" defaultValue=""/>
                  <label htmlFor="lname">Email</label>
                  <input type="email" id="email"/>
                  <label htmlFor="lname">Votre message</label>
                  <input type="text" id="message" name="message" defaultValue=""/>
                  <ContactButton id={'form_button'} onClick={onClickModalButton} text={'Contactez-moi'}/>
              
              </ContactFormContainer>
              
          </div>
        </div>
      </div>
    </React.Fragment>, document.body
) : null;

export default ContactFromModal;