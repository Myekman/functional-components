import React, { Component } from "react";
import css from './css/Content.module.css'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: true,
            isLoggedIn: true,
        }
    };

    render() {
        return (
            <div className = {css.contentstyle}>
                <h1>{this.state.isLoaded ? "Loaded" : "Loading..."}</h1>
             {this.state.isLoggedIn ? (
               <div>
                 <p>Welcome to the site! Please complete the steps below:</p>
                 <ol>
                   <li>Confirm your email</li>
                   <li>Complete your profile</li>
                   <li>Subscribe to the newsletter</li>
                 </ol>
               </div>
             ) : (
               <p>Please sign in</p>
             )}
           </div>
        )
    }
}

export default ConditionalRenderingClass