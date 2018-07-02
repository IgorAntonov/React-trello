export const types = {
  BOARDS_REQUEST: 'ENTITIES/BOARDS_REQUEST',
  BOARDS_REFRESH: 'ENTITIES/BOARDS_REFRESH',
  BOARDS_SUCCESS: 'ENTITIES/BOARDS_SUCCESS',
  BOARDS_FAILURE: 'ENTITIES/BOARDS_FAILURE',
  BOARD_DELETE: 'ENTITIES/BOARD_DELETE',
  LIST_DELETE: 'ENTITIES/LIST_DELETE'
};

export const actions = {
  requestBoards: () => ({
    type: types.BOARDS_REQUEST
  }),
  refreshBoards: () => ({
    type: types.BOARDS_REFRESH
  }),
  successBoards: payload => ({
    type: types.BOARDS_SUCCESS,
    payload
  }),
  failureBoards: error => ({
    type: types.BOARDS_FAILURE,
    error
  }),
  deleteBoard: payload => ({
    type: types.BOARD_DELETE,
    payload
  }),
  deleteList: payload => ({
    type: types.LIST_DELETE,
    payload
  })
};