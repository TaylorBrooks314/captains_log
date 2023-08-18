import React from "react";

export default function Edit({log}) {
    // console.log(log.title)
    // console.log(log.entry)
    // console.log(log.shipIsBroken)


    return (
        <div>
            <form action={`/logs/${log._id}?_method=PUT`} method="POST">
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" defaultValue={log.title}></input>
                <br />
                <label htmlFor="entry">Entry: </label>
                <input type="textarea" name="entry" defaultValue={log.entry}></input>
                <br />
                <label htmlFor="shipIsBroken">Ship Is Broken: </label>
                <input type="checkbox" name="shipIsBroken" defaultValue={log.shipIsBroken? "on":'off'}></input>
                <br />
                <input type="submit"></input>
            </form>
        </div>
    )
}