export function search(state = {
  term: '',
  category: 'Business',
  results: []
  }, action) {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state,
        term: action.term
      }
      case 'SET_CATEGORY':
        return { ...state,
          category: action.category
        }
      case 'SET_RESULTS':
        return { ...state,
          results: action.results
        }
    default:
      return state
  }
}
