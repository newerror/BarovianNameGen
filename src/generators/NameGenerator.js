import {femaleFirstNames} from './data/femaleFirstNames'
import {femaleLastNames} from './data/femaleLastNames'
import {maleFirstNames} from './data/maleFirstNames'
import {maleLastNames} from './data/maleLastNames'

export default class NameGenerator {
  constructor () {
    this.gender = ''
    this.firstName = ''
    this.lastName = ''
  }

  choose (nameArr) {
    const choice = nameArr[Math.floor(Math.random() * nameArr.length)]
    return choice
  }

  generate (gender) {
    if (gender === 'random') {
      this.gender = this.randomGender()
    } else {
      this.gender = gender
    }

    const genderEmoji = this.gender === 'female' ? '👩' : '👨'

    if (this.gender === 'female') {
      this.firstName = this.choose(femaleFirstNames)
      this.lastName = this.choose(femaleLastNames)
    }

    if (this.gender === 'male') {
      this.firstName = this.choose(maleFirstNames)
      this.lastName = this.choose(maleLastNames)
    }

    return {
      full: `${this.firstName} ${this.lastName}`,
      emoji: genderEmoji
    }
  }

  randomGender () {
    const r = Math.random()
    if (r < 0.5) {
      return 'female'
    }
    return 'male'
  }
}
