// JavaScript Assincrono
// await async
// Fullfilled

import { MongoClient } from "mongodb";

 const passwordCluster = "Hl8CzGHk3fHOFFbq"

const URI =
`mongodb+srv://dg203253:${passwordCluster}@cluster0.nospj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
//"mongodb+srv://fullstackjornada:qojI71xVU2aV8UKC@cluster0.v1qra.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
// Felipemelo7782