// import { Client, Account } from 'appwrite';

// const client = new Client()
// client
//   // .setEndpoint('https://cloud.appwrite.io/v1') 
//   .setProject('6780ed42001d5c9ae2e3');

// export const account = new Account(client);

// export default client;

import { Client, Account } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1') 
  .setProject('6780ed42001d5c9ae2e3'); 

export const account = new Account(client);

export default client;
