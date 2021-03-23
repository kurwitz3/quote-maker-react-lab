const ADD = 'ADD_QUOTE'
const REMOVE = 'REMOVE_QUOTE'
const UPVOTE = 'UPVOTE_QUOTE'
const DOWNVOTE ='DOWNVOTE_QUOTE'

export const addQuote = (quote) => ({type: ADD, quote: quote})

export const removeQuote = (quote) => ({type: REMOVE, quoteId: quote})

export const upvoteQuote = (quote) => ({type: UPVOTE, quoteId: quote})

export const downvoteQuote = (quote) => ({type: DOWNVOTE, quoteId: quote})
