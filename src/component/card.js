import React, { Component } from 'react';
import './card.css'
import cute from '../cute.png';

class Cards extends Component {
    render() {
      return (
        <div className="container">
          <div className="row">
            <div className="card">
                <div className="image">
                  <img src={this.props.cardData.imageUrl} />
                </div>
                <div className="detail">
                  <div className="name">{this.props.cardData.name}</div>
                  <div className="hp">HP</div>
                  <div className="str">Strong</div>
                  <div className="weak">Weak</div>
                  <div className="star"><img src={cute} style={{width: 20, height: 20}} /></div>
                </div>
            </div>
          </div>
        </div>
      );
    }
  }

export default Cards;