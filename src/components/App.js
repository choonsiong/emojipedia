import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

// No need anymore, after use the anonymous function below
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
                {emojipedia.map(emojiEntry => (
                        <Entry
                            key={emojiEntry.id}
                            name={emojiEntry.name}
                            emoji={emojiEntry.emoji}
                            description={emojiEntry.meaning}
                        />
                    ))
                }
            </dl>
        </div>
    );
}

export default App;
