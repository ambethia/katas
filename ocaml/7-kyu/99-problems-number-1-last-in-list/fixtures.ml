module Tests = struct
    open OUnit
    let suite = [
        "last" >:::
            [
                "works correctly for non-empty lists" >:: (fun _ ->
                   assert_equal (last [1;2;3]) (Some 3)
                );
                "works correctly for empty lists" >:: (fun _ ->
                   assert_equal (last []) None
                )
            ]
        ]
    ;;
end