/* In this task, make a madlibs templates story
using JS string template literals. In the story
variable, write out the template of your madlibs
using string variables in the place of certain
nouns, adjectives, and verbs */

/* Variables, i.e.
const noun1 = ______
const verb1 = ______

Change thses values to generate a different story
*/

const adj1 = 'gray'
const noun1 = 'koala'
const verbPT1 = 'scurried'
const adv1 = 'quickly'
const adj2 = 'shady'
const noun2 = 'den'
const noun3 = 'elephant'
const adj3 = 'massive'
const verb1 = 'jog'
const adv2 = 'awkwardly'
const verbPT2 = 'begged'
const adj4 = 'wonderful'

// From: https://www.it.iitb.ac.in/~vijaya/ssrvm/worksheetscd/getWorksheets.com/Language%20Arts/madlibsdoc.pdf
const story = `
Today I went to the zoo. I saw a(n) ${adj1} ${noun1} jumping up and down in its tree. He ${verbPT1} ${adv1} through the large tunnel that led to its ${adj2} ${noun2}. I got some peanuts and passed them through the cage to a gigantic gray ${noun3} towering above my head. Feeding that animal made me hungry. I went to get a ${adj3} scoop of ice cream. It filled my stomach. Afterwards I had to ${verb1} ${adv2} to catch our bus. When I got home I ${verbPT2} my mom for a ${adj4} day at the zoo.
`

console.log(story)
