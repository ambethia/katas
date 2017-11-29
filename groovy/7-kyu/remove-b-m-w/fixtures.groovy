// You can test using JUnit or Spock. JUnit is shown below
// TODO: replace this example test with your own, this is just here to demonstrate usage.
import org.junit.Test

class TestExample {
  @Test
  void "Basic tests"() {
    assert BMWRemover.removeBMW("bmwvolvoBMW") == "volvo"
  }
}
