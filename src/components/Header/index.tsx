import React from 'react';
import './styles.css';

const Header = () => {
  return (
    <div className="App">
      <div className="nav-main__row">

        <div className="nav-main__left">
          <a title="Stable Unit" href="#" className="nav-main__logo">
            <img src="assets/img/logo.svg" alt="" loading="lazy" />
          </a>
        </div>

        <div className="nav-main__right">
          <ul className="menu">
            <li><a title="Safe transfer" href="https://safe-transfer.stableunit.org/" target="_blank"><span
              className="caption">Safe transfer</span></a></li>
            <li><a title="tokenomics"
                   href="https://forested-armchair-2f8.notion.site/Tokens-and-tokenomics-1aef1fac7bcc47d5b68a6c7b32f3f30c"
                   target="_blank"><span className="caption">Tokenomics</span></a></li>
            <li><a title="Governance"
                   href="https://forested-armchair-2f8.notion.site/DAO-abe0f6f3c2404178a741990385d80a30"
                   target="_blank"><span className="caption">Governance</span></a></li>
            <li><a title="Contribute"
                   href="https://forested-armchair-2f8.notion.site/Contribute-44f90fa0d929442caa884974f1100b53"
                   target="_blank"><span className="caption">Contribute</span></a></li>
            <li>
              <a title="Community" href="#">
                <span className="caption">Community</span>
                <span className="icon">
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd"
      d="M5.99961 5.63293L6 5.63333L10.7246 0.724001C10.8777 0.574186 11.0716 0.49952 11.2631 0.500003C11.453 0.500685 11.6406 0.57535 11.7837 0.723998C12.0711 1.02267 12.0711 1.508 11.7837 1.82533L6.53814 7.276C6.38495 7.42581 6.19109 7.50048 5.99962 7.5C5.80965 7.49932 5.6221 7.42465 5.47904 7.276L0.215569 1.82533C-0.0718563 1.508 -0.0718562 1.02267 0.215569 0.724C0.359746 0.574184 0.553644 0.499518 0.747382 0.500002C0.93961 0.500683 1.13161 0.575349 1.27467 0.723998L5.99922 5.63333L5.99961 5.63293Z"
      fill="#8A869B"/>
</svg>
                                </span>
              </a>
              <ul className="sub-menu">
                <li>
                  <a title="Twitter" href="https://twitter.com/stableunitdao" target="_blank">
                                        <span className="icon">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                               viewBox="0 0 24 24"><path
                                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                                        </span>
                    <span className="caption">Twitter</span>
                  </a>
                </li>
                <li>
                  <a title="Discord" href="https://discord.gg/JaRqEgrTmr" target="_blank">
                                        <span className="icon">
                                           <svg width="21" height="16" viewBox="0 0 21 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
<path
  d="M17.6196 1.36043C16.2649 0.748237 14.8425 0.272086 13.3523 0C13.1491 0.340108 12.9459 0.748237 12.8105 1.08835C11.1848 0.88428 9.62692 0.88428 8.06902 1.08835C7.86582 0.748237 7.66261 0.340108 7.45941 0C5.96924 0.272086 4.54681 0.680216 3.19211 1.36043C0.482711 5.3737 -0.262372 9.31896 0.0763022 13.1962C1.90514 14.4886 3.59852 15.3049 5.35962 15.849C5.76603 15.3049 6.17244 14.6927 6.51112 14.0124C5.9015 13.8084 5.29189 13.4683 4.75001 13.1282C4.88548 12.9921 5.02095 12.9241 5.15642 12.7881C8.6109 14.3526 12.2686 14.3526 15.6553 12.7881C15.7908 12.9241 15.9263 12.9921 16.0617 13.1282C15.5199 13.4683 14.9102 13.7404 14.3006 14.0124C14.6393 14.6246 14.978 15.2368 15.4521 15.849C17.1455 15.3049 18.9066 14.4886 20.7354 13.1962C21.1419 8.70676 19.9904 4.76151 17.6196 1.36043ZM6.98526 10.7474C5.96924 10.7474 5.08868 9.79511 5.08868 8.63874C5.08868 7.48237 5.9015 6.53007 6.98526 6.53007C8.00129 6.53007 8.88184 7.48237 8.88184 8.63874C8.8141 9.86313 8.00129 10.7474 6.98526 10.7474ZM13.8265 10.7474C12.8105 10.7474 11.9299 9.79511 11.9299 8.63874C11.9299 7.48237 12.7427 6.53007 13.8265 6.53007C14.8425 6.53007 15.7231 7.48237 15.7231 8.63874C15.7231 9.86313 14.9102 10.7474 13.8265 10.7474Z"
  fill="#7E7A8A"/>
</svg>
                                        </span>
                    <span className="caption">Discord</span>
                  </a>
                </li>
                <li>
                  <a title="Telegram" href="https://t.me/stableunit" target="_blank">
                                        <span className="icon">
                                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
<path
  d="M1.1771 6.96805C1.1771 6.96805 9.6688 3.45571 12.6139 2.21897C13.7429 1.72428 17.5715 0.141253 17.5715 0.141253C17.5715 0.141253 19.3385 -0.55132 19.1913 1.13064C19.1422 1.82322 18.7495 4.24722 18.3568 6.86911C17.7678 10.5793 17.1297 14.6358 17.1297 14.6358C17.1297 14.6358 17.0315 15.7736 16.1971 15.9715C15.3627 16.1694 13.9883 15.2789 13.7429 15.0811C13.5465 14.9326 10.0615 12.7065 8.78527 11.6182C8.44168 11.3214 8.049 10.7277 8.83436 10.0352C10.6014 8.40266 12.7121 6.37441 13.9883 5.08821C14.5773 4.49457 15.1663 3.10942 12.7121 4.79139C9.22704 7.2154 5.79109 9.49099 5.79109 9.49099C5.79109 9.49099 5.00573 9.98569 3.53318 9.54046C2.06063 9.09524 0.342659 8.5016 0.342659 8.5016C0.342659 8.5016 -0.83538 7.75956 1.1771 6.96805Z"
  fill="#7E7A8A"/>
</svg>
                                        </span>
                    <span className="caption">Telegram</span>
                  </a>
                </li>
                <li>
                  <a title="Medium" href="https://medium.com/stableunit" target="_blank">
                                        <span className="icon">
                                            <svg width="24" height="20" viewBox="0 0 24 20"
                                                 xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                                                 clip-rule="evenodd"><path
                                              d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"/></svg>
                                        </span>
                    <span className="caption">Medium</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <button className="nav-main__toggle" aria-label="Open Side Navigation">
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447716 2 1 2H23C23.5523 2 24 1.55228 24 1C24 0.447715 23.5523 0 23 0H1ZM1 10C0.447715 10 0 10.4477 0 11C0 11.5523 0.447716 12 1 12H23C23.5523 12 24 11.5523 24 11C24 10.4477 23.5523 10 23 10H1Z"
                    fill="#8A869B"/>
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Header;
