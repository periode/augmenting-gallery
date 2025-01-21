# Augmenting the Gallery

<!-- 

This week is about getting an overview of the whole course, and discussing our relationship with digital media, as well as with culture and art.

We will also get started on the basics of HTML and CSS.

-->

---

## Introductions

---

plan for today:

- introductions (me, you, this course)
- augmenting?
- gallery?
- introduction to web technologies

---

### pierre

pierre depaz ([pierre.depaz@nyu.edu](mailto:pierre.depaz@nyu.edu), [pierredepaz.net](https://pierredepaz.net))

teacher in media arts

researcher in media philosophy

<!-- 

I've started teaching game development and programming at the game center at NYU in new york. After spending a couple of year at NYU Abu Dhabi, I'm now teaching this class in Berlin, along with a Fall class on digital culture at a political science university in France.

I also do a lot of programming work for the cultural sector. In NYC also worked at the Whitney Museum and the MoMA PS1. I've also developed prototypes of AR applications for news sources via the Empathetic Media startup. We ended up making augmented stories for the Washington Post and the Associated Press. In Berlin, I made apps, websites and installations for galleries, universities and theater companies.

Research-wise, I wrote a PhD on [the aesthetics of machine languages](https://source.enframed.net), and I'm very interested in how computers allow us to think things.

-->

---

### you

what about you?

what's your name? where are you from? what's your major? what do you expect from this class?

_bonus question: what do you (dis)like about computers and/or galleries?_

<!-- 

Spoiler: no wrong answers

-->

---

### this class

---

__what__

a course about building digital interfaces for arts and culture.

---

__why__

museums, galleries and libraries used to provide access to physical objects, BUT:

- digital media changed the game of __accessibility__
- more and more objects are __born-digital__

---

__how__

through discussions on cultural studies, interaction design and web development, through practical web design and development, leading to a series of digital catalogues.

---

[github.com/periode/augmenting-gallery](https://github.com/periode/augmenting-gallery)

for all class resources, code, tutorials.

<!-- 

This is the website of the course, where class code and notes will be published weekly. As such, you shouldn't have to take notes on your computer (you can take them on paper if you want).

One of the reasons for that is that taking notes on laptops inevitably lead to browsing the internet, and browsing the internet inevitably leads to the persons sitting next to you being distracted by what's happening on your screen, so please do not use laptops in class (outside of programming time), out of respect for your neighbour.

-->

---

## Augmenting

---

what does it mean to _augment_ something?

---

> The microscope, the telescope, are extensions of his sight; the telephone is the extension of his voice; then we have the plow and the sword, extensions of the arm. But the book is something else altogether: the book is an extension of memory and imagination.[^borges]

[^borges]: Jose-Luis Borges, Fictions, 1956.

<!--

Media, in general, is an extension of humans. If books help us extend our thought processes, so do computers! Computers were originally dreamt up to make us think better and faster, as we'll discuss in session 2.

-->

---

Augmenting is the process of using technology to better achieve one's goals.

<!--

This idea has been around specifically since computers became more powerful, in the 1960s, and it was formulated by Douglas Engelbart in a report titled _[Augmenting Human Intellect: A Conceptual Framework](https://dougengelbart.org/content/view/138/)_. To better understand problems and to better derive solutions.

-->

---

Which technologies augment your life? How do they do it?

How do they relate to knowledge and archival?

<!--

As the media theorist Marshall McLuhan and computer scientist Joseph Weizenbaum have respectively said, *media are extensions of man*, and *tools are projections of ourselves*.

The apps we use in our everyday lives have a particular impact on how we interact with the world and with society. Since no technology is intrinsically good or bad, we can rather think about what the *uses* of those apps are: when are they helpful? to whom? when are they not? what are the tradeoffs?

One thing to be remembered in terms of human-centered computer applications (e.g., the ones we use in our everyday lives), is that computers are supposed to _free time_ for us to dispose with as we wish. Examining what we do with our free time is a correlate to using applications.

-->

---

Augmenting to improve is only one side of the __pharmakon__.

<!--

The pharmakôn is a concept that has been going around since the Greek philosophers. Essentially, it is one word that describes both a poison and a cure. It is used to reflect the ambivalence of technology: it can solve problems, but it can also create problems as well. You can read more on [the Wikipedia article](https://en.wikipedia.org/wiki/Pharmakon).

-->

---

What are the pros and cons of Google Maps?

<!--

Maps are always an interface to the world, they are an **abstraction**, and abstractions are ways of thinking that allow us to remove unnecessary in order to get to the essence of a given thing. A map therefore abstracts the physical world, presenting a more understandable, but simpler version of our surroundings.

For example:
- if something doesn't exist on google maps, does it still exist?
- if means of transportation are an abstraction of how to go from A to B, how about ways of transportation? being exposed to more or less pollution? taking a detour through a pedestrian street, or by a canal?

These choices are made, but aren't always transparent, because some level of opacity is the necessary consequence of abstracting. If a story is a path through events, then Google Maps tells a very specific kind of story.

-->

---

__+__ accessibility

__-__ decontextualization

<!--

On the plus side, the digital lowers the barrier to participation, and makes things more accessible. It's easier for people to create and contribute.

On the down side, the digital works because it decontextualizes information. It doesn't know about place, culture, slang or myths. It only knows that 0s and 1s work everywhere.

-->

---

- what is beyond our reach? how do we make it accessible?

- how do we organize information for a better experience?

- what kinds of stories can we tell through a digital gallery?

<!-- 

To conclude our section introducting AR and digital applications, here are some broad questions that will guide our exploration of this medium throughout the semester.

- Augmenting is about **revealing information**. This revealing of information always implies an abstraction: choosing to show thing A instead of thing B because you think it's important to focus on A. These choices need to be deliberate and thoughtful, taking into account what you want to do, and who you're doing it to.

- Augmenting is about **opening up knowledge possibilities**. With an interactive media, you're letting your users do things that they couldn't do before, when we had just books and paintings in museums. What is it that you want them to be able to do, and what is the "best" way to do so? This question relates closely to UI and UX design.

- Augmenting is about *reality*. By archiving arts and culture, and designing access to it, we also change how we perceive the world, and therefore ourselves. I believe it's important not to think in terms of set beliefs (for instance "more is always better"), but rather in terms of what we might gain, and what we might lose, when we use digital technologies.

-->

---

## Galleries

---

What do we do in galleries?

<!--

A gallery is an umbrella term for a collection of things that are exposed to viewing (and maybe even using!). The tip of the iceberg is the art gallery, followed by the museum, but we also have libraries and archives.

We sometimes go to museums to learn about the history of a country, or of a trade, or of a theme. We can also go for temporary exhibitions or events. We can even go to get a coffee or a meal. Museums aim to be, as some would say today, "platforms", they enable multiple kinds of activities through the layout of their infrastructure.

Reflecting upon why you go, and what you do in a museum is a good starting point when designing an application in the context of a museum. However, it shouldn't be the only perspective you think from. What about the team that works at a museum? What is their vision? What about a elementary school class visit? Why do they come? What about someone who's never been to a museum? Why would they want to come?

-->

---

how well are museums and galleries communicating culture?

---

They do so by making __knowledge__ accessible, and telling __stories__.

The stories (through __artworks__, or __artefacts__) relate to one another, and that relate to us.

<!--

Museums are cultural institutions, perhaps one of the most important cultural institutions in the western world. They have multiple roles: they display, preserve, educate, and connect. How they do each of these things, and how well they do it -that is up for debate.

There are two big differences museums and galleries: **money**, and **time**. Objects in a gallery are for sale, while objects in a museum aren't, and galleries mostyl deal with the present (what is being done), while museums mostly deal with the past (what has been done).

Galleries can also take multiple forms and shapes, like pop-up galleries, studio galleries, university galleries. They focus on the display of art works, while museums focus on the display of cultural works.

Particularly, this class will pay attention to the **storytelling** of museums: what kinds of stories, from which perspective, and to what end, are told by museums and galleries?

-->

---

They do so by presenting a network of:

- objects
- people
- places
- stories
- practices
- ...

---

We're going to augment this by making __pocket galleries__.

Websites you can pull up on your smartphone, which represent a part of culture that you consider important to share.

---

## Examples and inspirations

---

[let's amplify unspeakable things](https://eaiaiaiaoi.w-i-t-m.net/index.php)

[wonders of streetview](https://neal.fun/wonders-of-street-view/)

[unesco languages](https://en.wal.unesco.org/discover/languages)

[owned by others](https://ownedbyothers.org/)

[air pressure](https://www.airpressure.info/)

[library of missing datasets](https://mimionuoha.com/the-library-of-missing-datasets)

[trash heap](https://trashheap.party/issues/)

[archive of our own](https://archiveofourown.org/)

[hhellblauu](https://hhellblauu.tumblr.com/)

[polynesian stick charts](http://thenonist.com/index.php/thenonist/permalink/stick_charts/)

[letter form archive](https://oa.letterformarchive.org/)

[broken archive](https://www.brokenarchive.org/)

[buchstaben museum](https://www.buchstabenmuseum.de/en/)

[toastermuseum.com](http://www.toastermuseum.com/)

[handprint](https://www.handprint.com/)

[512kb club](https://512kb.club/)

[museum of failure](https://www.instagram.com/museumoffailure/)

[queering the map](https://www.queeringthemap.com/)

[map of sunsets](https://www.google.com/maps/d/u/0/viewer?mid=1SSk24deubO3anQXw1TXlA6ia0HxAtmz0&ll=35.15158963665428%2C133.99710075&z=7)

---

## Web technologies

---

What is the Web?

<!--

The Web is a way to access files on someone else's computer. It's a way of exchanging information that was designed in the late 90s by Tim Berners-Lee.

-->

---

The Web is a collection of __pages__ linked together.

A page is made of __content__, with a particular __style__, and some __interactivity__.

These pages need to be written in a language that computers understand.

- `HTML` is the language for structure and content
- `CSS` is the language for style
- `JS` is the language interaction

<!-- You can find some general introduction of what the web is, and what HTML is, on the class website here: [General web resources](https://github.com/periode/augmenting-gallery/wiki/Resources#general) -->

---

These languages are translated by a special software called a __web browser__.

Let's use the Developer Tools to reveal the source code of a web page!

`Menu > Developer Tools > Inspect` (doesn't work on Safari :/ )

---

Our websites will be hosted on [Glitch.com](https://glitch.com).

Go ahead and create an account and a `glitch-hello-website`.

---

### Anatomy of a webpage

---

HTML is made of tags, which tell the computer how the page is structured.

This structure is described by __tags__, which say when an __element__ begins, and ends.

---

![A basic HTML tag](https://cdo-curriculum.s3.amazonaws.com/media/uploads/html_element.png)

---

Some of the tags include:

- `p` for paragraph
- `h1` for heading
- `a` for link

---

Tags can be augmented through __attributes__.

The `href` attribute of the `a` tag turns it into a link!

![A basic anchor tag](https://cdn1.link-assistant.com/upload/seowiki/posts/25/at1.png)

---

## Outro

---

This class is about designing digital galleries for arts and cultures (and thinking about what that means!).

---

For next week:

- Sign up to do one presentation by listing __two possible choices__ on the [discussions page](https://github.com/periode/augmenting-gallery/discussions/14)
- Set up your Glitch account and post your URL on the [discussions page](https://github.com/periode/augmenting-gallery/discussions/30)
- Write your response to the reading by adding one heading, one link, one paragraph and one image.

We will be talking about the historical dreams of augmenting humans through computers.
