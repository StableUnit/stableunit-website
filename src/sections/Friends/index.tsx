import React from "react";

import "./styles.scss";
import Scroller from "../../components/Scroller";

const Friends = () => (
    <div className="friends">
        <div className="title container">Protocol friends</div>
        <Scroller>
            <img className="friends__image" src="./img/friends/ambire.png" alt="Ambire" />
            <img className="friends__image" src="./img/friends/doki-doki.png" alt="Doki Doki" />
            <img className="friends__image" src="./img/friends/aura-finance.png" alt="Aura Finance" />
            <img className="friends__image" src="./img/friends/via.png" alt="Via" />
            <img className="friends__image" src="./img/friends/dao-helper.png" alt="DAO Helper" />
        </Scroller>
    </div>
);

export default Friends;
