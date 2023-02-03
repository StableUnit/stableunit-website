import React from "react";

import "./styles.scss";

const Friends = () => (
    <div className="friends container">
        <div className="title">Protocol friends</div>
        <div className="friends__content">
            <img className="friends__image" src="./img/friends/ambire.png" alt="Ambire" />
            <img className="friends__image" src="./img/friends/doki-doki.png" alt="Doki Doki" />
            <img className="friends__image" src="./img/friends/aura-finance.png" alt="Aura Finance" />
            <img className="friends__image" src="./img/friends/via.png" alt="Via" />
            <img className="friends__image" src="./img/friends/dao-helper.png" alt="DAO Helper" />
        </div>
    </div>
);

export default Friends;
