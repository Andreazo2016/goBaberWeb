import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default redurcers => {
    const persisteReducer = persistReducer({
        key:'gobarber',
        storage,
        whitelist:['auth','user']
    }, redurcers)

    return persisteReducer;
}