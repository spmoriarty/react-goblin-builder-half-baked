import React from 'react';
import Goblin from './Goblin';

export default function GoblinList(goblins) {
  return (
    <><div className='goblin-list quarter'>

      <section>
        <h2>A NEW GOBLIN!:</h2>
        {goblins.map((goblin, i) => <Goblin key={goblin + i} Goblin={goblin} />)}

      </section>
      );

      {/* map over your goblins and render out a Goblin component for each goblin. You've seen this before. The only difference here is that you need to pass handleDeleteGoblin (a prop that is a function), as well */}
    </div><handleDeleteGoblin />
  );
}
