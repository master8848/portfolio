import React from "react";
import Website from "../components/Website.jsx";
import expence_Chart from "../images/expence_chart.PNG";
import countdown_Timer from "../images/countdown.PNG";
import rating_Component from "../images/rating_component.PNG";
import guess_My_Number from "../images/game.PNG";
import wordle from "../images/Wordle.PNG";

const Portfolio = () => {
  return (
    <div className="container" id="portfolio">
      <Website
        image={expence_Chart}
        caption="Expence Chart"
        link="http://github.com/master8848/expenses-chart-component-main"
      />
      <Website
        image={countdown_Timer}
        caption="Countdown timer"
        link="http://github.com/master8848/frontend-mentod-countdowntimer"
      />
      <Website
        image={rating_Component}
        caption="Rating component"
        link="http://github.com/master8848/frontendmentor-rating-challange"
      />
      <Website
        image={guess_My_Number}
        caption="Guess my number"
        link="https://github.com/master8848/Simple-FrontEnd-App/tree/main/Guess-my-number"
      />
      <Website
        image={wordle}
        caption="Wordle"
        link="https://github.com/master8848/Simple-FrontEnd-App/tree/main/wordle-clone"
      />
    </div>
  );
};

export default Portfolio;
