export const initialState = {
    avatar: '',
    logar: '',
    favorites: []
};

export const UserReducer = ( state, action) => {
    switch(action.type){
        case 'setAvatar' :
            return { ...state, avatar: action.payload.avatar};
        break;
        case 'setLogar' :
            return { ...state, logar: action.payload.logar};
        break;
        case 'entrar' :
            return { ...state, avatar: action.payload.avatar};
        break;
        default:
            return state;
    }
}