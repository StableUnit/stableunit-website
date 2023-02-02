import React from "react";

import "./styles.scss";

const Friends = () => (
    <div className="friends">
        <div className="title container">Protocol friends</div>
        <div className="friends__scroller-container">
            <div className="friends__scroller">
                <div className="friends__text">Let’s become friends</div>
                <img className="friends__image" src="./img/friends/ambire.png" alt="Ambire" />
                <img className="friends__image" src="./img/friends/doki-doki.png" alt="Doki Doki" />
                <img className="friends__image" src="./img/friends/aura-finance.png" alt="Aura Finance" />
                <img className="friends__image" src="./img/friends/via.png" alt="Via" />
                <img className="friends__image" src="./img/friends/dao-helper.png" alt="DAO Helper" />
            </div>
        </div>
    </div>
);

export default Friends;
