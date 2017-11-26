contract('ThirdAngle', _ => {
  const ThirdAngle = artifacts.require('ThirdAngle');
  it('should have a function "otherAngle" that correctly get third angle from another two (Sample Test)', async function () {
    assert.equal((await (await ThirdAngle.deployed()).otherAngle.call(30, 60)).valueOf(), 90);
    assert.equal((await (await ThirdAngle.deployed()).otherAngle.call(60, 60)).valueOf(), 60);
    assert.equal((await (await ThirdAngle.deployed()).otherAngle.call(43, 78)).valueOf(), 59);
    assert.equal((await (await ThirdAngle.deployed()).otherAngle.call(10, 20)).valueOf(), 150);
  });
});