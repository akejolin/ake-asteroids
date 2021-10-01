type ReduxAction = {
  type: string
  action: any,
  payload: any,
}
  
type ReduxDispatchType = (args: ReduxAction) => ReduxAction