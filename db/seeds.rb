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
User.create(username: 'Byron', password: 'password')
User.create(username: 'Joseph', password: 'password')
User.create(username: 'Curtis', password: 'password')
User.create(username: 'Adam', password: 'password')
User.create(username: 'Howard', password: 'password')


Track.create(title: "Weight in Gold",

  lyrics: "[Verse 1]\nBlack dust in orbit\nCascades down like a parachute\nBricks on my shoulders\nThis gravity hurts when you know the truth\n\n[Chorus]\nI’m pulling my weight in gold\nCall me anxious, call me broke\nI can’t lift this on my own\nI’m pulling my weight in gold\nCall me anxious, call me broke\nBut I can’t lift this on my own\n\n[Verse 2]\nWe dreamt like martyrs, oh\nI never thought I was bold enough\nYou pushed me further, ooh\nAnd I take the blame for the both of us\n\n[Chorus]\nI’m pulling my weight in gold\nCall me anxious, call me broke\nI can’t lift this on my own\nI’m pulling my weight in gold\nCall me anxious, call me broke\nBut I can’t lift this on my own\n\n[Bridge]\nOh, universe, hold me up\nTried your best, is it ever enough\nWhen it’s already dragging me down?\n\n[Chorus]\nI’m pulling my weight in gold\nCall me anxious, call me broke\nBut I can’t lift this on my own\nPulling my weight in gold\nCall me anxious, call me broke\nBut I can’t lift this on my own",

  artist: "Gallant",

  album: "Ology",

  author_id: User.find_by(username: "demo").id,

  img_url: "https://res.cloudinary.com/dawsdkywh/image/upload/v1525715364/ology.jpg",

  song_url: "https://res.cloudinary.com/dawsdkywh/video/upload/v1525667025/Gallant_-_Weight_In_Gold_Louis_Futon_Remix.mp3"
)


Track.create(title: "God's Plan",

  lyrics: "[Intro]\nYeah, they wishin' and wishin' and wishin' and wishin'\nThey wishin' on me, yuh\n\n[Verse 1]\nI been movin' calm, don't start no trouble with me\nTryna keep it peaceful is a struggle for me\nDon't pull up at 6 AM to cuddle with me\nYou know how I like it when you lovin' on me\nI don't wanna die for them to miss me\nYes, I see the things that they wishin' on me\nHope I got some brothers that outlive me\nThey gon' tell the story, it was different with me\n\n[Chorus 1]\nGod's plan, God's plan\nI hold back, sometimes I won't, yuh\nI feel good, sometimes I don't, ayy, don't\nI finessed down Weston Road, ayy, 'nessed\nMight go down a G.O.D., yeah, wait\nI go hard on Southside G, yuh, wait\nI make sure that north-side eat\n\n[Post-Chorus]\nAnd still\nBad things\nIt's a lot of bad things\nThat they wishin' and wishin' and wishin' and wishin'\nThey wishin' on me\nBad things\nIt's a lot of bad things\nThat they wishin' and wishin' and wishin' and wishin'\nThey wishin' on me\nYuh, ayy, ayy\n\n[Verse 2]\nShe said, \"Do you love me?\" I tell her, \"Only partly\"\nI only love my bed and my momma, I'm sorry\nFifty Dub, I even got it tatted on me\n81, they'll bring the crashers to the party\nAnd you know me\nTurn the O2 into the O3, dog\nWithout 40, Oli, there’d be no me\nImagine if I never met the broskies\n\n[Chorus 2]\nGod's plan, God's plan\nI can't do this on my own, ayy, no, ayy\nSomeone watchin' this it close, yep, close\nI've been me since Scarlett Road, ayy, road, ayy\nMight go down as G.O.D., yeah, wait\nI go hard on Southside G, ayy, wait\nI make sure that north-side eat, yuh\n\n[Post-Chorus]\nAnd still\nBad things\nIt's a lot of bad things\nThat they wishin' and wishin' and wishin' and wishin'\nThey wishin' on me\nYeah, yeah\nBad things\nIt's a lot of bad things\nThat they wishin' and wishin' and wishin' and wishin'\nThey wishin' on me\nYeah",

  artist: "Drake",

  album: "Scary Hours",

  author_id: User.find_by(username: "demo").id,

  img_url: "https://res.cloudinary.com/dawsdkywh/image/upload/v1525715248/scary_hours.jpg",

  song_url: "https://res.cloudinary.com/dawsdkywh/video/upload/v1525668593/God_s_Plan.mp3"
)



