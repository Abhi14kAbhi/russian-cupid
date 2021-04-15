import React from 'react';

const Svg = ({ svgName }) => {
  switch (svgName) {
    case 'name':
      return (
        <svg
          _ngcontent-jde-c54=""
          xmlns="http://www.w3.org/2000/svg"
          width="16.762"
          height="16"
          viewBox="0 0 16.762 16"
        >
          <g
            _ngcontent-jde-c54=""
            id="prefix__noun_User_1202532"
            transform="translate(-2 -3)"
          >
            <g
              _ngcontent-jde-c54=""
              id="prefix__Group_6024"
              data-name="Group 6024"
              transform="translate(2 3)"
            >
              <g
                _ngcontent-jde-c54=""
                id="prefix__Group_6023"
                data-name="Group 6023"
              >
                <g
                  _ngcontent-jde-c54=""
                  id="prefix__Group_6022"
                  data-name="Group 6022"
                >
                  <path
                    _ngcontent-jde-c54=""
                    id="prefix__Path_6865"
                    fill="#b2b2b2"
                    d="M.762 16H0v-1.143a4.19 4.19 0 0 1 4.19-4.19h8.381a4.19 4.19 0 0 1 4.19 4.19V16H16v-1.143a3.429 3.429 0 0 0-3.429-3.429H4.19a3.429 3.429 0 0 0-3.428 3.429zm7.619-6.857a4.571 4.571 0 1 1 4.571-4.571 4.571 4.571 0 0 1-4.571 4.571zm0-.762a3.81 3.81 0 1 0-3.81-3.81 3.81 3.81 0 0 0 3.81 3.81z"
                    data-name="Path 6865"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      );
    default:
      return null;
  }
};

export default Svg;
