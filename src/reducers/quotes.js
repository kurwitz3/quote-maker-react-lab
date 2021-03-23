import uuid from 'uuid'


function quotes(state = [], action){
let idx;
const id = uuid()
switch(action.type){
  case 'ADD_QUOTE': 
    return state.concat(action.quote)
  
  case 'REMOVE QUOTE':
    idx= state.findIndex(x =>{
      return x.id === action.quoteId
    })
    if(idx > -1){
      return [...state.slice(0, idx), ...state.slice(idx + 1)]
    }
    else{
      return state
    }

  case 'UPVOTE_QUOTE':
    idx = state.findIndex(x => {
      return x.id === action.quoteId
    })
    if (idx > -1) {
      let upQuote = Object.assign({}, state[idx], { votes: state[idx].votes + 1 })
      return [...state.slice(0, idx), upQuote, ...state.slice(idx + 1)]
    } else {
    
    return state;
    }
    case 'DOWNVOTE_QOUTE':
       idx = state.findIndex(x => {
        return x.id === action.quoteId
      })
      if (idx > -1) {
        console.log(`Element to downvote is index ${idx} with id ${action.quoteId}`)
        let downQuote = Object.assign({}, state[idx], { votes: state[idx].votes - 1 });
        if (downQuote.votes < 0 ) downQuote.votes = 0;
        return [...state.slice(0, idx), downQuote, ...state.slice(idx + 1)]
      } else {
      console.log(`DOWNVOTE_QUOTE id ${action.quoteId} not found`)
      return state;
      }

    default:
  return state
}

}


export default quotes