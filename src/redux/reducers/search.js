export function search(state = {
  term: '',
  startDate: '2021-08-15',
  endDate: '2021-09-02',
  results: []
  }, action) {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state,
        term: action.term
      }
      case 'SET_STARTDATE':
        return { ...state,
          startDate: action.startDate
        }
      case 'SET_ENDDATE':
        return { ...state,
          endDate: action.endDate
        }
      case 'SET_RESULTS':
        return { ...state,
          results: action.results
        }
    default:
      return state
  }
}