Track.create(title: "Good Life",

  lyrics: "[Hook: Kanye West & T-Pain]\nLike we always do at this time\nI go for mine, I gots to shine\n(Now throw yo' hands up in the sky)\nI, go, go for mine, I gots to shine\n(Now throw yo' hands up in the sky)\nI'ma get on the TV momma, I'ma\nI'ma put it down\n(Ayy) ayyy (ayy) ayyy\n(Ayy) ayyy (ayy) I'm good\n\n[Verse 1: Kanye West]\nWelcome to the good life, where people who sell D\nWon't even get pulled over in they new V\nThe good life, let's go on a living spree\nThey say the best things in life are free\nThe good life, it feel like Atlanta\nIt feel like L.A., it feel like Miami\nIt feel like N.Y., summertime Chi\nAh! (Now throw yo' hands up in the sky)\nSo I roll through good\nY'all pop the trunk, I pop the hood, Ferrari\nAnd she got the goods\nAnd she got that good personality, I got to look, sorry!\n\n[Bridge]\nYo, it's got to be cause I'm seasoned\nHaters give me them salty looks, Lawry's\n50 told me, go 'head, switch the style up\nAnd if they hate then let 'em hate and watch the money pile up\nThe good life\n\n[Hook: Kanye West & T-Pain]\nNow I, I go for mine, I got to shine\n(Now throw yo' hands up in the sky)\nNow I, I go for mine, I got to shine\n(Now throw yo' hands up in the sky)\n(I'ma get on this TV momma, I'ma)\n(I'ma put it down)\nAyy (ayyy) ayy (ayyy)\nAyy (ayyy) ayy (I'm good)\n\n[Verse 2: Kanye West]\nWelcome to the good life!\nWhere we like the girls who ain't on TV\nCause they got mo' (personality than the models)\nThe good life, so keep it comin' with the bottles\nCause she feel booze like she bombed at Apollo\nThe good life, it feel like Houston\nIt feel like Philly, it feel like D.C\nIt feel like V.A. or the Bay or Yay\nAy, this is the good life (Welcome to the good life)\nHomey tell me what's good\nWhy I only got a problem when you in the hood (Welcome to the good life)\nLike I'm new in the hood\nThe only thing I wish, I wish a person would (Welcome to the good life!)\nHe probably think he could\nBut, but, I don't think he should (Welcome to the good life)\n50 told me, go 'head, switch the style up\nAnd if they hate then let 'em hate and watch the money pile up\nThe good life\n\n[Hook: Kanye West & T-Pain]\nNow I, I go for mine, I gots to shine\n(Now throw yo' hands up in the sky)\nNow I, I go for mine, I gots to shine\n(Now throw yo' hands up in the sky)\nI'ma get on the TV momma, I'ma\nI'ma put it down\n(Ayy) ayyy (ayy) ayyy\n(Ayy) ayyy (ayy) I'm good\n\n[Verse 3: Kanye West]\nHave you ever popped champagne on a plane, while gettin' some advice\nWhipped it out, she said 'I never seen Snakes on a Plane'\nWhether you broke or rich you gotta get this\nHavin' money's not everything, not havin' it is\nI was splurgin' on Tryst, but when I get my card back\nActivated, I'm back to Vegas\n'Cause (the good life) I always had a passion for flashin'\nBefo' I had it, I closed my eyes and imagined the good life\n\n[Outro: T-Pain]\nBetter than the life I lived\nWhen I thought that I was gonna go crazy\nAnd now my grandmomma\nAin't the only girl callin me 'baby'\nIf you feelin me now\nThen put yo' hands up in the sky, and let me hear you say\nHeyy, heyy, ooooh I'm GOOD!",

  artist: "Kanye West",

  album: "Graduation",

  author_id: User.find_by(username: "demo").id,

  img_url: "https://res.cloudinary.com/dawsdkywh/image/upload/v1525715165/graduation.jpg",

  song_url: "https://res.cloudinary.com/dawsdkywh/video/upload/v1525668623/Good_Life.mp3"
)



