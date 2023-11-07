import React from "react";
import { useState } from "react";
const UserInput = ({onChange,userInput}) => {
  
  
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            onChange={(e) => onChange("initialInvestment", e.target.value)}
            value={userInput.initialInvestment}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e) => onChange("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expectated Return</label>
          <input
            type="number"
            required
            onChange={(e) => onChange("expectedReturn", e.target.value)}
            value={userInput.expectedReturn}
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            onChange={(e) => onChange("duration", e.target.value)}
            value={userInput.duration}
          ></input>
        </p>
      </div>
    </section>
  );
};

export default UserInput;
