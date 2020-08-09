import { UserAgentApplication } from '@microsoft/microsoft-graph-client/lib/src/UserAgentApplication';
import { MSALAuthenticationProvider } from '@microsoft/microsoft-graph-client/lib/src/MSALAuthenticationProvider';

import "./App.css";
import "react-tabulator/lib/styles.css";
import "react-tabulator/lib/css/tabulator.min.css";


import React, { Component } from 'react'

export class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          response: {}
      }
      this.callService = this.callService.bind(this)
  }
  
  async callService(client,event){
    let res = await client.api('/me/calendars/AAMkAGViNDU7zAAAAAGtlAAA=/events')
    .post(event);
    console.log(res);
  }
  
  componentDidMount() {
    const clientId = "5db5e2ec-3cac-4bc5-b549-ea215d3fa1ab"; // Client Id of the registered application
    const callback = (errorDesc, token, error, tokenType) => {};
    // An Optional options for initializing the MSAL @see https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics#configuration-options
    const options2 = {
      redirectUri: "www.google.com.pe",
    };
    const graphScopes = ["user.read", "mail.send"]; // An array of graph scopes
    
    // Initialize the MSAL @see https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics#initialization-of-msal
    const userAgentApplication = new UserAgentApplication(clientId, undefined, callback, options2);
    const authProvider = new MSALAuthenticationProvider(userAgentApplication, graphScopes );
    
    const options = {
      authProvider,
    };
    
    const client = userAgentApplication.init(options);
    
    const event = {
      subject: "Let's go for lunch",
      body: {
        contentType: "HTML",
        content: "Does mid month work for you?"
      },
      start: {
          dateTime: "2020-08-15T12:00:00",
          timeZone: "Pacific Standard Time"
      },
      end: {
          dateTime: "2020-08-15T14:00:00",
          timeZone: "Pacific Standard Time"
      },
      location:{
          displayName:"Harry's Bar"
      },
      attendees: [
        {
          emailAddress: {
            address:"smallmac@everis.com",
            name: "SMALLMAC"
          },
          type: "required"
        }
      ]
    };
    this.callService(client,event);
  }
  

  render() {
    return (
      <div>
          Hola
      </div>
    )
  }
}

export default App

