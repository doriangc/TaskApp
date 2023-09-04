import { reactive } from 'vue'

export const store = reactive({
  title: '',
  subtitle: '',
  setTitle(newTitle: string) {
    this.title = newTitle;
  },
  setSubtitle(newSubtitle: string) {
    this.subtitle = newSubtitle;
  }
})