Track.create(title: "Love on Top",

  lyrics: "[Intro]
Bring the beat in

[Verse 1]
Honey, honey
I can see the stars all the way from here
Can't you see the glow on the window pane?
I can feel the sun whenever you're near
Every time you touch me I just melt away

[Pre-Chorus]
Now everybody asks me why I'm smiling out from ear to ear
(They say love hurts) But I know
(It's gonna take a little work) Oh!
Nothing's perfect, but it's worth it
After fighting through my tears
And finally you put me first

[Chorus 1]
Baby, it's you, you're the one I love
You're the one I need, you're the only one I see
Come on, baby, it's you
You're the one that gives your all
You're the one I can always call
When I need you, make everything stop
Finally, you put my love on top

[Post-Chorus]
Ooh, come on, baby!
You put my love on top, top, top, top, top
You put my love on top
Ooh, come on, baby!
You put my love on top, top, top, top, top
You put my love on top

[Verse 2]
Baby, baby, I can feel the wind whipping past my face
As we dance the night away
Boy your lips taste like a night of champagne
As I kiss you again, and again, and again, and again

[Pre-Chorus]
Now everybody asks me why I'm smiling out from ear to ear
(They say love hurts) But I know
(It's gonna take a little work) Oh!
Nothing's perfect, but it's worth it
After fighting through my tears
And finally you put me first

[Chorus 1]
Baby, it's you, you're the one I love
You're the one I need, you're the only one I see
Come on, baby, it's you
You're the one that gives your all
You're the one I can always call
When I need you, make everything stop
Finally, you put my love on top

[Post-Chorus]
Ooh, come on, baby!
You put my love on top, top, top, top, top
You put my love on top
Ooh, come on, baby!
You put my love on top, top, top, top, top
You put my love on top

[Chorus 2]
Baby, it's you, you're the one I love
You're the one I need, you're the only thing I see
Come on, baby, it's you
You're the one that gives your all
You're the one that always call
When I need you, baby, everything stops
Finally, you put my love on top

Baby, you're the one that I love
Baby, you're all I need
You're the only one I see
Come on, baby, it's you
You're the one that gives your all
You're the one I always call
When I need you, make everything stop
Finally, you put my love on top

Baby, 'cause you're the one that I love
Baby, you're the one that I need
You're the only one I see
Baby, baby, it's you
You're the one that gives your all
You're the one that always calls
When I need you everything stops
Finally you put my love on top

Baby, 'cause you're the one that I love
Baby, you're the one that I need
You're the only one I see
Baby, baby, it's you
You're the one that gives your all
You're the one that always calls
When I need you everything stops
Finally you put my love on top",

  artist: "Beyonce",

  album: "4",

  author_id: User.find_by(username: "demo").id,

  img_url: "https://res.cloudinary.com/dawsdkywh/image/upload/v1525715077/beyonce.jpg",

  song_url: "https://res.cloudinary.com/dawsdkywh/video/upload/v1525668661/Love_On_Top.mp3"
)


Track.create(title: "Rock with You",

  lyrics: "[Verse 1]
Girl, close your eyes
Let that rhythm get into you
Don't try to fight it
There ain't nothin' that you can do
Relax your mind
Lay back and groove with mine
You got to feel that heat
And we can ride the boogie
Share that beat of love

[Chorus]
I wanna rock with you (All night)
Dance you into day (Sunlight)
I wanna rock with you (All night)
We're gonna rock the night away

[Verse 2]
Out on the floor
There ain't nobody there but us
Girl, when you dance
There's a magic that must be love
Just take it slow
Cause we got so far to go
When you feel that heat
And we're gonna ride the boogie
Share that beat of love

[Chorus]
I wanna rock with you (All night)
Dance you into day (Sunlight)
I wanna rock with you (All night)
We're gonna rock the night away

[Bridge]
And when the groove is dead and gone (Yeah)
You know that love survives
So we can rock forever, on

[Refrain]
I wanna rock with you
I wanna groove with you
I wanna rock with you
I wanna groove with you

[Chorus]
I wanna rock (All night)
With you girl (Sunlight)
Rock with you, rock with you girl (Yeah)
(All night)
Dance the night away

I wanna rock with you (Yeah) (All night)
Rock you into day (Sunlight)
I wanna rock with you (All night)
Rock the night away

Feel the heat, feel the beat (All night)
Rock you into day (Sunlight)
I wanna rock (All night)
Rock the night away",

  artist: "Michael Jackson",

  album: "Off the Wall",

  author_id: User.find_by(username: "demo").id,

  img_url: "https://res.cloudinary.com/dawsdkywh/image/upload/v1525714974/off_the_wall.jpg",

  song_url: "https://res.cloudinary.com/dawsdkywh/video/upload/v1525668692/Michael_Jackson_-_Rock_With_You_Official_Video.mp3"
)



Track.create(title: "Gone",

  lyrics: "(Anderson .Paak)

Say, if you see me then you see me
But, I might not be here for too long
You know I just need a light though, honestly
Because uh…
Yeah, once the smoke goes in the air
Then you know I might not be there when it clears
But if I am, well then shit
You might have a good time

(Mr. Probz)

I guess I'll go stepping
Even though the world is upside down
Want to know answers to the questions
At the edge of the map
Will you fall down
Let up the mast so we can set sail
Not too many ways for me to plead help

In the big city
Are the streets really paved with gold
All I need is a witness
And a pack of cigarettes to smoke

Light one up and I’m gone
I’m so gone
Light one up and I’m gone
So gone
Light one up and I’m gone
I’m so gone
Light one up and I’m gone
I’m headed to the place I belong

No one can stop you
When you're the one the people have chose
And this ride is not for everybody
So get out if you can’t pay the toll
Let up the mast so we can set sail
I made up my mind to see for myself

In the big city
Are the streets really paved with gold
All I need is one witness
And a pack of cigarettes to smoke

Light one up and I’m gone
I’m so gone
Light one up and I’m gone
So gone
Light one up and I’m gone
I’m so gone
Light one up and I’m gone
I’m headed to the place I belong

(Anderson .Paak)

Heading off for the city
Another night, another hotel
Thank God I still got a little love in the one hitter
I can fly anywhere

Say, you won’t see me in one spot for too long
Had my drinks I got deep thoughts that you want
I put five in this jukebox
And still got a bit more time before they play my song
You'd be silly to plan your life around me
I got somewhere to go, somewhere I got to be
Ain’t no telling what the future holds but before I leave

(Mr. Probz)

Light one up and I’m gone
I’m so gone
Light one up and I’m gone
So gone
Light one up and I’m gone
I’m so gone
Light one up and I’m gone
I’m headed to the place I belong",

  artist: "Mr. Probz",

  album: "None",

  author_id: User.find_by(username: "demo").id,

  img_url: "https://res.cloudinary.com/dawsdkywh/image/upload/v1525714685/gone.jpg",

  song_url: "https://res.cloudinary.com/dawsdkywh/video/upload/v1525668720/Mr_Probz_-_Gone_feat._Anderson_.Paak_Official_Video_Ultra_Music.mp3"
)



Track.create(title: "Some Time",

  lyrics: "[Intro]
Yeah
Mhmm
No, no, no
Yeah, yeah, yeah, yeah, yeah
Yeah, yeah

[Chorus]
Please don't call my phone I need some time
Just to sit and think about my life
It's been every day nonstop every night
I just need some time, ooh
Please don't call my phone I need some time
Just to sit and think about my life
It's been every day nonstop every night
I just need some time, oooh

[Verse 1]
Please don't call my phone I don't got time to talk today
Facetimin' without appointments must of lost your way
Haven't even had the time to count the dollars made
I work on vacation, I don't take no holidays
I don't know what sleep is, I've been up since 'Chain Hang Low'
Body rollin’ all night, that’s a place that they can go
Still ain't had a day off, life been chaos, melee mode
I just need some time, sometimes I wish that they made clones

[Chorus]
Please don't call my phone I need some time
Just to sit and think about my life
It's been every day nonstop every night
I just need some time, oooh
Please don't call my phone I need some time
Just to sit and think about my life
It's been every day nonstop every night
I just need some time, oooh

[Verse 2]
Saw you turn your backs
Just to go and get a bag
I'm the best you ever had
Now there ain't no coming back
This ain't gonna work, I'm too focused on my work
I just need some time, oooh
I ain't got time to talk small town shit
Diemon.com got all my hits
Lookin' at the world like it's on my shit
I ain't got time to talk all my shit
But I'm gonna try 'til the casket closes
Until they give me my roses
I just need some time, oooh

[Chorus]
Please don't call my phone I need some time
Just to sit and think about my life
It's been every day nonstop every night
I just need some time, oooh
Please don't call my phone I need some time
Just to sit and think about my life
It's been every day nonstop every night
I just need some time",

  artist: "Russ",

  album: "Pieces",

  author_id: User.find_by(username: "demo").id,

  img_url: "https://res.cloudinary.com/dawsdkywh/image/upload/v1525714621/some_time.jpg",

  song_url: "https://res.cloudinary.com/dawsdkywh/video/upload/v1525668748/Russ_-_Some_Time_Official_Audio.mp3"
)


Track.create(title: "Sunday Morning",

  lyrics: "[Verse 1]
Sunday morning, rain is falling
Steal some covers, share some skin
Clouds are shrouding us in moments unforgettable
You twist to fit the mold that I am in

[Refrain]
But things just get so crazy, living life gets hard to do
And I would gladly hit the road, get up and go if I knew
That someday it would lead me back to you
That someday it would lead me back to you

[Chorus]
(Someday)That maybe all I need
In darkness, she is all I see
Come and rest your bones with me
Driving slow on Sunday morning
And I never want to leave

[Verse 2]
Fingers trace your every outline
Paint a picture with my hands
Back and forth we sway like branches in a storm
Change the weather, still together when it ends

[Chorus]
That maybe all I need
In darkness, she is all I see
Come and rest your bones with me
Driving slow on Sunday morning
And I never want to leave

[Refrain]
But things just get so crazy, living life gets hard to do
Sunday morning, rain is falling and I'm calling out to you
Singing, someday it'll bring me back to you
Find a way to bring myself back home to you

[Chorus]
May not know that maybe all I need
In darkness, she is all I see
Come and rest your bones with me
Driving slow on Sunday morning
Driving slow, oooh, yeah, yeah.....

[Outro]
It's a flower in your hair
I'm a flower in your hair",

  artist: "Maroon 5",

  album: "Songs About Jane",

  author_id: User.find_by(username: "demo").id,

  img_url: "https://res.cloudinary.com/dawsdkywh/image/upload/v1525714423/220px-Maroon_5_-_Songs_About_Jane.png",

  song_url: "https://res.cloudinary.com/dawsdkywh/video/upload/v1525668777/Sunday_Morning.mp3"
)


Track.create(title: "The Ways",

  lyrics: "[Pre-Chorus: Khalid]
Most of them gon' talk, I know, I know
Most of them gon' fall, I know, I know
We gon' bet it all, I know-oh-oh-oh
We gon' bet it all, I know-oh

[Chorus: Khalid]
Power girl
I really wanna know your ways
I really wanna know your ways
I really wanna know your ways
I really want a power girl
You been runnin' through my section all day
You been runnin' through my mind all day
All day, all day, all day, all day, yeah, uh

[Verse 1: Khalid]
Somethin' in the way you move
Radion beams castin' vibrant views
Pick me up when I fall down and out
Dust me off and show me all truth
Show me that I'll never fly alone
I fucked up so many times, but I still have you
Show me how you do it like that
Carryin' a brother is not easy on your back

[Pre-Chorus: Khalid]
Most of them gon' talk, I know, I know
Most of them gon' fall, I know, I know
We gon' bet it all, I know-oh-oh-oh
We gon' bet it all, I know-oh

[Chorus: Khalid]
Power girl
I really wanna know your ways
I really wanna know your ways
I really wanna know your ways (wanna know, I wanna know)
I really want a power girl
You been runnin' through my section all day
You been runnin' through my mind all day
All day, all day, all day, all day, yeah, uh

[Verse 2: Swae Lee & Kendrick Lamar]
Your body and your mind is your contribution
I'm here to give you love and never lose ya (lose)
Power girl, power girl
If I had you, I'd travel light years for you
Power girl, power girl
Let me show you what it do, aye
Workin' on me and you all day (all day)
Makin' sure what we have is safe, doin' it all (ooh)
She's over the city (she's over the city)
She go there if she been there (she go there if she been there)
I'm only one nigga (I'm only one nigga)
I can't be everywhere (ooh)
But I can take you anywhere, I know I swear, power girl

[Chorus: Khalid]
Power girl
I really wanna know your ways
I really wanna know your ways
I really wanna know your ways (wanna know, I wanna know)
I really want a power girl
You been runnin' through my section all day
You been runnin' through my mind all day
All day, all day, all day, all day, yeah, uh

[Outro: Swae Lee]
Power girl out in the city, some niggas, they out in the city
Goin' nowhere, girl, you doin' in it
Goin' everywhere, girl, you don't need it
Goin' everywhere, what you doin' in it?
Power girl, why you move in the city?
Do you know, girl, girl, you know the city?
You over the city, you over the city
Power girl, yeah, she's over the city
Hourglass, yeah, she turned it over
Power girl, yeah, she's over the city
Hourglass, yeah, she turned it over",

  artist: "Kendrick Lamar",

  album: "Black Panther: The Album",

  author_id: User.find_by(username: "demo").id,

  img_url: "https://res.cloudinary.com/dawsdkywh/image/upload/v1525714255/black_panther.jpg",

  song_url: "https://res.cloudinary.com/dawsdkywh/video/upload/v1525668809/The_Ways.mp3"
)


