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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "1qlh":
/***/ (function(module, exports) {

module.exports = require("react-dnd-cjs");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

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
    const resp = await external_axios_default.a.get(apiCall);
    const data = await resp.data;
    reduxStore.dispatch({
      type: 'ADD_PROFILE',
      profileData: data
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
    return pages_jsx("div", {
      className: "jsx-2584905613" + " " + "body"
    }, pages_jsx(features_Header, {
      title: "The GitHub Cards App"
    }), pages_jsx(containers_ProfilesContainer, null), pages_jsx(style_default.a, {
      id: "2584905613"
    }, ["@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,800);", "html,body,#__next,main{height:100%;}", ".body{max-width:600px;margin:0 auto;}", ".info{margin-left:12px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}", ".name{font-size:1.25rem;font-weight:bold;}", ".form-container{border:thin solid #ddd;background-color:#fbfbfb;padding:2rem;}", "form{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:500px;margin:0 auto;}", "form input[type=\"text\"]{margin:15px 0;padding:15px 10px;width:100%;outline:none;border:1px solid #bbb;border-top-left-radius:20px;border-bottom-left-radius:20px;border-right:none;display:inline-block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-transition:0.2s ease all;-moz-transition:0.2s ease all;-ms-transition:0.2s ease all;-o-transition:0.2s ease all;-webkit-transition:0.2s ease all;transition:0.2s ease all;}", "form button{margin:15px 0;padding:15px 10px;width:100%;outline:none;border:1px solid #bbb;border-top-right-radius:20px;border-bottom-right-radius:20px;display:inline-block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-transition:0.2s ease all;-moz-transition:0.2s ease all;-ms-transition:0.2s ease all;-o-transition:0.2s ease all;-webkit-transition:0.2s ease all;transition:0.2s ease all;cursor:pointer;}", ".heading{text-align:center;font-size:3rem;margin:0 0 1rem;}", ".no-user-found{border:1px solid red !important;position:relative;}", ".failed-to-find-text{position:absolute;top:0;}", ".position{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:125px;font-size:2.5rem;}", ".position span{font-size:1rem;margin:0 .5rem;}", ".examples-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;line-height:65px;}", ".examples{-webkit-flex:0 1 45rem;-ms-flex:0 1 45rem;flex:0 1 45rem;text-align:center;}", ".examples-body{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:25px;}", "h1{color:#444;font:800 350%/1.4 'Open Sans',sans-serif;text-transform:uppercase;}", "h1::selection{-webkit-text-stroke:4px #fb8a05;color:#fff;}", "a{color:#fb8a05;-webkit-text-decoration:none;text-decoration:none;}", "a:hover{color:#532600;}", ".profiles-container{border:thin solid #ddd;border-radius:10px;overflow:hidden;}", ".profiles-profile{border-bottom:2px dashed #ccc;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:1rem;position:relative;}", ".profiles-profile:last-of-type{border:none;}", ".profiles-profile-remove{position:absolute;top:10px;right:15px;}", ".profiles-profile{background-color:#fff;}", ".profiles-profile:nth-child(even){background-color:#f7f7f7;}", ".profiles-sort{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".profiles-controls{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:thin solid #ddd;padding:15px;}"]));
  }

}

const mapDispatchToProps = {};
/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(null, mapDispatchToProps)(pages_Index));

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "YckE":
/***/ (function(module, exports) {

module.exports = require("immutability-helper");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

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