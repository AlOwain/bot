import os
import discord
from discord.ext import commands

# -----------------------------
# -- B o i l e r   P l a t e --
# -----------------------------

config = {
    'prefix': '>', # Bot prefix
    'version': '0.0.0', # Bot version
    'guild': 733369204748583095, # Server ID

    # FOR TEST USE ONLY, PLEASE ADD AN API_KEY TO YOUR ENVIROMENT VARIABLES
    'API_KEY': False
}

API_KEY = config['API_KEY'] if config['API_KEY'] else os.getenv('DISCORD_BOT')
if not API_KEY:
    exit('You have not set an API KEY.\nAdd a Discord API key to your enviroment variables.\nAlternatively, you can add it to your config for testing purposes.')


# -----------------------
# -- B o t   C l a s s --
# -----------------------


class Bot(discord.Client):
    def __init__(self):
        self.prefix = config['prefix']
        self.ready = False

    async def on_connect(self):
        print('Connected')
    async def on_disconnect(self):
        print('Disconnected')

    # async def on_ready(self):
    #     if not self.ready:
    #         self.ready = True
    #         self.guild = self.get_guild(config['guild'])
    #     else:
    #         print('Reconnected')


bot = Bot()

bot.run(API_KEY)