Track.create(title: "Wasted Times",

  lyrics: "[Verse 1]
Wasted times I spent with someone else
She wasn't even half of you
Reminiscin' how you felt
Reminiscin' how you felt
And even though you put my life through hell
I can't seem to forget 'bout you, 'bout you
I want you to myself

[Chorus]
And now I'm askin', who do you belong to now?
Who you give that love to now?
Who you pullin' up on?
Who you gettin' sprung for now?
And what they got that I ain't got? 'Cause I got a lot
Don't make me run up on 'em, got me blowin' up their spot
'Cause I ain't got no business catchin' feelings anyway
I ain't got no business catchin' feelings

[Verse 2]
Catchin' feelings
These girls only want you when you're winnin' (winnin')
But you've been with me from the beginnin' (ooh, yeah, yeah)
And I know right now that we're not talkin' (not talkin')
I hope you know this dick is still an option
'Cause I'll beat it up (I'll beat it up, yeah)
I'll take my time to learn the way your body functions
You were equestrian, so ride it like a champion (I'll beat it)
This sex will get you high without no other substance

[Chorus]
So who do you belong to now? (Who do you belong to now?)
Who you give that love to now? (Who you give that love to now?)
Who you pullin' up on?
Who you gettin' sprung for now? (Who you gettin' sprung for now?)
And what they got that I ain't got? 'Cause I got a lot (I got a lot)
Don't make me run up on 'em, got me blowin' up their spot (blowin' up their spot)
'Cause I ain't got no business catchin' feelings anyway
I ain't got no business catchin' feelings (feelings)

[Bridge]
Catchin' feelings
I ain't got no business catchin' feelings
I ain't got no business catchin' feelings
Catchin' fee-fee-fee-fee
Feelings
I ain't got no business catchin' feelings
I ain't got no business catchin' feelings
Catchin' fee-fee-fee-fee

[Outro]
Wake up
I don't wanna wake up
I don't wanna wake up
If you ain't layin' next to me
I don't wanna wake up
I don't wanna wake up
I don't wanna wake up
If you ain't layin' next to me-e-e
On me, me, on me, oh, I
On me, on me, on me",

  artist: "The Weeknd",

  album: "My Dear Melancholy,",

  author_id: User.find_by(username: "demo").id,

  img_url: "https://res.cloudinary.com/dawsdkywh/image/upload/v1525713983/My_Dear_Melancholy.jpg",

  song_url: "https://res.cloudinary.com/dawsdkywh/video/upload/v1525668840/The_Weeknd_-_Wasted_Times_Official_Audio.mp3"
)


TrackComment.create(
  body: "Great song!",
  track_id: Track.find_by(title: "Weight in Gold").id,
  author_id: User.find_by(username: "Kevin").id
)

TrackComment.create(
  body: "Don't like it.. more like weight in bronze lol",
  track_id: Track.find_by(title: "Weight in Gold").id,
  author_id: User.find_by(username: "Curtis").id
)

TrackComment.create(
  body: "Awesome!",
  track_id: Track.find_by(title: "Weight in Gold").id,
  author_id: User.find_by(username: "Byron").id
)

TrackComment.create(
  body: "Great looking site, whoever made this should be hired",
  track_id: Track.find_by(title: "Weight in Gold").id,
  author_id: User.find_by(username: "Joseph").id
)



TrackComment.create(
  body: "anyone see drake play fortnite the other night",
  track_id: Track.find_by(title: "God's Plan").id,
  author_id: User.find_by(username: "Adam").id
)

TrackComment.create(
  body: "drakes cool but he needs to chill at raptors games",
  track_id: Track.find_by(title: "God's Plan").id,
  author_id: User.find_by(username: "Howard").id
)

TrackComment.create(
  body: "i love drake more than i love cardi b my name is curtis",
  track_id: Track.find_by(title: "God's Plan").id,
  author_id: User.find_by(username: "Curtis").id
)


TrackComment.create(
  body: "i miss the old kanye",
  track_id: Track.find_by(title: "Good Life").id,
  author_id: User.find_by(username: "Kevin").id
)

TrackComment.create(
  body: "straight from the go kanye",
  track_id: Track.find_by(title: "Good Life").id,
  author_id: User.find_by(username: "Ron").id
)

TrackComment.create(
  body: "chop up the soul kanye",
  track_id: Track.find_by(title: "Good Life").id,
  author_id: User.find_by(username: "Kevin").id
)

TrackComment.create(
  body: "set on his goals kanye",
  track_id: Track.find_by(title: "Good Life").id,
  author_id: User.find_by(username: "Ron").id
)

TrackComment.create(
  body: "i hate the new kanye",
  track_id: Track.find_by(title: "Good Life").id,
  author_id: User.find_by(username: "Joseph").id
)

TrackComment.create(
  body: "the bad mood kanye",
  track_id: Track.find_by(title: "Good Life").id,
  author_id: User.find_by(username: "Howard").id
)

TrackComment.create(
  body: "the always rude kanye",
  track_id: Track.find_by(title: "Good Life").id,
  author_id: User.find_by(username: "Byron").id
)
