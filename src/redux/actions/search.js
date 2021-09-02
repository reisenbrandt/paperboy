export function actionSetSearch(term) {
  return {
    type: 'SET_SEARCH',
    term
  }
}

export function actionSetStartDate(startDate) {
  return {
    type: 'SET_STARTDATE',
    startDate
  }
}

export function actionSetEndDate(endDate) {
  return {
    type: 'SET_ENDDATE',
    endDate
  }
}

export function actionSetResults(results) {
  return {
    type: 'SET_RESULTS',
    results
  }
}
