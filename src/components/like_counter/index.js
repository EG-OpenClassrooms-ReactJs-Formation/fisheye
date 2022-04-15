
import { Component } from 'react';
import styled from 'styled-components';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export function LikeDisplay({likeCounter, price}) {
    
    return (
        <div className="like-display-wrapper">
            <div className="like-display-counter">
                <p className="like-display-counter-number">{likeCounter}</p>
                <FontAwesomeIcon icon={faHeart} />
            </div>

            <p className="like-display-price">
                {price}€  / jour
            </p>
        </div>
    )
}