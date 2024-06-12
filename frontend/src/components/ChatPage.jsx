import { useState } from "react"
import './ChatPage.css'
import bot from "../bot"
export const ChatPage = ()=>{
    const [chatHistory, setChatHistory] = useState([])
    const [input, setInput] = useState('')

    async function btnClick(){
        setChatHistory(prevHistory => [...prevHistory,{type: 'user', content: input}])
        const response = await bot(input)
        setChatHistory(prevHistory => [...prevHistory,response])
        setInput('')
        console.log(chatHistory)
    }
    function updateInput(event){
        setInput(event.target.value)
    }

    return(
        <div className="ChatPage">
            <ChatWindow chatHistory={chatHistory}></ChatWindow>
            <Input btnClick={btnClick} input={input} updateInput={updateInput}></Input>
        </div>
    )
}

export const ChatWindow = (props) =>{
    return (
        <div className="ChatWindow">
            {props.chatHistory.map((chat, index) => (
                <Message key={index} chat= {chat}></Message>
            ))}
        </div>
    )
}

export const Message = (props)=>{
    return(
        <div className={props.chat.type}> {props.chat.content} </div>
    )
}

export const Input = (props) =>{
    return(
        <div className="input">
            <input type="text" value={props.input} placeholder="ASK ME" onChange={props.updateInput}></input>
            <button className="btn" onClick={props.btnClick}>submit</button>
        </div>
    )
}