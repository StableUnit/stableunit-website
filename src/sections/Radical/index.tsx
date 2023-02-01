import React from "react";

import "./styles.scss";

const Radical = () => (
    <div className="radical container">
        <div className="title">Radical decentralization</div>
        <div className="radical__content">
            <div className="radical__content__text">
                At the heart of radical decentralization is the idea of full transparency. On the blockchain , all
                transactions are already open but control is not.
                <br />
                <br />
                StableUnitDAO gives the power back to the community. Decisions are made by the collective, rather than
                by a centralized authority. This allows for a more inclusive and democratic approach, where millions can
                have a say in the direction and management of the protocol.
                <br />
                <br />
                StableUnitDAO is designed in such a way that the whole crypto community can become the owners and
                beneficiaries of the system. Half the governance power goes to financial capital in the form of erc20
                tokens, but the other half goes to social capital in form or NFT that represent the reputation of users.
                <br />
                <br />
                The more you contribute - the higher voting power you have.
            </div>
            <img src="./img/radical.png" alt="Quote" />
        </div>
    </div>
);

export default Radical;
