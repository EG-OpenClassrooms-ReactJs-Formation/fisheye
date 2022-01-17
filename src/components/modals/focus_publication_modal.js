import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import { ContactButton } from "../contact_button";
import './focus_publication_modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { PublicationContentImage } from "../../utils/style/Atoms";
const ContactFormContainer = styled.form`
  display: flex;
  flex-direction: column;

  
`
const FocusModal = ({ isShowing, hide, id}) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
      
    <div className="focus-modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="focus-modal-container">
            <div className="focus-modal-row">
                <div className="focus-modal-icon-column">
                    <FontAwesomeIcon icon={faTimes} color="white" size="4x"/>
                    <FontAwesomeIcon icon={faChevronLeft} size="4x"/>
                    <FontAwesomeIcon icon={faTimes} color="white" size="4x"/>
                </div>
                <div className="focus-modal-column">
                    <PublicationContentImage />
                    <p>Arc-en-ciel</p>
                </div>
                <div className="focus-modal-icon-column">
                    <FontAwesomeIcon icon={faTimes} size="4x" onClick={hide}/>
                    <FontAwesomeIcon icon={faChevronRight} size="4x"/>
                    <FontAwesomeIcon icon={faTimes} color="white" size="4x"/>
                </div>
                
            </div>
        </div>
    </div>
    </React.Fragment>, document.body
) : null;
  
export default FocusModal;