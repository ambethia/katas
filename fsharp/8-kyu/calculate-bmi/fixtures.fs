module Tests = begin
    open Fuchu

    let suite =
        testList "Tests" [
            testCase "works as expected" <| (fun _ ->
                Assert.Equal("bmi 80.0 1.80", "Normal", bmi 80.0 1.80);
            )
        ]
end
