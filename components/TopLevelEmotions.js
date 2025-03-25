export default {
    template: `
        <div class="screen" :class="{ active: isActive }">
            <h1>How are you feeling?</h1>
            <button v-for="emotion in emotions" 
                    :key="emotion"
                    class="emotion-button" 
                    @click="selectEmotion(emotion)">
                {{ emotion }}
            </button>
        </div>
    `,
    props: {
        isActive: Boolean
    },
    data() {
        return {
            emotions: ['Happy', 'Surprised', 'Fearful', 'Disgusted', 'Angry', 'Bad', 'Sad']
        }
    },
    methods: {
        selectEmotion(emotion) {
            this.$emit('emotion-selected', emotion);
        }
    }
}
