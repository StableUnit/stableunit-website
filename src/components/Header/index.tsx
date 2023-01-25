import React from 'react';
import Href from "../Href";
import {SOCIAL_NETWORKS} from "../SocialNetwork";
import Dropdown from "../Dropdown";

import './styles.scss';
import {ArrowDownIcon} from "../../icons";

const LINKS = [{
  text: 'GOVERNANCE',
  href: 'https://forested-armchair-2f8.notion.site/DAO-abe0f6f3c2404178a741990385d80a30'
}, {
  text: 'CONTRIBUTE',
  href: 'https://forested-armchair-2f8.notion.site/Contribute-44f90fa0d929442caa884974f1100b53'
}]

const Header = () => {
  const onSocialClick = (href: string) => () => {
    window.open(href, "_blank");
  };

  return (
      <div className="header">

        <div className="header__left">
          <a title="Stable Unit" href="#" className="header__logo">
            <img src="./logo.svg" alt="" loading="lazy" />
          </a>
        </div>

        <div className="header__right">
          <div>
            {LINKS.map((link) => <Href className="header__link" key={link.text} href={link.href} text={link.text} />)}
          </div>
          <Dropdown
            className="header__dropdown"
            classNameContent="header__dropdown-content"
            title="COMMUNITY"
          >
            {Object.keys(SOCIAL_NETWORKS).map((socialKey) => {
              const data = SOCIAL_NETWORKS[socialKey];
              const Icon = data.icon;

              return (
                <div className="header__dropdown__line" onClick={onSocialClick(data.href)}>
                  <Icon />
                  <div>{data.name}</div>
                </div>
              )
            })}
          </Dropdown>
        </div>

      </div>
  );
};

export default Header;
