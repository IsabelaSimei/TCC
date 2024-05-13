import React from 'react';
import logo from './assets/logo.png';
import './App.css';
import { ChatMessage, ChatState } from './types';
import { ChatContext } from './ChatContext';

class App extends React.Component {
  static contextType = ChatContext;

  state: ChatState = {
    messages: [
      {
        message: 'Bem-vindo(a)! Digite sua mensagem.',
        author: ''
      }
    ],
    input: '',
    author: ''

  }

  componentDidMount () {

    //initiate socket connection
    this.context.init();

    const observable = this.context.onMessage();

    observable.subscribe((m: ChatMessage) => {
      let messages = this.state.messages;

      messages.push(m);
      this.setState({ messages: messages });
    });
  }

  componentWillUnmount () {
    this.context.disconnect();
  }

  render () {

    const updateInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({ input: e.target.value});
    }

    const insertName = (e: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({ author: e.target.value });
    };

    const handleMessage = (): void => {

      const author: string = this.state.author;

      if (this.state.input !== '') {
        this.context.send({
          message: this.state.input,
          author: this.state.author,
        });
        this.setState({ input: '' });
      }
    };

    let msgIndex = 0;
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <input
          className="App-Textarea"
          type="text"
          onChange={insertName}
          placeholder="Seu nome"
          value={this.state.author}
        />
        <div className="App-chatbox">
          {this.state.messages.map((msg: ChatMessage) => {
            msgIndex++;
            return (
              <div key={msgIndex}>
                <p>{msg.author}</p>
                <p>{msg.message}</p>
              </div>
            );
          })}
        </div>
        <input
          className="App-Textarea"
          placeholder="Digite sua mensagem..."
          onChange={updateInput}
          value={this.state.input}
        />
        <p>
          <button
            onClick={() => {
              handleMessage();
            }}
          >
            Enviar
          </button>
        </p>
      </div>
    );
  }
}

export default App;
