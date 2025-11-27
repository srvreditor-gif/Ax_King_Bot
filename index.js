const mineflayer = require('mineflayer')
const { pathfinder, Movements, goals } = require('mineflayer-pathfinder')

const bot = mineflayer.createBot({
  host: 'lifestealzlz.progamer.me',
  port: 27155,
  username: 'Ax_King',
  version: '1.20.4',
  auth: 'offline'
})

bot.loadPlugin(pathfinder)

function r() {
  Math.random() > 0.6 && bot.setControlState('jump', true) && setTimeout(() => bot.setControlState('jump', false), 500)
  Math.random() > 0.7 && bot.setControlState('sprint', true) && setTimeout(() => bot.setControlState('sprint', false), 1000)
  Math.random() > 0.8 && bot.setControlState('sneak', true) && setTimeout(() => bot.setControlState('sneak', false), 800)
  bot.look(bot.entity.yaw + (Math.random()-0.5)*1.5, bot.entity.pitch + (Math.random()-0.5)*0.4)
  Math.random() > 0.5 && bot.swingArm()
}

bot.once('spawn', () => {
  console.log('Ax_King is ruling the server 24/7')
  const mcData = require('minecraft-data')(bot.version)
  const m = new Movements(bot, mcData)

  setInterval(() => { r(); bot.chat('/powerup stack'); console.log('Ax_King → /powerup stack') }, 70000 + Math.random()*60000)
  setInterval(r, 12000 + Math.random()*18000)
  setInterval(() => {
    const a = Math.random() * Math.PI * 2
    bot.pathfinder.setMovements(m)
    bot.pathfinder.setGoal(new goals.GoalBlock(bot.entity.position.x + Math.cos(a)*3, bot.entity.position.y, bot.entity.position.z + Math.sin(a)*3))
  }, 300000 + Math.random()*180000)
})

bot.on('kicked',
