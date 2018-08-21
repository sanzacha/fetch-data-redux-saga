const axios = require('axios');

function TrelloApp(currState, action) {
  switch(action.type) {
    case 'ADD_CARD':
      const list = currState.currentBoard.lists.find(list => list.id === action.payload.listId);
      const index = currState.currentBoard.lists.indexOf(list);
      const newList = Object.assign({}, list, {
        cards: [...list.cards, { id: '' + Math.random()*89793113, text: action.payload.text }]
      });
      return Object.assign({}, currState, {
        currentBoard: Object.assign({}, currState.currentBoard, {
          lists: [
            ...currState.currentBoard.lists.slice(0, index),
            newList,
            ...currState.currentBoard.lists.slice(index+1)
          ]
        })
      });

    case 'EDIT_BOARD':
      // TODO:
    case 'CREATE_LIST':
      // TODO:
    case 'EDIT_LIST':
      // TODO:
      

    case 'MOVE_LIST':
      // TODO:
    case 'EDIT_CARD':
      {
        const {listId, cardId, newValue} = action.payload;
        const listIndex = this.state.lists.findIndex(list => list.id === listId);
        // const list = this.state.lists[listIndex];
        // const cardIndex = list.cards.findIndex(card => card.id === cardId);
        // const card = list.cards[cardIndex];

        // console.log('listIndex:', listIndex);
        // console.log('cardIndex:', cardIndex);

        // const updatedCards = [...list.cards.slice(0, cardIndex), {id: cardId, text: newValue}, ...list.cards.slice(cardIndex+1)];
        // const updatedList = Object.assign({}, list, {cards: updatedCards});
        // const lists = [...this.state.lists.slice(0, listIndex), updatedList, ...this.state.lists.slice(listIndex+1)];
        // const currentBoard = Object.assign({}, currState.currentBoard,{ lists });
        // return Object.assign({}, currState, {currentBoard});
      }
    case 'MOVE_CARD':
      // TODO:
    case 'SET_CURRENT_BOARD':
      return Object.assign({}, {
        currentBoard: action.payload
      });
    case 'SET_BOARDS_LIST':
      console.log('new Boards List:', action.payload);
      return Object.assign({}, {
        boardsList: action.payload
      });
    default:
      return currState;
  }
}

/*
  {
    currentBoard: {
      id: ,
      name: ,
      lists: [{
        id: ,
        name: ,
        text: 
      }]
    }
  }

  {
    type: 'ADD_CARD',
    payload: {
      listId: '',
      text: ''
    }
  }

  {
    type: 'CREATE_LIST',
    payload: {
      name: ''
    }
  }

  {
    type: 'EDIT_CARD',
    payload: {
      listId: ,
      cardId: ,
      newText: 
    }
  }

  {
    type: 'DELETE_CARD',
    payload: {
      listId: '',
      cardId: ''
    }
  }

  {
    type: 'DELETE_LIST',
    payload: {
      listId: ''
    }
  }

  {
    type: 'MOVE_CARD',
    payload: {
      fromListId: ,
      toListId: ,
      toListPosition: 
    }
  }

  {
    type: 'MOVE_LIST',
    payload: {
      fromPosition: '',
      toPosition: ''
    }
  }

  {
    type: 'EDIT_LIST',
    payload: {
      listId: '',
      newName:
    }
  }

  {
    type: 'EDIT_BOARD',
    payload: {
      newName:
    }
  }
*/

module.exports = TrelloApp;