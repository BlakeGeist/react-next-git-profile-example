import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  failedToFind: false,
  userName: '',
  profiles: [],
  rawProfiles: [],
  hasSearched: false
}

export const actionTypes = {
  SET_ITEM: 'SET_ITEM',
  ADD_PROFILE: 'ADD_PROFILE',
  REMOVE_PROFILE: 'REMOVE_PROFILE'
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  function removeProfileByIndex(index) {
    return state.profiles.filter((ele) => {
      return ele !== state.profiles[index];
    });
  }
  // this seems like an odd spot to be declaring this function
  function updateProfiles(profileDoesNotExist, profiles, state) {
    if (profileDoesNotExist) {
      return {
        ...state,
        profiles,
        rawProfiles: profiles
      };
    } else {
      return state;
    }
  }

  switch (action.type) {
    case actionTypes.SET_ITEM: {
      return Object.assign({}, state, {
        [action.name]: action.payload
      })
    }
    case actionTypes.ADD_PROFILE: {
      const profileDoesNotExist = state.profiles.filter(
        (x) => { return x.id === action.profileData.id; }
      ).length < 1;
      const theProfiles = [...state.profiles, action.profileData];
      return updateProfiles(profileDoesNotExist, theProfiles, state);
    }
    case actionTypes.REMOVE_PROFILE: {
      const profiles = removeProfileByIndex(action.index);
      return {
        ...state,
        profiles,
        rawProfiles: profiles
      }
    }

    default:
      return state
  }
}

export function initializeStore (initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}
