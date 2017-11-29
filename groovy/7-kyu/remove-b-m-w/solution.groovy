class BMWRemover {
  static removeBMW(str) {
    if (str in String) {
      return str.replaceAll(/(?i)[BMW]/, '')
    } else {
      throw new IllegalArgumentException("This program only works for text.")
    }
  }
}
