import { v4 } from 'uuid'

const messages = [
  {
    id: v4(),
    messages: [{
      id: v4(),
      message: "",
      type: '',
      date:'',
      owner: "",
    }],
    status: "",
    owner: "",
    ownerEmail: "",
  }
]


export const MessagesContent = () => {
  return <div>MEssages</div>
}
