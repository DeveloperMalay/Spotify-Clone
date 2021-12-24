export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    // token:'BQCPlQcvVAU5agwPS2rsFbqJzkbn2_CfBrIrG2GGha0nnqGePJkpLTph-o6C3o71Z7SwlXVmZ6daIHvFiMjN0NXnVYuKb8S8MteqnTIa7pjgObFBqPsYtH0D6348CNbXiB8ijUrZpIHrgU-V3GRFZgBOaSef9NOTx3FAcHxCjqxYKObeB_Rt',
};

const reducer=(state,action)=>{
    console.log(action);

    //Action -> type,[payload]

    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user:action.user,
            };

            case "SET_TOKEN":
                return{
                    ...state,
                    token:action.token,
                };

                case "SET_PLAYLISTS":
                    return{
                        ...state,
                        playlists:action.playlists,
                    }

                case 'SET_DISCOVER_WEEKLY':
                    return{
                        ...state,
                        discover_weekly:action.discover_weekly,
                    };    

            default:
                return state;
    }
}

export default reducer;