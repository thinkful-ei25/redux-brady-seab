import store from './store';
import {setLanguage} from './actions';

// Should output {language: 'en'}
console.log(store.getState());
// Switch to German
store.dispatch(setLanguage('german'));
console.log(store.getState());
store.dispatch(setLanguage('russian'));
console.log(store.getState());
store.dispatch(setLanguage('reduxs'));
// Should output {language: 'de'}
console.log(store.getState());

