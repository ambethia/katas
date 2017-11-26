class MyTestCases extends TestCase
{
    public function testStaticOperations() {
      $this->assertEquals(heron(3, 4, 5), 6);
      $this->assertEquals(heron(6, 8, 10), 24);
    }
}