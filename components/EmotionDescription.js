export default {
    template: `
        <div class="screen" :class="{ active: isActive }">
            <button class="back-button" @click="goBack">← Back</button>
            <h1>You're feeling {{ emotion }}</h1>
            <div class="emotion-description">
                <p>{{ getDescription }}</p>
            </div>
        </div>
    `,
    props: {
        isActive: Boolean,
        emotion: String
    },
    computed: {
        getDescription() {
            const descriptions = {
                // Bad emotions
                'Overwhelmed': "It's like trying to juggle too many toys at once - everything feels too much!",
                'Out of control': "Like being on a super fast merry-go-round that you can't stop!",
                'Indifferent': "Like when you don't care if you have pizza or spaghetti for dinner - nothing seems exciting.",
                'Apathetic': "Like when your favorite TV show is on but you don't feel like watching it.",
                'Pressured': "Like when everyone is telling you to hurry up and you can't go fast enough!",
                'Rushed': "Like when you're late for school and have to eat breakfast super quick!",
                'Sleepy': "Like when your eyes feel heavy and all you want is a cozy nap!",
                'Unfocused': "Like when you're trying to read but the words keep getting jumbled up!",

                // Happy emotions
                'Eager': "Like when you can't wait to go to the playground with your friends!",
                'Energetic': "Like when you have so much happy energy you could bounce to the moon!",
                'Intimate': "Like sharing a special secret with your best friend!",
                'Romantic': "Like the warm fuzzy feeling you get from watching a Disney love story!",
                'Hopeful': "Like making a wish when you see a shooting star!",
                'Inspired': "Like when you see something amazing and want to make one yourself!",
                'Relieved': "Like finding your lost teddy bear after looking everywhere!",
                'Satisfied': "Like drinking cold water when you're really thirsty!",
                'Courageous': "Like standing up for your friend when someone is being mean!",
                'Creative': "Like having a head full of colorful ideas ready to draw or build!",
                'Respected': "Like when grown-ups really listen to your ideas!",
                'Valued': "Like when your drawing gets put on the fridge for everyone to see!",

                // Surprised emotions
                'Shocked': "Like when someone jumps out and says BOO!",
                'Dismayed': "Like when you find out the playground is closed on your favorite day!",
                'Disillusioned': "Like finding out that magic tricks are just clever tricks!",
                'Perplexed': "Like trying to solve a puzzle where none of the pieces seem to fit!",
                'Astonished': "Like seeing a rainbow for the very first time!",
                'Awe': "Like looking up at the stars and realizing how big the sky is!",

                // Fearful emotions
                'Exposed': "Like being on stage with everyone looking at you!",
                'Nervous': "Like butterflies dancing in your tummy before show and tell!",
                'Persecuted': "Like when everyone thinks you did something wrong but you didn't!",
                'Excluded': "Like watching other kids play and not being invited to join in!",
                'Insignificant': "Like being a tiny ant next to a big elephant!",
                'Worthless': "Like when you think nobody wants to play with you - but that's never true!",
                'Inferior': "Like when you think everyone is better at games than you!",
                'Inadequate': "Like when you can't reach something even on your tippy toes!",
                'Worried': "Like when your mom is late picking you up from school!",
                'Overwhelmed': "Like having too many toys to clean up at once!",
                'Frightened': "Like hearing a big thunderstorm at night!",
                'Helpless': "Like watching your ice cream scoop fall off the cone!",

                // Disgusted emotions
                'Hesitant': "Like when you have to try a new food that looks weird!",
                'Horrified': "Like finding a bug in your sandwich - yuck!",
                'Detestable': "Like when something is so yucky you can't even look at it!",
                'Nauseated': "Like when you've eaten too much candy and your tummy feels funny!",
                'Revolted': "Like smelling old milk - super yucky!",
                'Appalled': "Like seeing someone step on your favorite toy on purpose!",
                'Embarrassed': "Like when you trip in front of everyone at school!",
                'Judgmental': "Like when you think someone's drawing isn't good - but remember, everyone draws differently!",

                // Angry emotions
                'Let down': "Like when someone promises to play with you but doesn't show up!",
                'Humiliated': "Like when people laugh at you for making a mistake!",
                'Ridiculed': "Like when someone makes fun of your new haircut!",
                'Disrespected': "Like when someone keeps interrupting you while you're talking!",
                'Powerless': "Like when it's raining and you can't go outside to play!",
                'Vulnerable': "Like walking on ice and being afraid you might slip!",
                'Jealous': "Like when your friend gets the toy you really wanted!",
                'Mistreated': "Like when someone cuts in front of you in the lunch line!",
                'Violated': "Like when someone reads your private diary without asking!",
                'Resentful': "Like when your sibling gets to stay up later than you!",
                'Furious': "Like when you're so angry you want to stomp and shout!",
                'Hostile': "Like when you want to say mean things - but take a deep breath instead!",

                // Sad emotions
                'Isolated': "Like being the only kid not invited to a birthday party!",
                'Abandoned': "Like when your best friend plays with someone else all week!",
                'Victimized': "Like when bigger kids take your swing at the playground!",
                'Fragile': "Like a soap bubble that might pop any second!",
                'Grief': "Like when you lose your favorite stuffed animal forever!",
                'Powerless': "Like watching your balloon float away into the sky!",
                'Regretful': "Like when you break your sister's toy and wish you hadn't!",
                'Remorseful': "Like when you say something mean and feel really sorry about it!",
                'Stupid': "Like when you make a mistake - but remember, mistakes help us learn!",
                'Worthless': "Like feeling nobody wants to be your friend - but that's never true!",
                'Apathetic': "Like when none of your toys seem fun anymore!",
                'Indifferent': "Like when you don't care what game you play at recess!"
            };
            return descriptions[this.emotion] || "This feeling is like...";
        }
    },
    methods: {
        goBack() {
            this.$emit('go-back');
        }
    }
}
