import React from 'react'
import axios from "axios";
import {AvForm,AvField} from 'availity-reactstrap-validation'



function Bot() {

    const submitMessage = (event,values) => {
        console.log(values)
        event.preventDefault()
        const {fullName, email, message} = event.target

        const form = {
           ...values
        }

        const messageText =
            `<b>full name:</b> ${form.fullName}\n` +
            `<b>email:</b> ${form.email}\n` +
            `<b>message:</b> ${form.message}`
        ;

        const token =  "2092444366:AAEvvw5ReNLPpJOrlyIrR4AgxyaMqTsoCoA";

        const api = `https://api.telegram.org/bot${token}/sendMessage`

        axios.post(api, {chat_id: "-679932817", text: messageText, parse_mode: "html"})
            .then(() => {
                // setProgress({loading: false, success: true, error: false})
                console.log("success")
            })
            .catch(() => {
                console.log("error")
                // setProgress({loading: false, success: false, error: true})
            })

    }


    return <div className={'container'}>

        <AvForm onValidSubmit={submitMessage} id={'bot'}>

            <AvField name="fullName"  placeholder={'Product Name'}  className={'avform'} required />
            <AvField name="email"  placeholder={'Product Name'}  className={'avform'} required />
            <AvField name="message"  placeholder={'Product Name'}  className={'avform'} required />


        </AvForm>


        <button  form={'bot'} >
            Submit
        </button>

    </div>



}
export default Bot