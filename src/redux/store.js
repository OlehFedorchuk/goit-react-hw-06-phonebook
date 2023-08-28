import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";

const initialState = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: ""
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "contacts/addContact": {
        return {
            ...state,
            contacts: [...state.contacts, action.payload]
        }
      }
    case "contacts/deleteContact": {
        return {
            ...state, 
            contacts: state.contacts.filter(contact => contact.id !== action.payload)
        }
      }
    case "filter/setFilter": {
        return {
            ...state,
            filter: action.payload,
        }
      }
    
        
  
    default:
        return state;
  }
};

const persistConfig = {
    key: 'root',
    storage
}

const persisedReducer = persistReducer(persistConfig, rootReducer)

const enhancer = devToolsEnhancer();

export const store = createStore(persisedReducer, enhancer);

export const persistor = persistStore(store);