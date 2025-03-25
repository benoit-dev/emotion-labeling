export default {
    template: `
        <div class="screen" :class="{ active: isActive }">
            <button class="back-button" @click="goBack">← Back</button>
            <h1>You're feeling {{ parentEmotion }}</h1>
            <button v-for="emotion in getEmotions" 
                    :key="emotion"
                    class="emotion-button" 
                    @click="selectEmotion(emotion)">
                {{ emotion }}
            </button>
        </div>
    `,
    props: {
        isActive: Boolean,
        parentEmotion: String
    },
    computed: {
        getEmotions() {
            const emotionMap = {
                // Bad emotions
                'Stressed': ['Overwhelmed', 'Out of control'],
                'Scared': ['Indifferent', 'Apathetic'],
                'Busy': ['Pressured', 'Rushed'],
                'Tired': ['Sleepy', 'Unfocused'],
                
                // Happy emotions
                'Excited': ['Eager', 'Energetic'],
                'Loved': ['Intimate', 'Romantic'],
                'Optimistic': ['Hopeful', 'Inspired'],
                'Peaceful': ['Relieved', 'Satisfied'],
                'Powerful': ['Courageous', 'Creative'],
                'Accepted': ['Respected', 'Valued'],
                
                // Surprised emotions
                'Startled': ['Shocked', 'Dismayed'],
                'Confused': ['Disillusioned', 'Perplexed'],
                'Amazed': ['Astonished', 'Awe'],
                'Excited': ['Eager', 'Energetic'],
                
                // Fearful emotions
                'Threatened': ['Exposed', 'Nervous'],
                'Rejected': ['Persecuted', 'Excluded'],
                'Weak': ['Insignificant', 'Worthless'],
                'Insecure': ['Inferior', 'Inadequate'],
                'Anxious': ['Worried', 'Overwhelmed'],
                'Scared': ['Frightened', 'Helpless'],
                
                // Disgusted emotions
                'Repelled': ['Hesitant', 'Horrified'],
                'Awful': ['Detestable', 'Nauseated'],
                'Disappointed': ['Revolted', 'Appalled'],
                'Disapproving': ['Embarrassed', 'Judgmental'],
                
                // Angry emotions
                'Threatened': ['Let down', 'Humiliated'],
                'Rejected': ['Ridiculed', 'Disrespected'],
                'Weak': ['Powerless', 'Vulnerable'],
                'Insecure': ['Jealous', 'Mistreated'],
                'Anxious': ['Violated', 'Resentful'],
                'Scared': ['Furious', 'Hostile'],
                
                // Sad emotions
                'Lonely': ['Isolated', 'Abandoned'],
                'Vulnerable': ['Victimized', 'Fragile'],
                'Despair': ['Grief', 'Powerless'],
                'Guilty': ['Regretful', 'Remorseful'],
                'Ashamed': ['Stupid', 'Worthless'],
                'Bored': ['Apathetic', 'Indifferent']
            };
            return emotionMap[this.parentEmotion] || [];
        }
    },
    methods: {
        selectEmotion(emotion) {
            this.$emit('emotion-selected', emotion);
        },
        goBack() {
            this.$emit('go-back');
        }
    }
}
