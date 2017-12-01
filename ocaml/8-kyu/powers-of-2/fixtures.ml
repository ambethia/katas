module Tests = struct
    open OUnit
    let suite = [
        "powersOfTwo" >::: [
            "test 1" >:: (fun _ -> assert_equal [1] (powersOfTwo 0));
            "test 2" >:: (fun _ -> assert_equal [1;2] (powersOfTwo 1));
            "test 3" >:: (fun _ -> assert_equal [1;2;4] (powersOfTwo 2));
        ]
    ]
end