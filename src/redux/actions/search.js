export function actionSetSearch(term) {
  return {
    type: 'SET_SEARCH',
    term
  }
}

export function actionSetCategory(category) {
  return {
    type: 'SET_CATEGORY',
    category
  }
}

export function actionSetResults(results) {
  return {
    type: 'SET_RESULTS',
    results
  }
}
