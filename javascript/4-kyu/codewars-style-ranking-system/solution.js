
class User {

  constructor() {
    this.level = 0
    this.progress = 0
  }

  get ranks() {
    return [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8]
  }

  get rank() {
    return this.ranks[this.level]
  }

  incProgress (activityRank) {
    const difficultly = this.calcDifficultly(activityRank)
    if (difficultly >= -1) {
      switch (difficultly) {
        case -1: this.awardProgress(1); break
        case 0: this.awardProgress(3); break
        default:
          this.awardProgress(difficultly * difficultly * 10)
          break
      }
    }
  }

  calcDifficultly(activityRank) {
    const x = this.ranks.indexOf(this.rank)
    const y = this.ranks.indexOf(activityRank)
    if (y >= 0) {
      if (activityRank > this.rank) {
        return this.ranks.slice(x, y).length
      } else {
        return -this.ranks.slice(y, x).length
      }
    } else {
      throw "Illegal Rank"
    }
  }

  awardProgress(points) {
    if (this.rank < 8) {
      this.progress += points
      while (this.progress > 99) {
        this.progress -= 100
        this.level++
        if (this.rank === 8) this.progress = 0
      }
    }
  }
}