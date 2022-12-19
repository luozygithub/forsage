import Vue from 'vue'
import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale'
import de from './de'
import en from './en'

Vue.use(VueI18n)

let i18n = new VueI18n({
    locale: localStorage.getItem('language') || 'en',
    messages: {
        'de': {
            ...de
        },
        'en': {
            ...en
        }
    }
})
locale.i18n((key, value) => i18n.t(key, value))
export default i18n;
