export default {
    template: `
        <div class="screen" :class="{ active: isActive }">
            <button class="back-button" @click="goBack">← Back</button>
            <h1>What kind of {{ parentEmotion }}?</h1>
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
                'Bad': ['Stressed', 'Scared', 'Busy', 'Tired'],
                'Happy': ['Excited', 'Loved', 'Optimistic', 'Peaceful', 'Powerful', 'Accepted'],
                'Surprised': ['Startled', 'Confused', 'Amazed', 'Excited'],
                'Fearful': ['Threatened', 'Rejected', 'Weak', 'Insecure', 'Anxious', 'Scared'],
                'Disgusted': ['Repelled', 'Awful', 'Disappointed', 'Disapproving'],
                'Angry': ['Threatened', 'Rejected', 'Weak', 'Insecure', 'Anxious', 'Scared'],
                'Sad': ['Lonely', 'Vulnerable', 'Despair', 'Guilty', 'Ashamed', 'Bored']
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
