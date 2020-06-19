import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEmojiEntry(emojiEntry) {
    return (
        <Entry
            key={emojiEntry.id}
            name={emojiEntry.name}
            emoji={emojiEntry.emoji}
            description={emojiEntry.meaning}
        />
    );
}

function App() {
    return (
        <div>
            <h1><span>emojipedia</span></h1>

            <dl className="dictionary">
              {emojipedia.map(createEmojiEntry)}
            </dl>
        </div>
    );
}

export default App;
