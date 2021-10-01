import * as React from "react"
import { createStore, applyMiddleware, Store, combineReducers } from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import { Provider } from "react-redux"
import thunk  from "redux-thunk"

import App from "./App"
import articleReducer from "./store/articles/reducer"

interface IAppState {
  article: ArticleState
}

const reducer = combineReducers<IAppState>({
  article: articleReducer
})

const store: Store<ArticleState, ArticleAction> & {
  dispatch: DispatchType
} = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(thunk),
    )
  )
export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)