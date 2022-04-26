import os
import discord

class MyClient(discord.Client):
    async def on_ready(self):
        print('Logged on as {0}!'.format(self.user))

    async def on_message(self, message):
        print('Message from {0.author}: {0.content}'.format(message))

API_KEY = os.getenv('DISCORD_BOT')
if not API_KEY:
    print('You have not set an API KEY.')
else:
    client = MyClient()
    client.run(API_KEY)