# Move log bot

<strong>
    Discord bot that matches audit log movements to room switching to display a log of moves.
</strong>

## Tutorial

Install node.js and npm; [more info here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

In the same directory; launch your terminal and type:

```
npm install discord.js
```
```
npm install @discordjs/builders @discordjs/rest discord-api-types
```

## How this works, and its limitations:

Discord provides an audit on every move action providing who did it as well as how many users were moved, but not an identifier for the user being moved nor the room they were moved to, or moved from. On a seperate note Discord triggers an event whenever someone switches between two rooms. So I thought it'd be cool to create a bot that attempts to match the room-switching event with the audit log of user move actions.

This however creates issues where the bot is not sure if the user switching channels is the same as the one being moved. So this bot attempts to filter many scenarios that would prove whether or not they are the same event / action.

#### Scenarios you could filter out:

- [x] Make sure the triggered event is actually a channel switch not a user joining or leaving the room.

- [x] Make sure the user being moved is not the same as the one switching.

- [x] Only work on audits not containing bots. *Optional, but filters a whole lot of edge cases.*

- [ ] Match the time of the audit log move to the channel switch.

- [ ] Match the amount of audit log moves to amount of channel switches.

- [ ] Confirm the channel switch to be to a room the mover has access to.

*Many more filters not mentioned . . .*

## PR's and forks

Feel free to create a pull request adding any of the suggested filters, or ones you created. And feel free to fork the repo if you think you can improve on it. Just credit the origin to my Github [@detrio1](https://github.com/detrio1).

Also, this bot needs a name.. Accepting suggestions.