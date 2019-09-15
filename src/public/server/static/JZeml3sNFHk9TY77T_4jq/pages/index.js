module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+KcL":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "+NUC":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("HDbY");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("3+Pc"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (false) {}

  return WithRouteWrapper;
}

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "1qlh":
/***/ (function(module, exports) {

module.exports = require("react-dnd-cjs");

/***/ }),

/***/ "3+Pc":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("+KcL");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "7ntV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "9f0s":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "HDbY":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "react-dnd-cjs"
var external_react_dnd_cjs_ = __webpack_require__("1qlh");

// EXTERNAL MODULE: external "react-dnd-html5-backend-cjs"
var external_react_dnd_html5_backend_cjs_ = __webpack_require__("fEEx");
var external_react_dnd_html5_backend_cjs_default = /*#__PURE__*/__webpack_require__.n(external_react_dnd_html5_backend_cjs_);

// EXTERNAL MODULE: external "immutability-helper"
var external_immutability_helper_ = __webpack_require__("YckE");
var external_immutability_helper_default = /*#__PURE__*/__webpack_require__.n(external_immutability_helper_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js + 1 modules
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./ItemTypes.js
/* harmony default export */ var ItemTypes = ({
  CARD: 'card'
});
// CONCATENATED MODULE: ./components/features/Increment.jsx
var __jsx = external_react_default.a.createElement;


const Increment = ({
  handleClick,
  increment,
  text
}) => {
  return __jsx("div", null, __jsx("button", {
    onClick: handleClick,
    value: increment,
    type: "button"
  }, unescape(text)));
};

/* harmony default export */ var features_Increment = (Increment);
// CONCATENATED MODULE: ./components/features/profiles/Profile.jsx

var Profile_jsx = external_react_default.a.createElement;





const style = {
  cursor: 'move'
};

const Profile = ({
  avatarUrl,
  createdAt,
  company,
  id,
  index,
  htmlUrl,
  location,
  moveCard,
  name,
  profilesCount,
  publicRepos,
  removeCard,
  reposUrl
}) => {
  const ref = Object(external_react_["useRef"])(null);
  const [, drop] = Object(external_react_dnd_cjs_["useDrop"])({
    accept: ItemTypes.CARD,

    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index; // Don't replace items with themselves

      if (dragIndex === hoverIndex) {
        return;
      } // Determine rectangle on screen


      const hoverBoundingRect = ref.current.getBoundingClientRect(); // Get vertical middle

      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2; // Determine mouse position

      const clientOffset = monitor.getClientOffset(); // Get pixels to the top

      const hoverClientY = clientOffset.y - hoverBoundingRect.top; // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      } // Dragging upwards


      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      } // Time to actually perform the action


      moveCard(dragIndex, hoverIndex); // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.

      item.index = hoverIndex;
    }

  });
  const [{
    isDragging
  }, drag] = Object(external_react_dnd_cjs_["useDrag"])({
    item: {
      type: ItemTypes.CARD,
      id,
      index
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  const handleIncrement = e => {
    e.preventDefault();
    moveCard(index, Number(index) + Number(e.target.value));
  };

  const handleRemoveProfile = indexed => e => {
    e.preventDefault();
    removeCard(indexed);
  };

  return Profile_jsx("div", {
    "data-index": index,
    ref: ref,
    style: Object(objectSpread["a" /* default */])({}, style, {
      opacity
    }),
    className: "profiles-profile"
  }, Profile_jsx("button", {
    className: "profiles-profile-remove",
    onClick: handleRemoveProfile(index),
    type: "button"
  }, "remove"), Profile_jsx("div", {
    className: "position"
  }, index + 1, Profile_jsx("span", null, index !== 0 && Profile_jsx(features_Increment, {
    handleClick: handleIncrement,
    increment: -1,
    text: "\u2191"
  }), profilesCount !== 1 && index < profilesCount - 1 && Profile_jsx(features_Increment, {
    handleClick: handleIncrement,
    increment: 1,
    text: "\u2193"
  }))), Profile_jsx("a", {
    className: "avatar_url",
    href: htmlUrl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, Profile_jsx("img", {
    src: avatarUrl,
    height: "100px",
    width: "100px",
    alt: "User profile avatar"
  })), Profile_jsx("div", {
    className: "info"
  }, name ? Profile_jsx("a", {
    className: "name",
    href: htmlUrl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, name) : '', publicRepos ? Profile_jsx("a", {
    className: "name",
    href: `${htmlUrl}?tab=repositories`,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Repos:", ' ', publicRepos) : '', company ? Profile_jsx("div", {
    className: "company"
  }, company) : '', location ? Profile_jsx("div", {
    className: "location"
  }, location) : '', Profile_jsx("div", {
    className: "created_at"
  }, external_moment_default()(createdAt).format('L'))));
};

Profile.defaultProps = {
  company: '',
  location: '',
  name: ''
};
/* harmony default export */ var profiles_Profile = (Profile);
// CONCATENATED MODULE: ./components/features/profiles/ProfilesSearch.jsx
var ProfilesSearch_jsx = external_react_default.a.createElement;


const ProfilesSearch = ({
  handleSearch
}) => {
  return ProfilesSearch_jsx("div", null, ProfilesSearch_jsx("input", {
    onChange: handleSearch,
    type: "text",
    placeholder: "Search..."
  }));
};

/* harmony default export */ var profiles_ProfilesSearch = (ProfilesSearch);
// CONCATENATED MODULE: ./components/features/profiles/ProfileSort.jsx
var ProfileSort_jsx = external_react_default.a.createElement;


const ProfileSort = ({
  handleSort
}) => {
  return ProfileSort_jsx("div", {
    className: "profiles-sort"
  }, ProfileSort_jsx("select", {
    onChange: handleSort
  }, ProfileSort_jsx("option", null, "SortBy"), ProfileSort_jsx("option", {
    value: "name"
  }, "Name"), ProfileSort_jsx("option", {
    value: "public_repos"
  }, "Repos"), ProfileSort_jsx("option", {
    value: "addedAt"
  }, "Time Added"), ProfileSort_jsx("option", {
    value: "created_at"
  }, "Account Created Date")));
};

/* harmony default export */ var profiles_ProfileSort = (ProfileSort);
// CONCATENATED MODULE: ./components/features/profiles/ProfilesControls.jsx
var ProfilesControls_jsx = external_react_default.a.createElement;





const ProfilesControls = ({
  profiles,
  update,
  setProfiles,
  dispatch,
  rawProfiles,
  hasSearched
}) => {
  const handleSort = e => {
    const sortedProfiles = profiles.sort((a, b) => {
      return a[e.target.value] > b[e.target.value] ? 1 : -1;
    });
    const updatedProfiles = update(profiles, {
      $set: sortedProfiles.slice(0)
    });
    setProfiles(updatedProfiles);
    dispatch({
      type: 'SET_ITEM',
      name: 'profiles',
      payload: updatedProfiles
    });
  };

  const handleSearch = e => {
    dispatch({
      type: 'SET_ITEM',
      name: 'hasSearched',
      payload: true
    });

    if (!e.target.value) {
      const updatedProfiles = update(profiles, {
        $set: rawProfiles
      });
      setProfiles(updatedProfiles);
      dispatch({
        type: 'SET_ITEM',
        name: 'profiles',
        payload: updatedProfiles
      });
      dispatch({
        type: 'SET_ITEM',
        name: 'hasSearched',
        payload: false
      });
      return;
    }

    const filteredArray = rawProfiles.filter(itm => {
      return itm.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1;
    });
    const updatedProfiles = update(profiles, {
      $set: filteredArray
    });
    setProfiles(updatedProfiles);
    dispatch({
      type: 'SET_ITEM',
      name: 'profiles',
      payload: updatedProfiles
    });
  };

  return ProfilesControls_jsx("div", {
    className: profiles.length > 1 || hasSearched ? 'profiles-controls' : ''
  }, profiles.length > 1 || hasSearched ? ProfilesControls_jsx(profiles_ProfilesSearch, {
    handleSearch: handleSearch
  }) : '', profiles.length > 1 ? ProfilesControls_jsx(profiles_ProfileSort, {
    handleSort: handleSort
  }) : '');
};

const mapStateToProps = state => ({
  profiles: state.profiles,
  hasSearched: state.hasSearched,
  rawProfiles: state.rawProfiles
});

/* harmony default export */ var profiles_ProfilesControls = (Object(external_react_redux_["connect"])(mapStateToProps)(ProfilesControls));
// CONCATENATED MODULE: ./components/features/profiles/ProfilesList.jsx
var ProfilesList_jsx = external_react_default.a.createElement;






function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

const ProfilesContainer = ({
  profiles,
  dispatch
}) => {
  const {
    0: profilesArray,
    1: setProfiles
  } = Object(external_react_["useState"])(profiles);

  if (profilesArray && profilesArray.length !== profiles.length) {
    setProfiles(profiles.filter(onlyUnique));
  }

  const moveCard = Object(external_react_["useCallback"])((dragIndex, hoverIndex) => {
    const dragCard = profilesArray[dragIndex];
    const sortedProfiles = external_immutability_helper_default()(profilesArray, {
      $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
    });
    setProfiles(sortedProfiles);
    dispatch({
      type: 'SET_ITEM',
      name: 'profiles',
      payload: sortedProfiles
    });
  }, [profilesArray, dispatch]);

  const removeCard = index => {
    dispatch({
      type: 'REMOVE_PROFILE',
      index
    });
  };

  const renderProfile = (profile, index) => {
    return ProfilesList_jsx(profiles_Profile, {
      key: profile.id,
      id: profile.id,
      index: index,
      moveCard: moveCard,
      profilesCount: profilesArray.length,
      removeCard: removeCard,
      avatarUrl: profile.avatar_url,
      createdAt: profile.created_at,
      htmlUrl: profile.html_url,
      publicRepos: profile.public_repos,
      reposUrl: profile.repos_url,
      name: profile.name,
      company: profile.company,
      location: profile.location
    });
  };

  return ProfilesList_jsx(external_react_default.a.Fragment, null, ProfilesList_jsx(profiles_ProfilesControls, {
    profiles: profilesArray,
    update: external_immutability_helper_default.a,
    setProfiles: setProfiles
  }), ProfilesList_jsx("div", {
    className: "profiles"
  }, profilesArray.map((profile, i) => renderProfile(profile, i))));
};

const ProfilesList_mapStateToProps = state => ({
  profiles: state.profiles,
  rawProfiles: state.rawProfiles,
  hasSearched: state.hasSearched
});

/* harmony default export */ var ProfilesList = (Object(external_react_redux_["connect"])(ProfilesList_mapStateToProps)(ProfilesContainer));
// CONCATENATED MODULE: ./components/containers/ProfilesContainer.jsx
var ProfilesContainer_jsx = external_react_default.a.createElement;





const ProfilesContainer_ProfilesContainer = () => {
  return ProfilesContainer_jsx("section", {
    className: "profiles-container"
  }, ProfilesContainer_jsx(external_react_dnd_cjs_["DndProvider"], {
    backend: external_react_dnd_html5_backend_cjs_default.a
  }, ProfilesContainer_jsx(ProfilesList, null)));
};

/* harmony default export */ var containers_ProfilesContainer = (ProfilesContainer_ProfilesContainer);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./components/features/profiles/ExampleListItem.jsx
var ExampleListItem_jsx = external_react_default.a.createElement;


const ExampleListItem = ({
  clickAction,
  userName
}) => {
  return ExampleListItem_jsx("button", {
    onClick: () => {
      clickAction(userName);
    },
    type: "button"
  }, userName);
};

/* harmony default export */ var profiles_ExampleListItem = (ExampleListItem);
// CONCATENATED MODULE: ./components/features/profiles/ExampleList.jsx
var ExampleList_jsx = external_react_default.a.createElement;



const ExampleList = ({
  clickAction
}) => {
  // create an array that contains all of the gitHub accounts to be used in the examples
  const exampleUserAccounts = ['BlakeGeist', 'Reddit', 'Facebook', 'Google', 'GitHub']; // create a var that is the rendered template of an example list item

  const renderExampleListContainer = (account, index) => {
    return ExampleList_jsx(profiles_ExampleListItem, {
      key: index,
      clickAction: clickAction,
      userName: account
    });
  };

  return ExampleList_jsx("div", {
    className: "examples-container"
  }, ExampleList_jsx("div", {
    className: "examples"
  }, ExampleList_jsx("div", {
    className: "examples-heading"
  }, "Example Github Profiles"), ExampleList_jsx("div", {
    className: "examples-body"
  }, exampleUserAccounts.map((account, i) => renderExampleListContainer(account, i)))));
};

/* harmony default export */ var profiles_ExampleList = (ExampleList);
// CONCATENATED MODULE: ./components/features/Form.jsx
var Form_jsx = external_react_default.a.createElement;



const Form = ({
  userName,
  failedToFind,
  dispatch,
  handleSubmit
}, props) => {
  return Form_jsx("div", {
    className: `${failedToFind ? 'no-user-found' : ''} form-container`
  }, failedToFind ? Form_jsx("div", {
    className: "failed-to-find-text"
  }, "Failed to Find User") : '', Form_jsx("form", {
    onSubmit: event => handleSubmit(userName, event)
  }, Form_jsx("input", {
    type: "text",
    value: userName,
    onChange: event => dispatch({
      type: 'SET_ITEM',
      name: 'userName',
      payload: event.target.value
    }),
    placeholder: "GitHub username",
    required: true
  }), Form_jsx("button", {
    type: "submit"
  }, "Fetch GitHub Account by Username")));
};

const Form_mapStateToProps = state => ({
  failedToFind: state.failedToFind,
  userName: state.userName
});

/* harmony default export */ var features_Form = (Object(external_react_redux_["connect"])(Form_mapStateToProps)(Form));
// CONCATENATED MODULE: ./components/containers/FormContainer.jsx
var FormContainer_jsx = external_react_default.a.createElement;







const FormContainer = ({
  userName,
  failedToFind,
  dispatch
}, props) => {
  const handleSubmit = async (name, event) => {
    const apiCall = `https://api.github.com/users/${name}`;

    if (event) {
      event.preventDefault();
    }

    let data;
    await external_axios_default.a.get(apiCall).then(resp => {
      data = resp.data;
    }).catch(error => {});

    if (data) {
      data.addedAt = external_moment_default()().toDate();
      dispatch({
        type: 'ADD_PROFILE',
        profileData: data
      });
    } else {
      dispatch({
        type: 'SET_ITEM',
        name: 'failedToFind',
        payload: true
      });
      setTimeout(() => {
        dispatch({
          type: 'SET_ITEM',
          name: 'failedToFind',
          payload: false
        });
      }, 3000);
    }

    dispatch({
      type: 'SET_ITEM',
      name: 'userName',
      payload: ''
    });
  };

  return FormContainer_jsx(external_react_default.a.Fragment, null, FormContainer_jsx(features_Form, {
    handleSubmit: handleSubmit,
    dispatch: dispatch
  }), FormContainer_jsx(profiles_ExampleList, {
    clickAction: async (name, event) => {
      await dispatch({
        type: 'SET_ITEM',
        name: 'userName',
        payload: name
      });
      handleSubmit(name);
    }
  }));
};

const FormContainer_mapStateToProps = state => ({
  failedToFind: state.failedToFind,
  userName: state.userName
});

/* harmony default export */ var containers_FormContainer = (Object(external_react_redux_["connect"])(FormContainer_mapStateToProps)(FormContainer));
// CONCATENATED MODULE: ./components/features/Header.jsx
var Header_jsx = external_react_default.a.createElement;



const Header = ({
  title
}) => {
  return Header_jsx("section", null, Header_jsx("h1", {
    className: "heading"
  }, title), Header_jsx(containers_FormContainer, null));
};

/* harmony default export */ var features_Header = (Header);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");

// CONCATENATED MODULE: ./components/Nav.js

var Nav_jsx = external_react_default.a.createElement;


const links = [{
  href: 'https://github.com/BlakeGeist/react-next-git-profile-example',
  label: 'GitHub'
}].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => Nav_jsx("nav", {
  className: "jsx-2250620709"
}, Nav_jsx("ul", {
  className: "jsx-2250620709"
}, links.map(({
  key,
  href,
  label
}) => Nav_jsx("li", {
  key: key,
  className: "jsx-2250620709"
}, Nav_jsx("a", {
  href: href,
  className: "jsx-2250620709"
}, label)))), Nav_jsx(style_default.a, {
  id: "2250620709"
}, ["body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir, Helvetica,sans-serif;}", "nav.jsx-2250620709{text-align:center;}", "ul.jsx-2250620709{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", "nav.jsx-2250620709>ul.jsx-2250620709{padding:4px 16px;}", "li.jsx-2250620709{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:6px 8px;}", "a.jsx-2250620709{color:#067df7;-webkit-text-decoration:none;text-decoration:none;font-size:13px;}"]));

/* harmony default export */ var components_Nav = (Nav);
// CONCATENATED MODULE: ./components/Header.js
var components_Header_jsx = external_react_default.a.createElement;



const Header_Header = () => {
  return components_Header_jsx("header", null, components_Header_jsx("div", {
    className: "container"
  }, components_Header_jsx(components_Nav, null)));
};

/* harmony default export */ var components_Header = (Header_Header);
// CONCATENATED MODULE: ./components/Footer.js
var Footer_jsx = external_react_default.a.createElement;


const Footer = () => {
  return Footer_jsx("footer", null, Footer_jsx("div", {
    className: "container"
  }));
};

/* harmony default export */ var components_Footer = (Footer);
// CONCATENATED MODULE: ./layouts/Main.js
var Main_jsx = external_react_default.a.createElement;




const Main = ({
  children
}) => {
  return Main_jsx(external_react_default.a.Fragment, null, Main_jsx(components_Header, null), Main_jsx("main", {
    className: "body"
  }, Main_jsx("div", {
    className: "container"
  }, children)), Main_jsx(components_Footer, null));
};

/* harmony default export */ var layouts_Main = (Main);
// EXTERNAL MODULE: ./App.css
var App = __webpack_require__("fvk4");

// CONCATENATED MODULE: ./pages/index.js

var pages_jsx = external_react_default.a.createElement;








class pages_Index extends external_react_default.a.Component {
  static async getInitialProps({
    reduxStore,
    req
  }) {
    const isServer = !!req; // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
    //reduxStore.dispatch(serverRenderClock(isServer))

    const apiCall = `https://api.github.com/users/blakegeist`;
    await external_axios_default.a.get(apiCall).then(resp => {
      reduxStore.dispatch({
        type: 'ADD_PROFILE',
        profileData: resp.data
      });
    }).catch(err => {
      console.log(err);
    });
    return {};
  }

  componentDidMount() {// DISPATCH ACTIONS HERE FROM `mapDispatchToProps`
    // TO TICK THE CLOCK
    //this.timer = setInterval(() => this.props.startClock(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return pages_jsx(layouts_Main, null, pages_jsx(features_Header, {
      title: "The GitHub Cards App "
    }), pages_jsx(containers_ProfilesContainer, null), pages_jsx(style_default.a, {
      id: "2584905613"
    }, ["@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,800);", "html,body,#__next,main{height:100%;}", ".body{max-width:600px;margin:0 auto;}", ".info{margin-left:12px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}", ".name{font-size:1.25rem;font-weight:bold;}", ".form-container{border:thin solid #ddd;background-color:#fbfbfb;padding:2rem;}", "form{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:500px;margin:0 auto;}", "form input[type=\"text\"]{margin:15px 0;padding:15px 10px;width:100%;outline:none;border:1px solid #bbb;border-top-left-radius:20px;border-bottom-left-radius:20px;border-right:none;display:inline-block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-transition:0.2s ease all;-moz-transition:0.2s ease all;-ms-transition:0.2s ease all;-o-transition:0.2s ease all;-webkit-transition:0.2s ease all;transition:0.2s ease all;}", "form button{margin:15px 0;padding:15px 10px;width:100%;outline:none;border:1px solid #bbb;border-top-right-radius:20px;border-bottom-right-radius:20px;display:inline-block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-transition:0.2s ease all;-moz-transition:0.2s ease all;-ms-transition:0.2s ease all;-o-transition:0.2s ease all;-webkit-transition:0.2s ease all;transition:0.2s ease all;cursor:pointer;}", ".heading{text-align:center;font-size:3rem;margin:0 0 1rem;}", ".no-user-found{border:1px solid red !important;position:relative;}", ".failed-to-find-text{position:absolute;top:0;}", ".position{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:125px;font-size:2.5rem;}", ".position span{font-size:1rem;margin:0 .5rem;}", ".examples-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;line-height:65px;}", ".examples{-webkit-flex:0 1 45rem;-ms-flex:0 1 45rem;flex:0 1 45rem;text-align:center;}", ".examples-body{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:25px;}", "h1{color:#444;font:800 350%/1.4 'Open Sans',sans-serif;text-transform:uppercase;}", "h1::selection{-webkit-text-stroke:4px #fb8a05;color:#fff;}", "a{color:#fb8a05;-webkit-text-decoration:none;text-decoration:none;}", "a:hover{color:#532600;}", ".profiles-container{border:thin solid #ddd;border-radius:10px;overflow:hidden;}", ".profiles-profile{border-bottom:2px dashed #ccc;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:1rem;position:relative;}", ".profiles-profile:last-of-type{border:none;}", ".profiles-profile-remove{position:absolute;top:10px;right:15px;}", ".profiles-profile{background-color:#fff;}", ".profiles-profile:nth-child(even){background-color:#f7f7f7;}", ".profiles-sort{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".profiles-controls{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:thin solid #ddd;padding:15px;}"]));
  }

}

const mapDispatchToProps = {};
/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(null, mapDispatchToProps)(pages_Index));

/***/ }),

/***/ "SD04":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YckE":
/***/ (function(module, exports) {

module.exports = require("immutability-helper");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "bIOf":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("7ntV");

var _Object$defineProperty = __webpack_require__("9f0s");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("bIOf");

var _interopRequireDefault = __webpack_require__("HDbY");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("SD04"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("+NUC");

var _utils = __webpack_require__("p8BD");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "fEEx":
/***/ (function(module, exports) {

module.exports = require("react-dnd-html5-backend-cjs");

/***/ }),

/***/ "fvk4":
/***/ (function(module, exports) {



/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "mJK4":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("bIOf");

var _interopRequireDefault = __webpack_require__("HDbY");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("3+Pc"));

var _defineProperty = _interopRequireDefault(__webpack_require__("9f0s"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("qxCs"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("mJK4");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = keys_default()(source);

    if (typeof get_own_property_symbols_default.a === 'function') {
      ownKeys = ownKeys.concat(get_own_property_symbols_default()(source).filter(function (sym) {
        return get_own_property_descriptor_default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });