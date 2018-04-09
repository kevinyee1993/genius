# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'demo', password: 'password')
User.create(username: 'Kevin', password: 'password')
User.create(username: 'Ron', password: 'password')

Track.create(title: "Go ahead it's fine",

  lyrics: "Me: Hey I'm going to play basketball with my friends \n
  Girlfriend: I thought we were going to hang out later?!??! \n
  Me: We already hung out the entire day! \n
  Girlfriend: Oh. \n
  Me: What? \n
  Girlfriend: No go ahead it's fine \n
  Me: Wait are you mad? \n
  Girlfriend: No go ahead and play. \n
  Me: I can stay and hang out it's no problem \n
  Girlfriend: No go go I want you to go. \n
  Me: Okay cool see you later!",

  artist: "Kevin's GF",

  album: "Ball is Life",

  author_id: 4,

  img_url: "http://i0.kym-cdn.com/photos/images/facebook/000/993/875/084.png"
)


Track.create(title: "Don't Procrastinate",

  lyrics: "Professor: This is a very large assignment. \n
  You may have been able to wait \n
  until the last minute to do projects in high school \n
  but you're not in high school anymore. \n
  I guarantee you that if you don't start early you will regret it",

  artist: "All my Professors",

  album: "Why is my GPA so low",

  author_id: 2,

  img_url: "https://abovethelaw.com/wp-content/uploads/2016/02/mean-professor.jpg"
)


Track.create(title: "RURURURURURURU",

  lyrics: "RURURURURURURU \n
  RURURURURURURU \n
  RURURURURURURU \n
  RURURURURURURU \n
  RURURURURURURU \n",

  artist: "My Dog Kona",

  album: "Ruff Life",

  author_id: 2,

  img_url: "https://i.imgur.com/bDZIcTG.jpg"
)

Track.create(title: "I'll Be Right Outside",

  lyrics: "Me: We're coming to pick you up in 10 minutes. \n
  Friend who is always late: Ok I'm almost ready see you then! \n
  [1 hour later] \n
  Me: Okay we're actually outside your house now. \n
  Friend who is still not ready: Ok just putting on my shoes I'll be right outside! \n
  [10 minutes later] \n
  Friend: Alright thanks for waiting guys!\n
  Us: ...\n
  Friend: Actually wait I forgot my wallet let me go get it real quick \n",

  artist: "Ron",

  album: "Why Is Everyone Mad at Me",

  author_id: 3,

  img_url: "https://vignette.wikia.nocookie.net/minecraft/images/0/0f/Box-turtle-smiling-oglala-lakota-college.jpg/revision/latest?cb=20161123230039"
)
