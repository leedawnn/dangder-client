import { gql } from "@apollo/client";

export const FETCH_CHAT_ROOMS = gql`
  query fetchChatRooms($dogId: String!) {
    fetchChatRooms(dogId: $dogId) {
      id
      chatPairDog {
        id
        name
      }
      dog {
        id
        name
      }
      lastMessage {
        senderId
        type
        message
      }
    }
  }
`;

export const FETCH_ONE_DOG = gql`
  query fetchOneDog($id: String!) {
    fetchOneDog(id: $id) {
      id
      name
      age
      img {
        id
        img
      }
    }
  }
`;

export const FETCH_CHAT_MESSAGES_BY_CHAT_ROOM_ID = gql`
  query fetchChatMessagesByChatRoomId($chatRoomId: String!) {
    fetchChatMessagesByChatRoomId(chatRoomId: $chatRoomId) {
      senderId
      type
      message
      lat
      lng
      meetAt
      chatRoom {
        id
      }
    }
  }
`;

export const DELETE_CHAT_ROOM = gql`
  mutation deleteChatRoom($id: String!) {
    deleteChatRoom(id: $id)
  }
`;